import { jsx, jsxs } from "react/jsx-runtime";
import React, { useMemo } from "react";
import { Box } from "@mui/material";
/* empty css                     */import { Container } from "typedi";
import { P as ProductService } from "../app.js";
import { usePage } from "@inertiajs/react";
import { s as styles } from "./styles.module-29668287.js";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, A11y } from "swiper/modules";
import { P as ProductRateAverage, a as ProductPrice } from "./ProductRateAverage-e82ed81e.js";
import ProductName from "./ProductName-fe8f9eba.js";
import ProductAction from "./ProductAction-c4b687ad.js";
import ProductImage from "./ProductImage-7c9e89e8.js";
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
import "@mui/icons-material/StarRate.js";
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
import "./SwiperContext-5a5f5757.js";
import "./styles.module-3979ac5e.js";
const ProductSwiper = ({ categoryId, item = "all" }) => {
  const limit = 7;
  const [fetch, setFetch] = React.useState(true);
  const productService = Container.get(ProductService);
  const [products, setProducts] = React.useState([]);
  const [offset, setOffset] = React.useState(0);
  React.useState({ x: 0, y: 0 });
  const lang = usePage().props.lang;
  const [args, setArgs] = React.useState(
    [
      {
        key: "limit",
        value: limit
      },
      {
        key: "offset",
        value: offset
      }
    ]
  );
  useMemo(() => {
    if (categoryId) {
      setArgs([...args, { key: "categoryId", value: categoryId }]);
    }
  }, [categoryId]);
  const fetchProducts = () => {
    if (fetch) {
      switch (item) {
        case "offer":
          productService.localeOffers(
            lang,
            ...args
          ).then((response) => {
            if (response.data.length < limit)
              setFetch(false);
            setOffset(offset + 3);
            setArgs([...args, { key: "offset", value: offset + limit }]);
            setProducts([...products, ...response.data]);
          });
          break;
        case "top":
          productService.localeTopProducts(
            lang,
            ...args
          ).then((response) => {
            if (response.data.length < limit)
              setFetch(false);
            setOffset(offset + 3);
            setArgs([...args, { key: "offset", value: offset + limit }]);
            setProducts([...products, ...response.data]);
          });
          break;
        case "new":
          productService.getLocaleProducts(
            lang,
            ...args
          ).then((response) => {
            if (response.data.length < limit)
              setFetch(false);
            setOffset(offset + 3);
            setArgs([...args, { key: "offset", value: offset + limit }]);
            setProducts([...products, ...response.data]);
          });
          break;
        default:
          console.log("args: ", args);
          productService.getLocaleProducts(
            lang,
            ...args
          ).then((response) => {
            if (response.data.length < limit)
              setFetch(false);
            setOffset(offset + 3);
            setArgs([...args, { key: "offset", value: offset + limit }]);
            setProducts([...products, ...response.data]);
          });
      }
    }
  };
  const handleSliderChange = (index) => {
    fetchProducts();
  };
  React.useEffect(() => {
    setTimeout(() => {
      fetchProducts();
    });
  }, []);
  return /* @__PURE__ */ jsx(Box, { children: /* @__PURE__ */ jsx(
    Swiper,
    {
      modules: [Navigation, Pagination, Autoplay, A11y],
      className: styles.swiper,
      navigation: true,
      spaceBetween: 30,
      slidesPerView: "auto",
      centeredSlides: false,
      onSlideChange: (swiper) => handleSliderChange(swiper.activeIndex),
      children: products.map((product, key) => /* @__PURE__ */ jsx(
        Box,
        {
          maxWidth: "xl",
          component: "div",
          sx: { position: "relative" },
          children: /* @__PURE__ */ jsxs(SwiperSlide, { className: styles.swiperSlide, children: [
            /* @__PURE__ */ jsxs(Box, { className: "h-[123px] relative", children: [
              /* @__PURE__ */ jsx(ProductImage, { product }),
              product.average > 2 && /* @__PURE__ */ jsx(Box, { className: "p-0 m-0 absolute left-0 bottom-0", children: /* @__PURE__ */ jsx(ProductRateAverage, { product }) })
            ] }),
            /* @__PURE__ */ jsx(ProductName, { product }),
            /* @__PURE__ */ jsx(ProductPrice, { product }),
            /* @__PURE__ */ jsx(ProductAction, { product })
          ] })
        },
        `slider-${Math.random() * 1e4}-${key}`
      ))
    }
  ) });
};
export {
  ProductSwiper as default
};
