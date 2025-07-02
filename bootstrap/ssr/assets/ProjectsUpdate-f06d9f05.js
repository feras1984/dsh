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
import { V as ValidatedImage } from "./ValidatedImage-80931c96.js";
import { V as ValidatedSwitch } from "./ValidatedSwitch-c309fa1c.js";
import { B as BasicTranslation } from "./BasicTranslation-0749eeb7.js";
import { C as CustomButton } from "./CustomButton-4b9588a9.js";
import { D as DeleteModal } from "./DeleteModal-9d9ad51f.js";
import { B as BlockCategories } from "./BlockCategories-fdc6a0f8.js";
import { V as ValidatedSelect } from "./ValidatedSelect-8a375c57.js";
import { V as ValidatedInput } from "./ValidatedInput-d372d269.js";
import { V as ValidatedDatePicker } from "./ValidatedDatePicker-08c6d786.js";
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
import "@syncfusion/ej2-react-richtexteditor";
import "@mui/icons-material/Add.js";
import "@mui/icons-material/ChangeCircleOutlined.js";
import "@mui/icons-material/DeleteOutlineOutlined.js";
import "@mui/icons-material/SmartDisplayOutlined.js";
import "@mui/icons-material/AutoFixNormal.js";
import "@mui/icons-material/Reorder.js";
import "@mui/icons-material/ArrowBackIos.js";
import "@mui/material/InputAdornment/index.js";
import "@mui/x-date-pickers/DatePicker/index.js";
const ProjectsUpdate = ({ category, block }) => {
  const formService = Container.get(FormService);
  const blockService = Container.get(BlockService);
  const commonService = Container.get(CommonService);
  const [selectedBlock, setSelectedBlock] = useState({ ...block });
  usePage().props.settings.languages;
  const [clients, setClients] = React.useState([]);
  const [showProgression, setShowProgression] = React.useState(false);
  React.useEffect(() => {
    blockService.getActiveBlocks(commonService.toSnakeCase(BlockCategories.CLIENTS)).then((response) => {
      setClients(response.data);
    });
  }, []);
  const { snackbar, setSnackbar, handleClose } = useSnackbarHook();
  const [openModal, setOpenModal] = useState(false);
  const handleCloseModal = () => {
    setOpenModal(false);
  };
  const handleOpenModal = () => {
    setOpenModal(true);
  };
  const blockSchema = z.object({
    location: z.string().min(5, { message: "Location field is required" }),
    completeProject: z.object({
      isCompleted: z.boolean().default(true),
      dateOfCompletion: z.date().min(/* @__PURE__ */ new Date("2002-07-15"), { message: "Date is Required" })
    }).refine(({ isCompleted, dateOfCompletion }) => {
      return isCompleted && dateOfCompletion.getTime() < (/* @__PURE__ */ new Date()).getTime() || !isCompleted && dateOfCompletion.getTime() > (/* @__PURE__ */ new Date()).getTime();
    }, {
      message: "Completion date of the project under construction must be in the future!, Completed project must be in the past!",
      path: ["dateOfCompletion"]
    }),
    value: z.string().default("0").refine(formService.isNumeric, { message: "Estimated value must be a number" }).refine(formService.isPositive, { message: "Estimated value must be a positive number" }),
    progression: z.string().default("100").refine(formService.isNumeric, { message: "Estimated value must be a number" }).refine(formService.isPositive, { message: "Estimated value must be a positive number" }).refine((percent) => parseFloat(percent) <= 100, {
      message: "maximum number is 100"
    }),
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
      parent: selectedBlock.parentId,
      location: selectedBlock.location,
      completeProject: {
        dateOfCompletion: new Date(selectedBlock.completionDate),
        isCompleted: selectedBlock.isCompleted
      },
      value: selectedBlock.value,
      progression: String(selectedBlock.progression),
      isActive: selectedBlock.isActive,
      image: selectedBlock.images[0].url,
      translations: blockService.getTranslationsDetails(selectedBlock.translations)
    }
  });
  const onUpload = () => {
    var _a;
    const imageId = ((_a = selectedBlock.images.find((img) => img.isCover)) == null ? void 0 : _a.id) || -1;
    const formData = new FormData();
    formData.append("image", methods.getValues("image"));
    formData.append("imageId", String(imageId));
    blockService.uploadImage(formData, block.id).then((response) => {
      setSelectedBlock((project2) => ({ ...project2, images: response.data.images }));
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
    methods.setValue("progression", value ? "100" : methods.getValues("progression"));
    setShowProgression(!value);
  };
  const onSubmit = () => {
    const formData = new FormData();
    formData.append("category", selectedBlock.category);
    formData.append("isActive", String(methods.getValues("isActive")));
    formData.append("translations", JSON.stringify(methods.getValues("translations")));
    formData.append("blockId", String(block.id));
    formData.append("parentId", String(methods.getValues("parent")));
    formData.append("location", methods.getValues("location"));
    formData.append("dateOfCompletion", new Date(methods.getValues("completeProject.dateOfCompletion")).toDateString());
    formData.append("value", String(methods.getValues("value")));
    formData.append("isCompleted", String(methods.getValues("completeProject.isCompleted")));
    formData.append("progression", String(methods.getValues("progression")));
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
              label: "Is Active"
            }
          ),
          /* @__PURE__ */ jsx(
            ValidatedSwitch,
            {
              controlName: "completeProject.isCompleted",
              name: "isCompleted",
              id: "isCompleted",
              color: "secondary",
              methods,
              label: "Is Completed",
              sendSwitchState: (value) => receiveSwitchState(value)
            }
          ),
          clients.length > 0 && /* @__PURE__ */ jsx(
            ValidatedSelect,
            {
              control: methods.control,
              controlName: "parent",
              id: "parent",
              label: "Client",
              placeholder: "Client",
              items: clients.map(
                (client) => ({
                  id: client.id,
                  name: blockService.getBlockName(client)
                })
              )
            }
          ),
          showProgression && /* @__PURE__ */ jsx(
            ValidatedInput,
            {
              controlName: "progression",
              name: "progression",
              id: "progression",
              label: "Construction Progress",
              placeholder: "Construction Progress",
              control: methods.control,
              adornment: "%"
            }
          ),
          /* @__PURE__ */ jsx(
            ValidatedInput,
            {
              controlName: "location",
              name: "location",
              id: "location",
              label: "Location",
              placeholder: "Location",
              control: methods.control
            }
          ),
          /* @__PURE__ */ jsx(
            ValidatedInput,
            {
              controlName: "value",
              name: "value",
              id: "value",
              label: "Estimated value",
              placeholder: "Estimated value",
              control: methods.control,
              adornment: "AED"
            }
          ),
          /* @__PURE__ */ jsx(
            ValidatedDatePicker,
            {
              controlName: "completeProject.dateOfCompletion",
              methods,
              label: "Date Of Completion"
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
  ProjectsUpdate as default
};
