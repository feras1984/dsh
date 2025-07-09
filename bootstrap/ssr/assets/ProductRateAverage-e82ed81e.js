import { jsx, jsxs } from "react/jsx-runtime";
import { Container } from "typedi";
import "reflect-metadata";
import { C as CommonService } from "../app.js";
import { Typography, Box } from "@mui/material";
import StarRateIcon from "@mui/icons-material/StarRate.js";
const swiper = "_swiper_i5tdu_1";
const mediaImg = "_mediaImg_i5tdu_18";
const shadowLayer = "_shadowLayer_i5tdu_73";
const cardBoxShadow = "_cardBoxShadow_i5tdu_84";
const fontWeightBold = "_fontWeightBold_i5tdu_93";
const styles = {
  swiper,
  "swiper-slide": "_swiper-slide_i5tdu_8",
  mediaImg,
  "autoplay-progress": "_autoplay-progress_i5tdu_31",
  "title-container": "_title-container_i5tdu_61",
  shadowLayer,
  cardBoxShadow,
  fontWeightBold
};
const ProductPrice = ({ product }) => {
  const commonService = Container.get(CommonService);
  const calculateOfferPrice = () => {
    if (product.offer !== null) {
      if (product.offer.isPercent)
        return product.sellPrice * (1 - product.offer.amount / 100);
      else
        return product.sellPrice - product.offer.amount;
    } else
      return 0;
  };
  return product.offer === null ? /* @__PURE__ */ jsx(Typography, { component: "p", variant: "body1", children: commonService.currencyFormat(product.sellPrice, "AED") }) : /* @__PURE__ */ jsxs(Box, { className: "flex justify-start items-center gap-2", children: [
    /* @__PURE__ */ jsx(Typography, { className: "line-through", component: "p", variant: "body2", sx: { color: "#DC0002" }, children: commonService.currencyFormat(product.sellPrice, "AED") }),
    /* @__PURE__ */ jsx(Typography, { component: "p", variant: "body1", className: styles.fontWeightBold, children: commonService.currencyFormat(calculateOfferPrice(), "AED") })
  ] });
};
const ProductRateAverage = ({ product }) => {
  return /* @__PURE__ */ jsxs(Box, { className: "flex justify-start items-center gap-1 px-[3px]", sx: { bgcolor: "rgba(0,0,0,0.5)", color: "background.default" }, children: [
    /* @__PURE__ */ jsx(StarRateIcon, { sx: { color: "#faaf00" } }),
    " ",
    product.average
  ] });
};
export {
  ProductRateAverage as P,
  ProductPrice as a,
  styles as s
};
