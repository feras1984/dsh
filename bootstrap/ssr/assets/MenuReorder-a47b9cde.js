import { jsxs, jsx } from "react/jsx-runtime";
import React from "react";
import { Container } from "typedi";
import "reflect-metadata";
import { M as MenuService } from "./MenuService-0806ba85.js";
import { Box, Stack, Grid, Typography, IconButton, Paper, List, ListItemButton, ListItemIcon, Checkbox, ListItemText } from "@mui/material";
import { Head, Link } from "@inertiajs/react";
import { A as AdminLayout } from "./AdminLayout-7a25f172.js";
import { C as CommonService } from "../app.js";
import { C as CustomButton } from "./CustomButton-4b9588a9.js";
import { I as Icon } from "./Icon-2105584c.js";
import { u as useSnackbarHook, C as CustomSnackbar } from "./CustomSnackbar-a775827f.js";
import "axios";
import "./styles.module-7e19f3c1.js";
import "@mui/material/ListSubheader/index.js";
import "@mui/material/List/index.js";
import "@mui/material/ListItemButton/index.js";
import "@mui/material/ListItemIcon/index.js";
import "@mui/material/ListItemText/index.js";
import "@mui/material/Collapse/index.js";
import "./BlockCategories-6eec95f4.js";
import "@mui/material/colors/index.js";
import "@mui/icons-material/Menu.js";
import "react-dom/client";
import "react-redux";
import "@reduxjs/toolkit";
import "localstorage-slim";
import "crypto-js";
import "crypto-js/enc-utf8.js";
import "@mui/x-date-pickers";
import "@mui/x-date-pickers/AdapterDateFns/index.js";
import "i18next";
import "react-i18next";
import "@syncfusion/ej2-base";
import "@mui/icons-material/Add.js";
import "@mui/icons-material/Send.js";
import "@mui/icons-material/ChangeCircleOutlined.js";
import "@mui/icons-material/DeleteOutlineOutlined.js";
import "@mui/icons-material/SmartDisplayOutlined.js";
import "@mui/icons-material/AutoFixNormal.js";
import "@mui/icons-material/Reorder.js";
import "@mui/icons-material/ArrowBackIos.js";
import "react-icons/fa/index.esm.js";
import "react-icons/fa6/index.esm.js";
import "react-icons/gr/index.esm.js";
import "react-icons/ai/index.esm.js";
import "react-icons/hi/index.esm.js";
import "react-icons/io/index.esm.js";
import "react-icons/md/index.esm.js";
import "react-icons/bi/index.esm.js";
import "@mui/icons-material/AccountCircle.js";
import "react-icons";
import "@mui/icons-material/MoveToInbox.js";
import "@mui/icons-material/Drafts.js";
import "@mui/icons-material/ExpandLess.js";
import "@mui/icons-material/ExpandMore.js";
import "@mui/icons-material/StarBorder.js";
import "@mui/icons-material/ArrowForwardIos.js";
import "@mui/icons-material/Category.js";
import "@mui/icons-material/Person.js";
import "@mui/icons-material/ListAlt.js";
import "@mui/icons-material/Settings.js";
import "@mui/icons-material/Language.js";
import "@mui/icons-material/Email.js";
import "@mui/icons-material/DarkMode.js";
import "@mui/icons-material/LightMode.js";
import "@mui/icons-material/Edit.js";
import "@mui/icons-material/DeleteRounded.js";
import "@mui/icons-material/Web.js";
import "@mui/icons-material/Slideshow.js";
import "@mui/icons-material/DesignServices.js";
import "@mui/icons-material/Business.js";
import "@mui/icons-material/List.js";
import "@mui/icons-material/Link.js";
import "@mui/icons-material/ConnectWithoutContact.js";
import "@mui/icons-material/Contacts.js";
import "@mui/icons-material/LocalPhone.js";
import "@mui/icons-material/WhatsApp.js";
import "@mui/icons-material/Fax.js";
import "@mui/icons-material/LocalPostOffice.js";
import "@mui/icons-material/PlayCircle.js";
import "@mui/icons-material/ZoomIn.js";
import "@mui/icons-material/ZoomOut.js";
import "@mui/icons-material/ZoomInMap.js";
import "@mui/icons-material/ZoomOutMap.js";
import "@mui/icons-material/StopCircle.js";
import "@mui/icons-material/KeyboardArrowLeft.js";
import "@mui/icons-material/KeyboardDoubleArrowLeft.js";
import "@mui/icons-material/KeyboardArrowRight.js";
import "@mui/icons-material/KeyboardDoubleArrowRight.js";
import "@mui/icons-material/ShoppingCart.js";
import "@mui/icons-material/MonetizationOn.js";
import "@mui/icons-material/GppGood.js";
import "@mui/icons-material/Login.js";
import "@mui/icons-material/HowToReg.js";
import "@mui/icons-material/Logout.js";
import "@mui/icons-material";
import "@mui/icons-material/Notifications.js";
import "@mui/icons-material/MoreVert.js";
import "@mui/icons-material/Close.js";
import "@mui/material/Alert/index.js";
function not(a, b) {
  return a.filter((value) => b.indexOf(value) === -1);
}
function intersection(a, b) {
  return a.filter((value) => b.indexOf(value) !== -1);
}
const MenuReorder = ({ category, menu }) => {
  console.log("links: ", menu);
  const menuService = Container.get(MenuService);
  const commonService = Container.get(CommonService);
  const getTitle = () => {
    return commonService.toTitleCase(category);
  };
  const { snackbar, setSnackbar, handleClose } = useSnackbarHook();
  const [checked, setChecked] = React.useState([]);
  const [left, setLeft] = React.useState(menu);
  const [right, setRight] = React.useState([]);
  const leftChecked = intersection(checked, left);
  const rightChecked = intersection(checked, right);
  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];
    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }
    setChecked(newChecked);
  };
  const handleAllRight = () => {
    setRight(right.concat(left));
    setLeft([]);
  };
  const handleCheckedRight = () => {
    setRight(right.concat(leftChecked));
    setLeft(not(left, leftChecked));
    setChecked(not(checked, leftChecked));
  };
  const handleCheckedLeft = () => {
    setLeft(left.concat(rightChecked));
    setRight(not(right, rightChecked));
    setChecked(not(checked, rightChecked));
  };
  const handleAllLeft = () => {
    setLeft(left.concat(right));
    setRight([]);
  };
  const customList = (items) => /* @__PURE__ */ jsx(Paper, { sx: { width: 200, height: 230, overflow: "auto" }, children: /* @__PURE__ */ jsx(List, { dense: true, component: "div", role: "list", children: items.map((menu2, index) => {
    const labelId = `transfer-list-item-${menuService.getMenuName(menu2)}-label`;
    return /* @__PURE__ */ jsxs(
      ListItemButton,
      {
        role: "listitem",
        onClick: handleToggle(menu2),
        children: [
          /* @__PURE__ */ jsx(ListItemIcon, { children: /* @__PURE__ */ jsx(
            Checkbox,
            {
              checked: checked.indexOf(menu2) !== -1,
              tabIndex: -1,
              disableRipple: true,
              inputProps: {
                "aria-labelledby": labelId
              }
            }
          ) }),
          /* @__PURE__ */ jsx(ListItemText, { id: labelId, primary: menuService.getMenuName(menu2) })
        ]
      },
      menuService.getMenuName(menu2)
    );
  }) }) });
  const reorder = () => {
    if (left.length > 0) {
      setSnackbar(
        (snackbarState) => ({ ...snackbarState, open: true, message: "Reorder all the list", severity: "error" })
      );
      return;
    }
    const orderList = right.map((item, index) => {
      return { id: item.id, order: index + 1 };
    });
    const formData = new FormData();
    formData.append("list", JSON.stringify(orderList));
    menuService.reorder(formData).then((response) => {
      setLeft(right);
      setRight([]);
      setSnackbar(
        (snackbarState) => ({ ...snackbarState, open: true, message: "A list has been ordered", severity: "success" })
      );
    }).catch(() => {
      setSnackbar(
        (snackbarState) => ({ ...snackbarState, open: true, message: "Error Happened while reordering list", severity: "error" })
      );
    });
  };
  return /* @__PURE__ */ jsxs(AdminLayout, { children: [
    /* @__PURE__ */ jsx(Head, { title: "Reorder " + getTitle() }),
    /* @__PURE__ */ jsx(Box, { className: "py-[16px]", children: /* @__PURE__ */ jsx(
      Stack,
      {
        direction: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        spacing: 2,
        children: /* @__PURE__ */ jsx(Link, { href: `/admin/website/get-menu/${category}`, children: /* @__PURE__ */ jsx(CustomButton, { task: "back", text: "to list" }) })
      }
    ) }),
    /* @__PURE__ */ jsxs(Grid, { container: true, spacing: 2, justifyContent: "center", alignItems: "center", children: [
      /* @__PURE__ */ jsxs(Grid, { item: true, children: [
        /* @__PURE__ */ jsx(Typography, { children: "Old List" }),
        customList(left)
      ] }),
      /* @__PURE__ */ jsx(Grid, { item: true, children: /* @__PURE__ */ jsxs(Grid, { container: true, direction: "column", alignItems: "center", children: [
        /* @__PURE__ */ jsx(
          IconButton,
          {
            sx: { my: 0.5 },
            size: "small",
            onClick: handleAllRight,
            disabled: left.length === 0,
            "aria-label": "move all right",
            children: /* @__PURE__ */ jsx(Icon, { name: "double-right" })
          }
        ),
        /* @__PURE__ */ jsx(
          IconButton,
          {
            sx: { my: 0.5 },
            size: "small",
            onClick: handleCheckedRight,
            disabled: leftChecked.length === 0,
            "aria-label": "move selected right",
            children: /* @__PURE__ */ jsx(Icon, { name: "right" })
          }
        ),
        /* @__PURE__ */ jsx(
          IconButton,
          {
            sx: { my: 0.5 },
            size: "small",
            onClick: handleCheckedLeft,
            disabled: rightChecked.length === 0,
            "aria-label": "move selected left",
            children: /* @__PURE__ */ jsx(Icon, { name: "left" })
          }
        ),
        /* @__PURE__ */ jsx(
          IconButton,
          {
            sx: { my: 0.5 },
            size: "small",
            onClick: handleAllLeft,
            disabled: right.length === 0,
            "aria-label": "move all left",
            children: /* @__PURE__ */ jsx(Icon, { name: "double-left" })
          }
        )
      ] }) }),
      /* @__PURE__ */ jsxs(Grid, { item: true, children: [
        /* @__PURE__ */ jsx(Typography, { children: "New List" }),
        customList(right)
      ] })
    ] }),
    /* @__PURE__ */ jsx(
      Stack,
      {
        direction: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        spacing: 2,
        className: "py-[16px]",
        children: /* @__PURE__ */ jsx(
          CustomButton,
          {
            task: "reorder",
            text: commonService.toTitleCase(category),
            onClick: reorder
          }
        )
      }
    ),
    /* @__PURE__ */ jsx(
      CustomSnackbar,
      {
        open: snackbar.open,
        message: snackbar.message,
        onClose: handleClose,
        severity: snackbar.severity
      }
    )
  ] });
};
export {
  MenuReorder as default
};
