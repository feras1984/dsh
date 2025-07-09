import { jsxs, jsx } from "react/jsx-runtime";
import React from "react";
import { Container } from "typedi";
import { F as FormService, C as CommonService } from "../app.js";
import { B as BlockService } from "./BlockService-2a2353d4.js";
import { usePage } from "@inertiajs/react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, FormProvider } from "react-hook-form";
import { B as BasicTranslation } from "./BasicTranslation-32e41136.js";
import { V as ValidatedCheckbox } from "./ValidatedCheckbox-55518ad2.js";
import { V as ValidatedImage } from "./ValidatedImage-80931c96.js";
import { u as useSnackbarHook, C as CustomSnackbar } from "./CustomSnackbar-a775827f.js";
import { Box, Typography, Stack } from "@mui/material";
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
import "./ValidatedInput-4e590f68.js";
import "@mui/material/InputAdornment/index.js";
import "@syncfusion/ej2-react-richtexteditor";
import "./FileService-5953256c.js";
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
import "@mui/material/Alert/index.js";
import "@mui/icons-material/Add.js";
import "@mui/icons-material/ChangeCircleOutlined.js";
import "@mui/icons-material/DeleteOutlineOutlined.js";
import "@mui/icons-material/SmartDisplayOutlined.js";
import "@mui/icons-material/AutoFixNormal.js";
import "@mui/icons-material/Reorder.js";
import "@mui/icons-material/ArrowBackIos.js";
const MainSectionAdd = ({ category }) => {
  const formService = Container.get(FormService);
  const blockService = Container.get(BlockService);
  const commonService = Container.get(CommonService);
  const languages = usePage().props.settings.languages;
  const { snackbar, setSnackbar, handleClose } = useSnackbarHook();
  const blockSchema = z.object({
    isActive: z.boolean().default(true),
    // Record key is "ar" or "en" of length 2:
    translations: z.record(z.string().length(2), z.object({
      name: z.string().min(3, { message: "Title should be at least 3 characters!" })
      // description: z.string().max(100, {message: " Description shouldn't exceed 100 characters!"})
    }))
  });
  const methods = useForm({
    mode: "onBlur",
    reValidateMode: "onBlur",
    resolver: zodResolver(blockSchema),
    defaultValues: {
      isActive: true,
      image: null,
      translations: formService.generateDefaultValues(languages)
    }
  });
  const onSubmit = () => {
    if (methods.getValues("image") === null)
      return;
    const formData = new FormData();
    formData.append("category", category);
    formData.append("parentId", "-1");
    formData.append("image", methods.getValues("image"));
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
  React.useEffect(() => {
    methods.getValues("image");
  }, [methods]);
  return /* @__PURE__ */ jsxs(Box, { children: [
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
            ValidatedImage,
            {
              controllerName: "image",
              methods
            }
          ),
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
  MainSectionAdd as default
};
