import { jsxs, jsx } from "react/jsx-runtime";
import React, { useState } from "react";
import { M as Menu } from "./Menu-376e7940.js";
import { Container } from "typedi";
import { F as FormService, C as CommonService } from "../app.js";
import { M as MenuService } from "./MenuService-0806ba85.js";
import { usePage, Link } from "@inertiajs/react";
import { B as BlockCategories } from "./BlockCategories-fdc6a0f8.js";
import { S as SocialEnum } from "./SocialEnum-17c9978d.js";
import { u as useSnackbarHook, C as CustomSnackbar } from "./CustomSnackbar-a775827f.js";
import { z } from "zod";
import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Box, Stack, Typography } from "@mui/material";
import { V as ValidatedSelect } from "./ValidatedSelect-8a375c57.js";
import { A as AddFileButton } from "./AddFileButton-86919368.js";
import { B as BasicTitleTranslation } from "./BasicTitleTranslation-896b3103.js";
import { V as ValidatedSwitch } from "./ValidatedSwitch-c309fa1c.js";
import { C as CustomButton } from "./CustomButton-4b9588a9.js";
import { M as MainMenuTypesEnum } from "./MainMenuTypesEnum-f980ffeb.js";
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
import "./FileService-5953256c.js";
import "./ValidatedInput-d372d269.js";
import "@mui/material/InputAdornment/index.js";
import "@mui/icons-material/Add.js";
import "@mui/icons-material/Send.js";
import "@mui/icons-material/ChangeCircleOutlined.js";
import "@mui/icons-material/DeleteOutlineOutlined.js";
import "@mui/icons-material/SmartDisplayOutlined.js";
import "@mui/icons-material/AutoFixNormal.js";
import "@mui/icons-material/Reorder.js";
import "@mui/icons-material/ArrowBackIos.js";
const MainLinkAdd = ({ category, menus }) => {
  const formService = Container.get(FormService);
  const commonService = Container.get(CommonService);
  const menuService = Container.get(MenuService);
  const languages = usePage().props.settings.languages;
  const [selectedMenu, setSelectedMenu] = React.useState(new Menu({}));
  const [selectedMenus, setSelectedMenus] = React.useState(menus);
  const [linkType, setLinkType] = React.useState(selectedMenu.type);
  const [file, setFile] = React.useState(null);
  console.log("category: ", category);
  const linkTypes = Object.values(MainMenuTypesEnum).map((type) => {
    return {
      id: type,
      name: type
    };
  });
  const blockTypes = Object.values(BlockCategories).map((type) => {
    return {
      id: type,
      name: type
    };
  });
  Object.keys(SocialEnum).map((key) => {
    return {
      id: SocialEnum[key],
      name: key
    };
  });
  const { snackbar, setSnackbar, handleClose } = useSnackbarHook();
  useState(false);
  const menuSchema = z.object({
    isActive: z.boolean().default(true),
    menuType: z.object({
      type: z.string(),
      blockType: z.string()
    }).refine(({ type, blockType }) => {
      return type === MainMenuTypesEnum.BLOCK && blockType.length || type === MainMenuTypesEnum.FILE || type === MainMenuTypesEnum.LIST || type === MainMenuTypesEnum.HOME;
    }, {
      message: "Choose correct type!",
      path: ["blockType", "type"]
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
        type: selectedMenu.type || "",
        blockType: selectedMenu.blockType || ""
        // image: selectedMenu.image || 'facebook',
      },
      target: selectedMenu.target === "_blank",
      file: selectedMenu.file ? selectedMenu.file.name : null,
      // image: (selectedBlock.images[0].url as (File | string)),
      translations: defaultValues
    }
  });
  const linkTypeChanged = (event, child) => {
    setLinkType(event.target.value);
    setFile(null);
  };
  const fileChanged = (file2) => {
    setFile(file2);
    if (file2) {
      methods.setValue("file", file2.name);
    }
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
    formData.append("type", methods.getValues("menuType.type"));
    formData.append("translations", JSON.stringify(methods.getValues("translations")));
    if (linkType === MainMenuTypesEnum.BLOCK) {
      formData.append("blockType", methods.getValues("menuType.blockType"));
    }
    if (linkType === MainMenuTypesEnum.FILE) {
      formData.append("file", file);
    }
    if (linkType === MainMenuTypesEnum.FILE && !file)
      return;
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
          /* @__PURE__ */ jsx(Typography, { variant: "h5", children: "Update " + menuService.getMenuName(selectedMenu) }),
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
          linkType === MainMenuTypesEnum.BLOCK && /* @__PURE__ */ jsx(
            ValidatedSelect,
            {
              control: methods.control,
              controlName: "menuType.blockType",
              id: "blockType",
              label: "Block Type",
              placeholder: "Block Type",
              items: blockTypes,
              withNone: false
            }
          ),
          linkType === MainMenuTypesEnum.FILE && /* @__PURE__ */ jsxs(
            Stack,
            {
              direction: "row",
              justifyContent: "flex-start",
              alignItems: "center",
              spacing: 2,
              className: "m-[8px]",
              children: [
                /* @__PURE__ */ jsx(Box, { className: "m-[8px]", children: /* @__PURE__ */ jsx(
                  AddFileButton,
                  {
                    fileChanged,
                    text: "Customized",
                    type: "button"
                  }
                ) }),
                file && /* @__PURE__ */ jsx(Typography, { variant: "subtitle2", children: file == null ? void 0 : file.name })
              ]
            }
          ),
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
  MainLinkAdd as default
};
