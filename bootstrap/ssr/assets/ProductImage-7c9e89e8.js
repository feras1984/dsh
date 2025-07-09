import { jsx, jsxs } from "react/jsx-runtime";
import React from "react";
import { useSwiperContext } from "./SwiperContext-5a5f5757.js";
import { s as styles$1 } from "./styles.module-29668287.js";
import { s as styles } from "./styles.module-3979ac5e.js";
import { Container } from "typedi";
import "reflect-metadata";
import { C as CommonService } from "../app.js";
import { Box } from "@mui/material";
import "axios";
import "react-dom/client";
import "@inertiajs/react";
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
const OfferBadgeHorizontal = ({ offer }) => {
  const commonService = Container.get(CommonService);
  const calculateOffer = () => {
    if (offer.isPercent)
      return offer.amount + "%";
    else
      return commonService.currencyFormat(offer.amount);
  };
  const offerName = () => {
    if (offer.type === "category")
      return offer.name;
    else
      return "";
  };
  return /* @__PURE__ */ jsx("div", { className: styles.badgeOverlay, children: /* @__PURE__ */ jsxs("span", { className: `${styles.topFull} ${styles.badge} ${styles.red} ${styles.spanNoWrap}`, children: [
    offerName(),
    " ",
    calculateOffer(),
    " Off"
  ] }) });
};
const ProductImage = ({ product }) => {
  const [timeId, setTimeId] = React.useState(null);
  const { handleProduct } = useSwiperContext();
  const handleHover = async (event) => {
    setTimeId(setTimeout(() => {
      handleProduct(product);
    }, 1e3));
  };
  const handleMouseLeave = () => {
    if (timeId)
      clearTimeout(timeId);
    setTimeId(null);
  };
  return /* @__PURE__ */ jsxs(
    Box,
    {
      className: `${styles$1.imgContainer} cursor-pointer`,
      onMouseEnter: (e) => handleHover(),
      onMouseLeave: handleMouseLeave,
      children: [
        /* @__PURE__ */ jsx("img", { src: `/file/products/${product.images[0].url}`, alt: product.name }),
        product.offer && /* @__PURE__ */ jsx(OfferBadgeHorizontal, { offer: product.offer })
      ]
    }
  );
};
export {
  ProductImage as default
};
