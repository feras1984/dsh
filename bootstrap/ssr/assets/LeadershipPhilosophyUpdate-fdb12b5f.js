import { jsxs, jsx } from "react/jsx-runtime";
import { useState } from "react";
import { Container } from "typedi";
import { F as FormService, C as CommonService } from "../app.js";
import { B as BlockService } from "./BlockService-2a2353d4.js";
import { usePage, Link, router } from "@inertiajs/react";
import { u as useSnackbarHook, C as CustomSnackbar } from "./CustomSnackbar-a775827f.js";
import { z } from "zod";
import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Box, Breadcrumbs, Typography, Stack } from "@mui/material";
import { V as ValidatedSwitch } from "./ValidatedSwitch-c309fa1c.js";
import { B as BasicTranslation } from "./BasicTranslation-0749eeb7.js";
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
import "./ValidatedInput-d372d269.js";
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
const LeadershipPhilosophyUpdate = ({ category, block }) => {
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
      // description: z.string().max(500, {message: " Description shouldn't exceed 500 characters!"})
    }))
  });
  const methods = useForm({
    mode: "onBlur",
    reValidateMode: "onBlur",
    resolver: zodResolver(blockSchema),
    defaultValues: {
      isActive: selectedBlock.isActive,
      // image: (selectedBlock.images[0].url as (File | string)),
      translations: blockService.getTranslationsDetails(selectedBlock.translations)
    }
  });
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
  return /* @__PURE__ */ jsxs(Box, { children: [
    /* @__PURE__ */ jsxs(Breadcrumbs, { children: [
      /* @__PURE__ */ jsxs(Link, { href: `/admin/website/get-block/` + block.category, children: [
        "Back to ",
        block.category
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
  LeadershipPhilosophyUpdate as default
};
