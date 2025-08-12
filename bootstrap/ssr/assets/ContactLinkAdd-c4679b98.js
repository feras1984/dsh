import { jsxs, jsx } from "react/jsx-runtime";
import React from "react";
import { M as Menu } from "./Menu-376e7940.js";
import { Container } from "typedi";
import { F as FormService, C as CommonService } from "../app.js";
import { M as MenuService } from "./MenuService-1c3a39b3.js";
import { usePage, Link } from "@inertiajs/react";
import { u as useSnackbarHook, C as CustomSnackbar } from "./CustomSnackbar-a775827f.js";
import { z } from "zod";
import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Box, Stack, Typography } from "@mui/material";
import { V as ValidatedSelect } from "./ValidatedSelect-8a375c57.js";
import { V as ValidatedInput } from "./ValidatedInput-4e590f68.js";
import { V as ValidatedSelectWithIcon } from "./ValidatedSelectWithIcon-0fc8a7a2.js";
import { B as BasicTitleTranslation } from "./BasicTitleTranslation-f05fe9cc.js";
import { V as ValidatedSwitch } from "./ValidatedSwitch-c309fa1c.js";
import { C as CustomButton } from "./CustomButton-4b9588a9.js";
import { C as ContactMenuEnum, a as ContactEnum } from "./ContactEnum-89ec9065.js";
import "./MainMenuTypesEnum-f980ffeb.js";
import "axios";
import "react-dom/client";
import "react-redux";
import "@reduxjs/toolkit";
import "reflect-metadata";
import "localstorage-slim";
import "crypto-js";
import "crypto-js/enc-utf8.js";
import "@mui/x-date-pickers";
import "@mui/x-date-pickers/AdapterDateFns/index.js";
import "i18next";
import "react-i18next";
import "@syncfusion/ej2-base";
import "@mui/material/Alert/index.js";
import "@mui/material/InputAdornment/index.js";
import "./Icon-cd2b22cf.js";
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
import "@mui/icons-material/Send.js";
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
import "@mui/icons-material/AccountTree.js";
import "@mui/material/ListItemText/index.js";
import "@mui/icons-material/Add.js";
import "@mui/icons-material/ChangeCircleOutlined.js";
import "@mui/icons-material/DeleteOutlineOutlined.js";
import "@mui/icons-material/SmartDisplayOutlined.js";
import "@mui/icons-material/AutoFixNormal.js";
import "@mui/icons-material/Reorder.js";
import "@mui/icons-material/ArrowBackIos.js";
const ContactLink = ({ category, menus }) => {
  const formService = Container.get(FormService);
  const commonService = Container.get(CommonService);
  const menuService = Container.get(MenuService);
  const languages = usePage().props.settings.languages;
  const [selectedMenu, setSelectedMenu] = React.useState(new Menu({}));
  const [selectedMenus, setSelectedMenus] = React.useState(menus);
  const [linkType, setLinkType] = React.useState(ContactMenuEnum.LIST);
  React.useState(null);
  const linkTypes = Object.values(ContactMenuEnum).map((type) => {
    return {
      id: type,
      name: type
    };
  });
  const iconList = Object.keys(ContactEnum).map((key) => {
    return {
      id: ContactEnum[key],
      name: key
    };
  });
  const { snackbar, setSnackbar, handleClose } = useSnackbarHook();
  const menuSchema = z.object({
    isActive: z.boolean().default(true),
    menuType: z.object({
      type: z.string(),
      url: z.string()
    }).refine(({ type, url }) => {
      return type !== ContactMenuEnum.LIST && url.length > 0 || type === ContactMenuEnum.LIST;
    }, {
      message: "Choose correct type!",
      path: ["url", "type"]
    }),
    // Record key is "ar" or "en" of length 2:
    translations: z.record(z.string().length(2), z.object({
      name: z.string().min(3, { message: "Name should be at least 3 characters!" })
    }))
  });
  const defaultValues = selectedMenu.id < 0 ? formService.generateDefaultTitles(languages) : menuService.getTranslationsDetails(selectedMenu.translations);
  const methods = useForm({
    mode: "onBlur",
    reValidateMode: "onBlur",
    resolver: zodResolver(menuSchema),
    defaultValues: {
      parent: selectedMenu.parentId,
      isActive: selectedMenu.isActive,
      // name: selectedMenu.name,
      menuType: {
        url: selectedMenu.url || "",
        type: ContactMenuEnum.LIST,
        image: selectedMenu.image || "phone"
      },
      target: selectedMenu.target === "_blank",
      translations: defaultValues
    }
  });
  const linkTypeChanged = (event, child) => {
    setLinkType(event.target.value);
  };
  const onSubmit = () => {
    const formData = new FormData();
    const target = methods.getValues("target") ? "_blank" : "_self";
    formData.append("parentId", String(methods.getValues("parent")));
    formData.append("category", category);
    formData.append("name", category + "-menu");
    formData.append("order", "1");
    formData.append("target", target);
    formData.append("isActive", String(methods.getValues("isActive")));
    formData.append("type", linkType);
    formData.append("translations", JSON.stringify(methods.getValues("translations")));
    formData.append("url", methods.getValues("menuType.url"));
    formData.append("image", methods.getValues("menuType.image"));
    menuService.storeMenu(formData).then((response) => {
      methods.reset();
      setSelectedMenus((selectedMenus2) => [...selectedMenus2, response.data]);
      setSnackbar(
        (snackbarState) => ({ ...snackbarState, open: true, message: "A new Link has been added", severity: "success" })
      );
    }).catch((error) => {
      setSnackbar(
        (snackbarState) => ({ ...snackbarState, open: true, message: "Error Happened while storing link", severity: "error" })
      );
    });
  };
  return /* @__PURE__ */ jsxs(Box, { children: [
    /* @__PURE__ */ jsxs(
      Stack,
      {
        direction: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        spacing: 2,
        className: "m-[8px]",
        children: [
          /* @__PURE__ */ jsx(Typography, { variant: "h5", children: "Add New " + commonService.toTitleCase(category) }),
          /* @__PURE__ */ jsx(Link, { href: `/admin/website/get-menu/${category}`, children: /* @__PURE__ */ jsx(Typography, { variant: "h5", children: "Back" }) })
        ]
      }
    ),
    /* @__PURE__ */ jsx(FormProvider, { ...methods, children: /* @__PURE__ */ jsxs(
      Box,
      {
        component: "form",
        sx: {
          "& .MuiTextField-root": { m: 1, width: "100%" }
        },
        noValidate: true,
        autoComplete: "off",
        onSubmit: methods.handleSubmit(onSubmit),
        children: [
          /* @__PURE__ */ jsx(
            ValidatedSelect,
            {
              control: methods.control,
              controlName: "parent",
              id: "parent",
              label: "Parent Link",
              placeholder: "Parent Link",
              items: menuService.getAllTranslations(selectedMenus, true)
            }
          ),
          /* @__PURE__ */ jsx(
            ValidatedSelect,
            {
              control: methods.control,
              controlName: "menuType.type",
              id: "type",
              label: "Link Type",
              placeholder: "Link Type",
              items: linkTypes,
              withNone: false,
              selectChanged: linkTypeChanged
            }
          ),
          linkType !== ContactMenuEnum.LIST && /* @__PURE__ */ jsxs(Box, { children: [
            /* @__PURE__ */ jsx(
              ValidatedInput,
              {
                name: "url",
                id: "url",
                controlName: "menuType.url",
                methods,
                label: "URL",
                placeholder: "email@example.com"
              }
            ),
            /* @__PURE__ */ jsx(
              ValidatedSelectWithIcon,
              {
                control: methods.control,
                controlName: "menuType.image",
                id: "image",
                label: "Icon",
                placeholder: "Facebook",
                items: iconList,
                withNone: false
              }
            )
          ] }),
          /* @__PURE__ */ jsx(
            BasicTitleTranslation,
            {
              methods,
              category: commonService.toTitleCase(category)
            }
          ),
          /* @__PURE__ */ jsxs(
            Stack,
            {
              direction: "row",
              justifyContent: "flex-start",
              alignItems: "center",
              spacing: 2,
              className: "m-[8px]",
              children: [
                /* @__PURE__ */ jsx(
                  ValidatedSwitch,
                  {
                    controlName: "isActive",
                    name: "isActive",
                    id: "isActive",
                    color: "secondary",
                    methods,
                    label: "Is Active?"
                  }
                ),
                /* @__PURE__ */ jsx(
                  ValidatedSwitch,
                  {
                    controlName: "target",
                    name: "target",
                    id: "target",
                    color: "secondary",
                    methods,
                    label: "Open in a new tab?"
                  }
                )
              ]
            }
          ),
          /* @__PURE__ */ jsx(
            Stack,
            {
              direction: "row",
              justifyContent: "flex-start",
              alignItems: "center",
              spacing: 2,
              className: "m-[8px]",
              children: /* @__PURE__ */ jsx(CustomButton, { task: "add", text: commonService.toTitleCase(category) })
            }
          )
        ]
      }
    ) }),
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
  ContactLink as default
};
