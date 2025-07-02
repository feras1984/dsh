import { jsx, jsxs } from "react/jsx-runtime";
import { Link, Head } from "@inertiajs/react";
import { IconButton, Box, Modal, Typography, Stack } from "@mui/material";
import { C as CustomButton } from "./CustomButton-4b9588a9.js";
import { A as AdminLayout } from "./AdminLayout-43a12132.js";
import { C as CommonService } from "../app.js";
import { Container } from "typedi";
import "reflect-metadata";
import React from "react";
import { M as MenuService } from "./MenuService-0806ba85.js";
import Brightness1Icon from "@mui/icons-material/Brightness1.js";
import { GridComponent, ColumnsDirective, ColumnDirective, Inject, Page, Toolbar, ExcelExport, PdfExport, Selection, Sort, Search, Filter, RowDD } from "@syncfusion/ej2-react-grids";
import { u as useSnackbarHook, C as CustomSnackbar } from "./CustomSnackbar-a775827f.js";
import "@mui/icons-material/Add.js";
import "@mui/icons-material/Send.js";
import "@mui/icons-material/ChangeCircleOutlined.js";
import "@mui/icons-material/DeleteOutlineOutlined.js";
import "@mui/icons-material/SmartDisplayOutlined.js";
import "@mui/icons-material/AutoFixNormal.js";
import "@mui/icons-material/Reorder.js";
import "@mui/icons-material/ArrowBackIos.js";
import "react-i18next";
import "./styles.module-7e19f3c1.js";
import "@mui/material/ListSubheader/index.js";
import "@mui/material/List/index.js";
import "@mui/material/ListItemButton/index.js";
import "@mui/material/ListItemIcon/index.js";
import "@mui/material/ListItemText/index.js";
import "@mui/material/Collapse/index.js";
import "./BlockCategories-fdc6a0f8.js";
import "./Icon-2105584c.js";
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
import "@mui/icons-material/Menu.js";
import "@mui/icons-material/MonetizationOn.js";
import "@mui/icons-material/GppGood.js";
import "@mui/icons-material/Login.js";
import "@mui/icons-material/HowToReg.js";
import "@mui/icons-material/Logout.js";
import "@mui/icons-material";
import "@mui/icons-material/Notifications.js";
import "@mui/icons-material/MoreVert.js";
import "@mui/icons-material/Close.js";
import "@mui/material/colors/index.js";
import "axios";
import "react-dom/client";
import "react-redux";
import "@reduxjs/toolkit";
import "localstorage-slim";
import "crypto-js";
import "crypto-js/enc-utf8.js";
import "@mui/x-date-pickers";
import "@mui/x-date-pickers/AdapterDateFns/index.js";
import "i18next";
import "@syncfusion/ej2-base";
import "@mui/material/Alert/index.js";
const initialState = {
  menus: [],
  limit: "0",
  offset: 0,
  search: "",
  count: 0,
  next: () => {
  },
  loading: false,
  changeLimit: (val) => {
  },
  onSearch: (val) => {
  },
  activate: (id, status) => {
  },
  deleteFn: (id) => {
  },
  reorder: ([]) => {
  }
};
const MenusContext = React.createContext(initialState);
const MenusProvider = ({ value, children }) => {
  return /* @__PURE__ */ jsx(MenusContext.Provider, { value, children });
};
const useMenusContext = () => {
  const context = React.useContext(MenusContext);
  if (context === void 0) {
    throw new Error("The context should be inside the provider!");
  }
  return context;
};
const ActiveForm = (props) => {
  const { activate, loading } = useMenusContext();
  const handleClick = () => {
    if (activate) {
      activate(props.id, !props.isActive);
    }
  };
  return /* @__PURE__ */ jsx(IconButton, { onClick: handleClick, disabled: loading, children: /* @__PURE__ */ jsx(Brightness1Icon, { color: props.isActive ? "activate" : "deactivate" }) });
};
const EditButton$1 = (props) => {
  return /* @__PURE__ */ jsx(Link, { href: `/admin/website/menu/details/${props.id}`, children: /* @__PURE__ */ jsx(CustomButton, { task: "display", text: "" }) });
};
const modalStyle = "_modalStyle_1bxe6_1";
const styles = {
  modalStyle
};
const EditButton = (props) => {
  const [openModal, setOpenModal] = React.useState(false);
  const { deleteFn } = useMenusContext();
  const handleCloseModal = () => {
    setOpenModal(false);
  };
  const handleOpenModal = () => {
    setOpenModal(true);
  };
  const handleDeleteCategory = () => {
    deleteFn(props.id);
    setOpenModal(false);
  };
  return /* @__PURE__ */ jsxs(Box, { children: [
    /* @__PURE__ */ jsx(
      CustomButton,
      {
        task: "delete",
        text: "",
        onClick: handleOpenModal
      }
    ),
    /* @__PURE__ */ jsx(
      Modal,
      {
        open: openModal,
        onClose: handleCloseModal,
        "aria-labelledby": "modal-modal-title",
        "aria-describedby": "modal-modal-description",
        children: /* @__PURE__ */ jsxs(Box, { className: styles.modalStyle, sx: {
          bgcolor: "background.paper",
          color: "text.primary",
          border: `2px solid`
        }, children: [
          /* @__PURE__ */ jsx(Typography, { id: "modal-modal-title", variant: "h6", component: "h2", children: "Confirm Deletion Message" }),
          /* @__PURE__ */ jsxs(Typography, { id: "modal-modal-description", sx: { mt: 2 }, children: [
            "Are you sure that you want to delete ",
            props.name
          ] }),
          /* @__PURE__ */ jsx(
            Stack,
            {
              direction: "row",
              justifyContent: "flex-start",
              alignItems: "center",
              spacing: 2,
              className: "m-[8px]",
              children: /* @__PURE__ */ jsx(CustomButton, { task: "delete", text: "", onClick: handleDeleteCategory })
            }
          )
        ] })
      }
    )
  ] });
};
const menusGrid = [
  { type: "checkbox", width: "50" },
  {
    field: "name",
    headerText: "Name",
    width: "250",
    allowFiltering: true,
    // filterTemplate: filterName,
    textAlign: "Center"
  },
  {
    field: "parent",
    headerText: "Parent",
    width: "150",
    textAlign: "Center"
  },
  {
    field: "isActive",
    headerText: "Status",
    width: "130",
    // format: 'yMd',
    textAlign: "Center",
    template: ActiveForm
    // template: customerGridStatus,
  },
  {
    headerText: "Edit",
    width: "130",
    textAlign: "Center",
    template: EditButton$1
  },
  {
    headerText: "Delete",
    width: "130",
    textAlign: "Center",
    template: EditButton
  }
];
const MenuList = () => {
  const menuService = Container.get(MenuService);
  const { menus, onSearch, reorder } = useMenusContext();
  let grid;
  const selectionSettings = { type: "Multiple" };
  const FilterOptions = {
    type: "Excel"
  };
  const pageOptions = {
    pageSizes: CommonService.PageSizes,
    pageSize: CommonService.ListLimit,
    totalRecordsCount: 3,
    pageCount: 25
  };
  const actionComplete = (args) => {
    switch (args.requestType) {
      case "paging":
        break;
      case "searching":
        args.searchString;
        break;
      case "rowdraganddrop":
        let orderList = [];
        const rows = args.rows;
        rows == null ? void 0 : rows.map((row, index) => {
          orderList = [...orderList, { id: row.data.id, order: index }];
        });
        reorder(orderList);
        break;
    }
  };
  const rowDrop = (args) => {
    var _a;
    if (args.rows !== void 0 && args.fromIndex !== void 0 && args.dropIndex !== void 0) {
      args.cancel = true;
      let value = [];
      for (let r = 0; r < ((_a = args == null ? void 0 : args.rows) == null ? void 0 : _a.length); r++) {
        value.push((args == null ? void 0 : args.fromIndex) + r);
      }
      if (grid)
        grid.reorderRows(value, args.dropIndex);
    }
  };
  return /* @__PURE__ */ jsx(Box, { children: /* @__PURE__ */ jsxs(
    GridComponent,
    {
      ref: (g) => grid = g,
      id: "blockComp",
      dataSource: menuService.mapMenuGrid(menus),
      allowPaging: true,
      allowSorting: true,
      allowFiltering: true,
      allowExcelExport: true,
      allowPdfExport: true,
      toolbar: ["Delete", "Search"],
      editSettings: {
        allowDeleting: true,
        // allowEditing: true,
        showDeleteConfirmDialog: true
      },
      filterSettings: FilterOptions,
      pageSettings: pageOptions,
      actionComplete,
      allowRowDragAndDrop: true,
      selectionSettings,
      rowDrop,
      children: [
        /* @__PURE__ */ jsx(ColumnsDirective, { children: menusGrid.map((item, key) => /* @__PURE__ */ jsx(ColumnDirective, { ...item }, key)) }),
        /* @__PURE__ */ jsx(Inject, { services: [
          Page,
          Toolbar,
          ExcelExport,
          PdfExport,
          Selection,
          // Edit,
          Sort,
          Search,
          Filter,
          RowDD
        ] })
      ]
    }
  ) });
};
const LinksContainer = ({ menus, count }) => {
  const [currentMenus, setCurrentMenus] = React.useState(menus);
  const [localeMenus, setLocaleMenus] = React.useState(menus);
  const [loading, setLoading] = React.useState(false);
  React.useState("");
  const menuService = Container.get(MenuService);
  const [limit, setLimit] = React.useState(CommonService.FetchList[0]);
  const { snackbar, setSnackbar, handleClose } = useSnackbarHook();
  const changeLimit = (val) => {
    setLimit(val);
  };
  const activate = (id, status) => {
    const formData = new FormData();
    formData.append("isActive", status ? "true" : "false");
    menuService.menuActivation(formData, id).then((response) => {
      setCurrentMenus(currentMenus.map((menu) => {
        if (menu.id === response.data.id)
          return response.data;
        else
          return menu;
      }));
      setLocaleMenus(localeMenus.map((menu) => {
        if (menu.id === response.data.id)
          return response.data;
        else
          return menu;
      }));
      setSnackbar(
        (snackbarState) => ({
          ...snackbarState,
          open: true,
          message: `Link set as ${response.data.isActive ? "Active" : "Inactive"} `,
          severity: "success"
        })
      );
    }).catch((error) => {
      setSnackbar(
        (snackbarState) => ({
          ...snackbarState,
          open: true,
          message: `Error happened while changing link status!`,
          severity: "error"
        })
      );
      console.log(error);
    });
  };
  const deleteFn = (id) => {
    menuService.deleteMenu(id).then(() => {
      setCurrentMenus(currentMenus.filter((menu) => menu.id !== id));
      setLocaleMenus(localeMenus.filter((menu) => menu.id !== id));
      setSnackbar(
        (snackbarState) => ({ ...snackbarState, open: true, message: "Link has been deleted!", severity: "success" })
      );
    }).catch((error) => {
      setSnackbar(
        (snackbarState) => ({ ...snackbarState, open: true, message: "Error Happened while deleting Link!", severity: "error" })
      );
    });
  };
  const reorder = (data) => {
    const formData = new FormData();
    formData.append("list", JSON.stringify(data));
    menuService.reorder(formData).then(() => {
      setSnackbar(
        (snackbarState) => ({ ...snackbarState, open: true, message: "Links has been ordered!", severity: "success" })
      );
    }).catch((error) => {
      console.log(error);
      setSnackbar(
        (snackbarState) => ({ ...snackbarState, open: true, message: "Error Happened while reordering links!", severity: "error" })
      );
    });
  };
  const onSearch = (val) => {
  };
  const next = () => {
  };
  return /* @__PURE__ */ jsxs(
    MenusProvider,
    {
      value: {
        menus: currentMenus,
        limit,
        offset: 0,
        search: "",
        count,
        next,
        loading,
        changeLimit,
        onSearch,
        activate,
        deleteFn,
        reorder
      },
      children: [
        /* @__PURE__ */ jsx(MenuList, {}),
        /* @__PURE__ */ jsx(
          CustomSnackbar,
          {
            open: snackbar.open,
            message: snackbar.message,
            onClose: handleClose,
            severity: snackbar.severity
          }
        )
      ]
    }
  );
};
const MenuContainer = ({ category, menus }) => {
  const commonService = Container.get(CommonService);
  const getTitle = () => {
    return commonService.toTitleCase(category);
  };
  return /* @__PURE__ */ jsxs(AdminLayout, { children: [
    /* @__PURE__ */ jsx(Head, { title: getTitle() }),
    /* @__PURE__ */ jsx(Box, { className: "py-[16px]", children: /* @__PURE__ */ jsx(
      Stack,
      {
        direction: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        spacing: 2,
        children: /* @__PURE__ */ jsx(Link, { href: `/admin/website/menu/create/${category}`, children: /* @__PURE__ */ jsx(CustomButton, { task: "add", text: getTitle() }) })
      }
    ) }),
    /* @__PURE__ */ jsx(LinksContainer, { menus, count: menus.length })
  ] });
};
export {
  MenuContainer as default
};
