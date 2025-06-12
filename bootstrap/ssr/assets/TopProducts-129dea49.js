import { jsx, jsxs } from "react/jsx-runtime";
import React from "react";
import { Container } from "typedi";
import "reflect-metadata";
import { C as CommonService, P as ProductService } from "../app.js";
import { CardHeader, Avatar, Box, Typography, List, ListItem, ListItemText } from "@mui/material";
import { grey } from "@mui/material/colors/index.js";
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
const deleteButton = "_deleteButton_1y5lg_1";
const titleStyle = "_titleStyle_1y5lg_7";
const styles = {
  deleteButton,
  titleStyle
};
const ImageTemplate = ({ product }) => {
  const commonService = Container.get(CommonService);
  const productService = Container.get(ProductService);
  return /* @__PURE__ */ jsx(
    CardHeader,
    {
      classes: {
        title: styles.titleStyle
      },
      avatar: /* @__PURE__ */ jsx(
        Avatar,
        {
          sx: { bgcolor: grey[500] },
          "aria-label": "recipe",
          alt: productService.getProductName(product),
          src: `/file/products/${product.images[0].url}`
        }
      ),
      title: productService.getProductName(product),
      subheader: commonService.currencyFormat(product.sellPrice)
    }
  );
};
const TopProducts = () => {
  const productService = Container.get(ProductService);
  const [products, setProducts] = React.useState([]);
  React.useEffect(() => {
    productService.topProducts().then((response) => {
      setProducts(response.data);
    });
  }, []);
  return /* @__PURE__ */ jsxs(Box, { className: "p-[16px]", children: [
    /* @__PURE__ */ jsx(Typography, { component: "h5", variant: "h5", sx: { fontWeight: 500, marginBottom: "16px" }, children: "Top Products" }),
    /* @__PURE__ */ jsx(List, { children: products.map((product, index) => /* @__PURE__ */ jsxs(ListItem, { children: [
      /* @__PURE__ */ jsx(ImageTemplate, { product }),
      /* @__PURE__ */ jsx(
        ListItemText,
        {
          primary: product.totalSales + " Purchases",
          primaryTypographyProps: {
            fontWeight: 500,
            fontSize: 20
          }
        }
      )
    ] }, index)) })
  ] });
};
export {
  TopProducts as default
};
