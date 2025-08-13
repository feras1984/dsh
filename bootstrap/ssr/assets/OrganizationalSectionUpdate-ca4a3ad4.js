import { jsxs, jsx } from "react/jsx-runtime";
import React, { useState } from "react";
import { Container } from "typedi";
import { F as FormService, C as CommonService } from "../app.js";
import { B as BlockService } from "./BlockService-2a2353d4.js";
import { usePage, Link, router } from "@inertiajs/react";
import { u as useSnackbarHook, C as CustomSnackbar } from "./CustomSnackbar-a775827f.js";
import { z } from "zod";
import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Box, Breadcrumbs, Typography, Stack } from "@mui/material";
import { V as ValidatedImage } from "./ValidatedImage-2091d3e0.js";
import { V as ValidatedSwitch } from "./ValidatedSwitch-c309fa1c.js";
import { B as BasicTranslation } from "./BasicTranslation-32e41136.js";
import { C as CustomButton } from "./CustomButton-4b9588a9.js";
import { D as DeleteModal } from "./DeleteModal-9d9ad51f.js";
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
import "./ValidatedInput-4e590f68.js";
import "@mui/material/InputAdornment/index.js";
import "@syncfusion/ej2-react-richtexteditor";
import "@mui/icons-material/Add.js";
import "@mui/icons-material/ChangeCircleOutlined.js";
import "@mui/icons-material/DeleteOutlineOutlined.js";
import "@mui/icons-material/SmartDisplayOutlined.js";
import "@mui/icons-material/AutoFixNormal.js";
import "@mui/icons-material/Reorder.js";
import "@mui/icons-material/ArrowBackIos.js";
const OrganizationalSectionUpdate = ({ category, block }) => {
  Container.get(FormService);
  const blockService = Container.get(BlockService);
  const commonService = Container.get(CommonService);
  const [selectedBlock, setSelectedBlock] = useState({ ...block });
  usePage().props.settings.languages;
  const { snackbar, setSnackbar, handleClose } = useSnackbarHook();
  const [openModal, setOpenModal] = useState(false);
  const handleCloseModal = () => {
    setOpenModal(false);
  };
  const handleOpenModal = () => {
    setOpenModal(true);
  };
  const blockSchema = z.object({
    isActive: z.boolean().default(true),
    // Record key is "ar" or "en" of length 2:
    translations: z.record(z.string().length(2), z.object({
      name: z.string().min(3, { message: "Title should be at least 3 characters!" })
      // brief: z.string().min(10),
      // description: z.string().max(100, {message: " Description shouldn't exceed 100 characters!"})
      // description: z.string().min(10),
    }))
  });
  const methods = useForm({
    mode: "onBlur",
    reValidateMode: "onBlur",
    resolver: zodResolver(blockSchema),
    defaultValues: {
      isActive: selectedBlock.isActive,
      image: selectedBlock.images[0].url,
      translations: blockService.getTranslationsDetails(selectedBlock.translations)
    }
  });
  const onUpload = () => {
    var _a;
    const imageId = ((_a = selectedBlock.images.find((img) => img.isCover)) == null ? void 0 : _a.id) || -1;
    const formData = new FormData();
    console.log("HERE!", methods.getValues("image"));
    formData.append("image", methods.getValues("image"));
    formData.append("imageId", String(imageId));
    blockService.uploadImage(formData, block.id).then((response) => {
      setSelectedBlock(response.data);
      setSnackbar(
        (snackbarState) => ({ ...snackbarState, open: true, message: "Image has been updated!", severity: "success" })
      );
    }).catch((error) => {
      setSnackbar(
        (snackbarState) => ({ ...snackbarState, open: true, message: "Error Happened while uploading image!", severity: "error" })
      );
    });
  };
  const deleteBlock = () => {
    setOpenModal(false);
    blockService.deleteBlock(block.id).then((response) => {
      setSnackbar(
        (snackbarState) => ({ ...snackbarState, open: true, message: "Block has been deleted!", severity: "success" })
      );
      router.get("/admin/website/get-block/" + block.category);
    }).catch((error) => {
      setSnackbar(
        (snackbarState) => ({ ...snackbarState, open: true, message: "Error Happened while deleting block!", severity: "error" })
      );
    });
  };
  const receiveSwitchState = (value) => {
    const formData = new FormData();
    formData.append("isActive", String(value));
    blockService.blockActivation(formData, block.id).then((response) => {
      setSelectedBlock(response.data);
      setSnackbar(
        (snackbarState) => ({ ...snackbarState, open: true, message: "Block status has been successfully updated!", severity: "success" })
      );
    }).catch((error) => {
      setSnackbar(
        (snackbarState) => ({ ...snackbarState, open: true, message: "Error Happened while updating block status!", severity: "error" })
      );
    });
  };
  const onSubmit = () => {
    const formData = new FormData();
    formData.append("isActive", String(methods.getValues("isActive")));
    formData.append("translations", JSON.stringify(methods.getValues("translations")));
    formData.append("blockId", String(block.id));
    blockService.updateBlock(formData, block.id).then((response) => {
      setSelectedBlock(response.data);
      setSnackbar(
        (snackbarState) => ({ ...snackbarState, open: true, message: "The block has been updated", severity: "success" })
      );
    }).catch((error) => {
      setSnackbar(
        (snackbarState) => ({ ...snackbarState, open: true, message: "Error Happened while updating block", severity: "error" })
      );
    });
  };
  React.useEffect(() => {
    methods.getValues("image");
  }, [methods]);
  return /* @__PURE__ */ jsxs(Box, { children: [
    /* @__PURE__ */ jsxs(Breadcrumbs, { children: [
      /* @__PURE__ */ jsxs(Link, { href: `/admin/website/get-block/` + block.category, children: [
        "Back to ",
        commonService.toTitleCase(block.category)
      ] }),
      /* @__PURE__ */ jsxs(Typography, { children: [
        "Update ",
        blockService.getBlockName(selectedBlock)
      ] })
    ] }),
    /* @__PURE__ */ jsx(Box, { className: "p-[16px]", children: /* @__PURE__ */ jsxs(Typography, { variant: "h5", children: [
      "Update ",
      blockService.getBlockName(selectedBlock)
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
              methods,
              image: blockService.getBlockImage(block),
              onUpload
            }
          ),
          /* @__PURE__ */ jsx(
            ValidatedSwitch,
            {
              controlName: "isActive",
              name: "isActive",
              id: "isActive",
              color: "secondary",
              methods,
              label: "Is Active",
              sendSwitchState: (value) => receiveSwitchState(value)
            }
          ),
          /* @__PURE__ */ jsx(
            BasicTranslation,
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
                /* @__PURE__ */ jsx(CustomButton, { task: "update", text: commonService.toTitleCase(category) }),
                /* @__PURE__ */ jsx(CustomButton, { task: "delete", text: commonService.toTitleCase(category), onClick: handleOpenModal })
              ]
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
    ),
    /* @__PURE__ */ jsx(
      DeleteModal,
      {
        open: openModal,
        onClose: handleCloseModal,
        message: `Are you sure that you want to delete ${blockService.getBlockName(selectedBlock)}`,
        confirmDelete: deleteBlock
      }
    )
  ] });
};
export {
  OrganizationalSectionUpdate as default
};
