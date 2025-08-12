import { jsxs, jsx } from "react/jsx-runtime";
import React from "react";
import { SwiperProvider } from "./SwiperContext-5a5f5757.js";
import { Box, Typography } from "@mui/material";
import ProductSwiper from "./ProductSwiper-9862aa78.js";
import ProductModal from "./ProductModal-50bc1ac1.js";
import { Container } from "typedi";
import "reflect-metadata";
import { P as ProductService } from "../app.js";
import { usePage } from "@inertiajs/react";
/* empty css                     */import "./styles.module-29668287.js";
import "swiper/react";
import "swiper/modules";
import "./ProductRateAverage-e82ed81e.js";
import "@mui/icons-material/StarRate.js";
import "./ProductName-fe8f9eba.js";
import "./ProductAction-c4b687ad.js";
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
import "./ProductImage-7c9e89e8.js";
import "./styles.module-3979ac5e.js";
import "./CustomSnackbar-a775827f.js";
import "@mui/material/Alert/index.js";
import "@mui/icons-material/Favorite.js";
import "@mui/icons-material/FavoriteBorder.js";
import "@mui/icons-material/BookmarkBorder.js";
import "@mui/icons-material/Bookmark.js";
import "@mui/material/colors/index.js";
const SwiperContainer = ({ categories }) => {
  const productService = Container.get(ProductService);
  const lang = usePage().props.lang;
  const [product, setProduct] = React.useState(null);
  const handleProduct = React.useCallback((product2) => {
    if (product2) {
      productService.getLocaleProduct(lang, product2.id).then((response) => {
        setProduct(response.data);
      });
    } else {
      setProduct(null);
    }
  }, [product]);
  return /* @__PURE__ */ jsxs(SwiperProvider, { value: { categories, handleProduct }, children: [
    /* @__PURE__ */ jsxs(Box, { className: "my-[32px]", children: [
      /* @__PURE__ */ jsx(Box, { className: "px-[16px]", children: /* @__PURE__ */ jsx(Typography, { component: "h5", variant: "h5", className: "uppercase", sx: { fontWeight: 600, marginBottom: "16px" }, children: "Top Products" }) }),
      /* @__PURE__ */ jsx(ProductSwiper, { item: "top" })
    ] }),
    /* @__PURE__ */ jsxs(Box, { className: "my-[32px]", children: [
      /* @__PURE__ */ jsx(Box, { className: "px-[16px]", children: /* @__PURE__ */ jsx(Typography, { component: "h5", variant: "h5", className: "uppercase", sx: { fontWeight: 600, marginBottom: "16px" }, children: "Offers" }) }),
      /* @__PURE__ */ jsx(ProductSwiper, { item: "offer" })
    ] }),
    /* @__PURE__ */ jsxs(Box, { className: "my-[32px]", children: [
      /* @__PURE__ */ jsx(Box, { className: "px-[16px]", children: /* @__PURE__ */ jsx(Typography, { component: "h5", variant: "h5", className: "uppercase", sx: { fontWeight: 600, marginBottom: "16px" }, children: "New Products" }) }),
      /* @__PURE__ */ jsx(ProductSwiper, { item: "new" })
    ] }),
    /* @__PURE__ */ jsx(ProductModal, { product })
  ] });
};
export {
  SwiperContainer as default
};
