import { jsx, jsxs } from "react/jsx-runtime";
import React from "react";
import { Box, Typography, Stack } from "@mui/material";
import { A as AlbumService, u as useGalleryContext, s as styles, G as GalleryContextProvider, S as SliderContainer } from "./SliderContainer-d664d1e8.js";
import { Container } from "typedi";
import "reflect-metadata";
import { b as File } from "../app.js";
import { styled } from "@mui/material/styles/index.js";
import { usePage, Link } from "@inertiajs/react";
import "gsap";
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
import "swiper/react";
import "swiper/modules";
/* empty css                     */import "swiper";
import "@gsap/react";
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
const CustomImageList = () => {
  Container.get(AlbumService);
  const { openViewer, album, uri, title } = useGalleryContext();
  album.find((img) => img.isCover) || new File({});
  const ImageStyle = styled(Box)({
    cursor: "pointer",
    position: "relative",
    width: "325px",
    height: "421px",
    borderRadius: "53px",
    minHeight: "190px",
    "&:before": {
      position: "absolute",
      content: '""',
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      borderRadius: "53px",
      backgroundImage: `url(/file/blocks/${album[0].url})`,
      backgroundPosition: "center center",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      filter: "grayscale(0.9)",
      transition: "filter 0.3s ease-in-out"
    }
  });
  return /* @__PURE__ */ jsx(Box, { children: /* @__PURE__ */ jsxs(Box, { className: "relative m-0 p-0 w-[325px]", children: [
    /* @__PURE__ */ jsx(ImageStyle, {}),
    /* @__PURE__ */ jsx(Box, { className: `absolute bottom-0 left-0 right-0 flex items-center ${styles.titleAria}`, children: /* @__PURE__ */ jsx(Typography, { variant: "h4", align: "center", sx: { fontWeight: "bold", flexBasis: "100%" }, children: title }) })
  ] }) });
};
const PhotoGalleryContainer = ({ album, title }) => {
  Container.get(AlbumService);
  const uri = "/file/blocks/";
  const [open, setOpen] = React.useState(false);
  const openViewer = () => setOpen(true);
  const closeViewer = () => setOpen(false);
  return /* @__PURE__ */ jsxs(GalleryContextProvider, { value: { open, openViewer, closeViewer, album, uri, title }, children: [
    /* @__PURE__ */ jsx(CustomImageList, {}),
    /* @__PURE__ */ jsx(SliderContainer, {})
  ] });
};
const GalleryList = ({ galleries }) => {
  const lang = usePage().props.lang;
  return /* @__PURE__ */ jsxs(Box, { className: "py-[16px]", children: [
    /* @__PURE__ */ jsx(
      Typography,
      {
        variant: "h3",
        component: "h3",
        className: "p-[16px] uppercase",
        sx: { fontWeight: "bold" },
        children: "Galleries"
      }
    ),
    /* @__PURE__ */ jsx(
      Stack,
      {
        direction: "row",
        justifyContent: "center",
        alignItems: "center",
        spacing: 5,
        useFlexGap: true,
        flexWrap: "wrap",
        children: galleries.map((gallery, key) => /* @__PURE__ */ jsx(
          Box,
          {
            children: /* @__PURE__ */ jsx(Box, { className: "relative flex justify-center", children: /* @__PURE__ */ jsx(Link, { href: `/${lang}/block/details/gallery/${gallery.id}`, children: /* @__PURE__ */ jsx(PhotoGalleryContainer, { album: gallery.images, title: gallery.title }, key) }) })
          },
          "block-" + key
        ))
      }
    )
  ] });
};
export {
  GalleryList as default
};
