import { jsxs, jsx } from "react/jsx-runtime";
import React, { useState, useEffect, useRef } from "react";
import { Container } from "typedi";
import { F as FormService, C as CommonService } from "../app.js";
import { B as BlockService } from "./BlockService-e48abac9.js";
import { usePage, Link, router } from "@inertiajs/react";
import { u as useSnackbarHook, C as CustomSnackbar } from "./CustomSnackbar-a775827f.js";
import { z } from "zod";
import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Box, CardMedia, Avatar, IconButton, Menu, MenuItem, ListItemIcon, ListItemText, FormHelperText, Breadcrumbs, Typography, Stack, Divider } from "@mui/material";
import { V as ValidatedImage, B as BasicTranslation } from "./BasicTranslation-dfe7cd4c.js";
import { V as ValidatedSwitch } from "./ValidatedSwitch-c309fa1c.js";
import { C as CustomButton } from "./CustomButton-4b9588a9.js";
import { D as DeleteModal } from "./DeleteModal-9d9ad51f.js";
import { F as FileService } from "./FileService-769645e4.js";
import "reflect-metadata";
import { I as Icon } from "./Icon-2105584c.js";
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
const useImageHook = (imageFile) => {
  const fileService = Container.get(FileService);
  const [assertImage, setAssertImage] = useState(false);
  useEffect(() => {
    setAssertImage(fileService.assertImage(imageFile));
  }, [imageFile]);
  console.log(assertImage);
  return assertImage;
};
const ImageInAlbum = ({
  className = "relative",
  classes = "",
  // callback = (image: File | null) => {},
  image = null,
  imageChanged,
  imageDelete
}) => {
  const [imageProp, setImage] = useState(null);
  const [error, setError] = useState("");
  const fileService = Container.get(FileService);
  const inputRef = useRef(null);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleUpdate = () => {
    var _a;
    (_a = inputRef.current) == null ? void 0 : _a.click();
    handleClose();
  };
  const assertImage = useImageHook(imageProp);
  const handleChange = (event) => {
    var _a, _b, _c, _d, _e, _f;
    if (event && event.target) {
      if (!fileService.assertSize((_b = (_a = event.target) == null ? void 0 : _a.files) == null ? void 0 : _b[0])) {
        setError("Image Size must be less than 200KB!");
      } else if (!fileService.assertImage((_d = (_c = event.target) == null ? void 0 : _c.files) == null ? void 0 : _d[0])) {
        setError("Please upload an image!");
      } else {
        setError("");
        imageChanged((_f = (_e = event.target) == null ? void 0 : _e.files) == null ? void 0 : _f[0]);
      }
    }
  };
  const handleDelete = () => {
    imageDelete();
    handleClose();
  };
  return /* @__PURE__ */ jsxs(Box, { children: [
    /* @__PURE__ */ jsx(
      CardMedia,
      {
        classes,
        component: "img",
        src: assertImage && imageProp ? URL.createObjectURL(imageProp) : image || fileService.DefaultImage,
        alt: "photo",
        className
      }
    ),
    /* @__PURE__ */ jsxs(Box, { className: "absolute top-[16px] right-[16px] rounded-full", children: [
      /* @__PURE__ */ jsx(Avatar, { sx: { bgcolor: "rgba(0,0,0,0.52)" }, children: /* @__PURE__ */ jsx(
        IconButton,
        {
          id: "basic-button",
          "aria-controls": open ? "basic-menu" : void 0,
          "aria-haspopup": "true",
          "aria-expanded": open ? "true" : void 0,
          onClick: handleClick,
          sx: { color: "white" },
          children: /* @__PURE__ */ jsx(Icon, { name: "vertical-dots" })
        }
      ) }),
      /* @__PURE__ */ jsxs(
        Menu,
        {
          id: "basic-menu",
          anchorEl,
          open,
          onClose: handleClose,
          MenuListProps: {
            "aria-labelledby": "basic-button"
          },
          anchorOrigin: {
            vertical: "top",
            horizontal: "left"
          },
          transformOrigin: {
            vertical: "top",
            horizontal: "left"
          },
          children: [
            /* @__PURE__ */ jsxs(
              MenuItem,
              {
                onClick: handleUpdate,
                children: [
                  /* @__PURE__ */ jsx(ListItemIcon, { children: /* @__PURE__ */ jsx(Icon, { name: "edit" }) }),
                  /* @__PURE__ */ jsx(ListItemText, { children: "Update" })
                ]
              }
            ),
            /* @__PURE__ */ jsxs(MenuItem, { onClick: handleDelete, children: [
              /* @__PURE__ */ jsx(ListItemIcon, { children: /* @__PURE__ */ jsx(Icon, { name: "delete" }) }),
              /* @__PURE__ */ jsx(ListItemText, { children: "Delete" })
            ] })
          ]
        }
      )
    ] }),
    /* @__PURE__ */ jsx(
      "input",
      {
        type: "file",
        id: "hidden-input",
        className: "hidden",
        ref: inputRef,
        onChange: handleChange
      }
    ),
    error && /* @__PURE__ */ jsx(
      FormHelperText,
      {
        sx: {
          color: "error.main",
          marginLeft: "8px",
          marginRight: "8px",
          textWrap: "nowrap"
        },
        children: error
      }
    )
  ] });
};
const AddImageButton = ({ imageChanged, text = "Product" }) => {
  const fileService = Container.get(FileService);
  const inputRef = useRef(null);
  const handleClick = () => {
    var _a;
    (_a = inputRef.current) == null ? void 0 : _a.click();
  };
  const handleChange = (event) => {
    var _a, _b, _c, _d;
    if (event && event.target && fileService.assertImage((_b = (_a = event.target) == null ? void 0 : _a.files) == null ? void 0 : _b[0])) {
      imageChanged((_d = (_c = event.target) == null ? void 0 : _c.files) == null ? void 0 : _d[0]);
    }
  };
  return /* @__PURE__ */ jsxs(Box, { children: [
    /* @__PURE__ */ jsx(CustomButton, { task: "add", text: `${text} image`, onClick: handleClick }),
    /* @__PURE__ */ jsx(
      "input",
      {
        type: "file",
        id: "hidden-input",
        className: "hidden",
        ref: inputRef,
        onChange: handleChange
      }
    )
  ] });
};
const Album = ({
  images,
  callbackImageUrl,
  addImage,
  updateImage,
  deleteImage,
  text = "product"
}) => {
  const [openModal, setOpenModal] = useState(false);
  const [imageId, setImageId] = useState(0);
  const handleClose = () => {
    setOpenModal(false);
  };
  const handleOpen = (id) => {
    setImageId(id);
    setOpenModal(true);
  };
  const handleAddedImage = (file) => {
    addImage(file);
  };
  const handleImageChange = (file, id) => {
    updateImage(file, id);
  };
  const handleDeletedImage = () => {
    deleteImage(imageId);
    setOpenModal(false);
  };
  return /* @__PURE__ */ jsxs(Box, { children: [
    /* @__PURE__ */ jsx(Box, { className: "px-[16px]", children: /* @__PURE__ */ jsx(AddImageButton, { text, imageChanged: (file) => handleAddedImage(file) }) }),
    /* @__PURE__ */ jsx(Box, { className: "flex flex-wrap items-start content-center justify-start p-[16px] gap-[16px]", children: images.map((image, index) => /* @__PURE__ */ jsx(Box, { className: "w-[250px] relative", children: /* @__PURE__ */ jsx(
      ImageInAlbum,
      {
        classes: {
          img: "bg-center bg-cover object-cover  h-[195px] rounded-lg border-2 border-state-500"
        },
        imageChanged: (file) => handleImageChange(file, image.id),
        imageDelete: () => handleOpen(image.id),
        image: callbackImageUrl(image.url)
      }
    ) }, index)) }),
    /* @__PURE__ */ jsx(
      DeleteModal,
      {
        open: openModal,
        onClose: handleClose,
        message: "Are you sure you want to delete this image?",
        confirmDelete: handleDeletedImage
      }
    )
  ] });
};
const GalleryUpdate = ({ category, block }) => {
  Container.get(FormService);
  const blockService = Container.get(BlockService);
  const commonService = Container.get(CommonService);
  const [selectedBlock, setSelectedBlock] = useState({ ...block });
  const [selectedImages, setSelectedImages] = useState(block.images.filter((image) => !image.isCover));
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
      // description: z.string().max(100, {message: " Description shouldn't exceed 100 characters!"})
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
  const addAlbumImage = (file) => {
    const formData = new FormData();
    formData.append("image", file);
    formData.append("isCover", "false");
    blockService.addImage(formData, selectedBlock.id).then((response) => {
      setSelectedBlock(response.data);
      setSelectedImages(response.data.images.filter((image) => !image.isCover));
      setSnackbar(
        (snackbarState) => ({ ...snackbarState, open: true, message: "Image has been added!", severity: "success" })
      );
    }).catch((error) => {
      setSnackbar(
        (snackbarState) => ({ ...snackbarState, open: true, message: "Error Happened while adding image!", severity: "error" })
      );
    });
  };
  const updateAlbumImage = (file, id) => {
    const formData = new FormData();
    formData.append("image", file);
    formData.append("imageId", String(id));
    blockService.uploadImage(formData, block.id).then((response) => {
      setSelectedBlock(response.data);
      setSelectedImages(response.data.images.filter((image) => !image.isCover));
      setSnackbar(
        (snackbarState) => ({ ...snackbarState, open: true, message: "Image has been updated!", severity: "success" })
      );
    }).catch((error) => {
      setSnackbar(
        (snackbarState) => ({ ...snackbarState, open: true, message: "Error Happened while uploading image!", severity: "error" })
      );
    });
  };
  const deleteAlbumImage = (id) => {
    const formData = new FormData();
    formData.append("imageId", String(id));
    blockService.deleteImage(formData, block.id).then((response) => {
      setSelectedBlock(response.data);
      setSelectedImages(response.data.images.filter((image) => !image.isCover));
      setSnackbar(
        (snackbarState) => ({ ...snackbarState, open: true, message: "Image has been deleted!", severity: "success" })
      );
    }).catch((error) => {
      setSnackbar(
        (snackbarState) => ({ ...snackbarState, open: true, message: "Error Happened while deleting image!", severity: "error" })
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
    /* @__PURE__ */ jsx(Divider, {}),
    /* @__PURE__ */ jsx(Box, { className: "p-[16px]", children: /* @__PURE__ */ jsxs(Typography, { variant: "h5", children: [
      "Album for ",
      blockService.getBlockName(selectedBlock)
    ] }) }),
    /* @__PURE__ */ jsx(
      Album,
      {
        images: selectedImages,
        callbackImageUrl: blockService.getImageUrl,
        addImage: (file) => addAlbumImage(file),
        updateImage: (file, id) => updateAlbumImage(file, id),
        deleteImage: (id) => deleteAlbumImage(id),
        text: "Gallery"
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
  GalleryUpdate as default
};
