import { jsx, jsxs } from "react/jsx-runtime";
import React from "react";
import { A as AlbumService, u as useGalleryContext, s as styles, G as GalleryContextProvider, S as SliderContainer } from "./SliderContainer-d664d1e8.js";
import { b as File } from "../app.js";
import { Box, Typography } from "@mui/material";
import { Container } from "typedi";
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
import "@inertiajs/react";
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
const FlatAlbum = () => {
  const albumService = Container.get(AlbumService);
  const { openViewer, album, uri, title } = useGalleryContext();
  album.find((img) => img.isCover) || new File({});
  const cover = album.find((img) => img.isCover) || new File({});
  return /* @__PURE__ */ jsx(Box, { className: "p-[16px]", children: /* @__PURE__ */ jsxs(Box, { className: styles.serviceCard, children: [
    /* @__PURE__ */ jsx(Box, { className: styles.boxContainer, children: /* @__PURE__ */ jsx(Box, { className: styles.imgFlex, children: albumService.getAlbumUrls(album, uri).map((img, key) => {
      return /* @__PURE__ */ jsx(
        Box,
        {
          className: styles.imgCard,
          onClick: openViewer,
          children: /* @__PURE__ */ jsx("img", { src: `${img.src}`, alt: img.title })
        },
        img.src + "-img-lst-" + key
      );
    }) }) }),
    /* @__PURE__ */ jsxs(Box, { className: `m-[32px] p-[16px] ${styles.coverAria}`, children: [
      /* @__PURE__ */ jsx("img", { src: `/file/blocks/${cover.url}`, alt: "" }),
      /* @__PURE__ */ jsx(Box, { className: styles.titleAria, children: /* @__PURE__ */ jsx(Typography, { variant: "body2", component: "p", align: "center", sx: { fontWeight: "bold" }, children: title }) })
    ] })
  ] }) });
};
const GalleryDetails = ({ gallery }) => {
  const album = gallery.images;
  const title = gallery.title;
  const uri = "/file/blocks/";
  const [open, setOpen] = React.useState(false);
  const openViewer = () => setOpen(true);
  const closeViewer = () => setOpen(false);
  return /* @__PURE__ */ jsx(Box, { className: "relative", children: /* @__PURE__ */ jsxs(
    GalleryContextProvider,
    {
      value: {
        open,
        openViewer,
        closeViewer,
        album,
        uri,
        title
      },
      children: [
        /* @__PURE__ */ jsx(FlatAlbum, {}),
        /* @__PURE__ */ jsx(SliderContainer, {})
      ]
    }
  ) });
};
export {
  GalleryDetails as default
};
