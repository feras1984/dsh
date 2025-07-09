import { jsxs, jsx } from "react/jsx-runtime";
import { Container } from "typedi";
import { F as FormService, C as CommonService } from "../app.js";
import { B as BlockService } from "./BlockService-2a2353d4.js";
import { usePage, Link } from "@inertiajs/react";
import { u as useSnackbarHook, C as CustomSnackbar } from "./CustomSnackbar-a775827f.js";
import { z } from "zod";
import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Box, Breadcrumbs, Typography, Stack } from "@mui/material";
import { V as ValidatedCheckbox } from "./ValidatedCheckbox-55518ad2.js";
import { B as BasicTranslation } from "./BasicTranslation-32e41136.js";
import { C as CustomButton } from "./CustomButton-4b9588a9.js";
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
import "react";
import "@mui/material/Alert/index.js";
import "./ValidatedInput-4e590f68.js";
import "@mui/material/InputAdornment/index.js";
import "@syncfusion/ej2-react-richtexteditor";
import "@mui/icons-material/Add.js";
import "@mui/icons-material/Send.js";
import "@mui/icons-material/ChangeCircleOutlined.js";
import "@mui/icons-material/DeleteOutlineOutlined.js";
import "@mui/icons-material/SmartDisplayOutlined.js";
import "@mui/icons-material/AutoFixNormal.js";
import "@mui/icons-material/Reorder.js";
import "@mui/icons-material/ArrowBackIos.js";
const CompanyThoughtsAdd = ({ category }) => {
  const formService = Container.get(FormService);
  const blockService = Container.get(BlockService);
  const commonService = Container.get(CommonService);
  const languages = usePage().props.settings.languages;
  const { snackbar, setSnackbar, handleClose } = useSnackbarHook();
  const blockSchema = z.object({
    isActive: z.boolean().default(true),
    // Record key is "ar" or "en" of length 2:
    translations: z.record(z.string().length(2), z.object({
      name: z.string().min(3, { message: "Title should be at least 3 characters!" }),
      // brief: z.string().min(10),
      // description: z.string().max(100, {message: " Description shouldn't exceed 100 characters!"})
      description: z.string().min(10)
    }))
  });
  const methods = useForm({
    mode: "onBlur",
    reValidateMode: "onBlur",
    resolver: zodResolver(blockSchema),
    defaultValues: {
      isActive: true,
      // image: (null as (File | null)),
      translations: formService.generateDefaultValues(languages)
    }
  });
  const onSubmit = () => {
    const formData = new FormData();
    formData.append("category", category);
    formData.append("parentId", "-1");
    formData.append("isActive", String(methods.getValues("isActive")));
    formData.append("translations", JSON.stringify(methods.getValues("translations")));
    formData.append("isImage", "true");
    formData.append("isCover", "true");
    blockService.storeBlock(formData).then((response) => {
      methods.reset();
      setSnackbar(
        (snackbarState) => ({ ...snackbarState, open: true, message: "A new block has been added", severity: "success" })
      );
    }).catch((error) => {
      setSnackbar(
        (snackbarState) => ({ ...snackbarState, open: true, message: "Error Happened while storing block", severity: "error" })
      );
    });
  };
  return /* @__PURE__ */ jsxs(Box, { children: [
    /* @__PURE__ */ jsxs(Breadcrumbs, { children: [
      /* @__PURE__ */ jsxs(Link, { href: `/admin/website/get-block/` + category, children: [
        "Back to ",
        commonService.toTitleCase(category)
      ] }),
      /* @__PURE__ */ jsxs(Typography, { children: [
        "Add New ",
        commonService.toTitleCase(category)
      ] })
    ] }),
    /* @__PURE__ */ jsx(Box, { className: "p-[16px]", children: /* @__PURE__ */ jsxs(Typography, { variant: "h5", children: [
      "Add New ",
      commonService.toTitleCase(category)
    ] }) }),
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
            ValidatedCheckbox,
            {
              name: "isActive",
              id: "isActive",
              color: "secondary",
              control: methods.control,
              label: "Is Active"
            }
          ),
          /* @__PURE__ */ jsx(
            BasicTranslation,
            {
              methods,
              category: commonService.toTitleCase(category)
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
  CompanyThoughtsAdd as default
};
