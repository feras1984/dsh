import { jsxs, jsx } from "react/jsx-runtime";
import React from "react";
import { Box, Typography, Grid, Card, CardContent } from "@mui/material";
import { Service, Container } from "typedi";
import "reflect-metadata";
import { O as OrderService } from "./OrderService-94437450.js";
import { F as FormService, P as ProductService, C as CommonService } from "../app.js";
import axios from "axios";
import ListItemIcon from "@mui/material/ListItemIcon/index.js";
import GppGoodIcon from "@mui/icons-material/GppGood.js";
import PersonIcon from "@mui/icons-material/Person.js";
import { LocalGroceryStore } from "@mui/icons-material";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn.js";
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
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __decorateClass = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result)
    __defProp(target, key, result);
  return result;
};
let CustomerService = class {
  constructor() {
    this.formService = Container.get(FormService);
    this.getCustomers = (...args) => {
      const query = this.formService.formQuery(...args);
      return axios.get(
        "/admin/user/list" + query
      );
    };
    this.getCount = () => {
      return axios.get(
        "/admin/user/count",
        {
          headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
          }
        }
      );
    };
    this.getActivities = (userId, lang) => {
      return axios.get(
        `/${lang}/admin/user/activities/` + userId,
        {
          headers: {
            "Accept": "application/json"
          }
        }
      );
    };
    this.getOrders = (userId, lang) => {
      return axios.get(
        `/${lang}/admin/user/orders/` + userId,
        {
          headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
          }
        }
      );
    };
    this.activateReview = (formData) => {
      return axios.patch(
        "/admin/user/review/activate",
        formData,
        {
          headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
          }
        }
      );
    };
  }
  activateCustomer(status, id) {
    return axios.patch(
      "/admin/user/list/" + id,
      { status }
    );
  }
};
CustomerService = __decorateClass([
  Service()
], CustomerService);
const CustomerService$1 = CustomerService;
const Statistics = () => {
  const customerService = Container.get(CustomerService$1);
  const productService = Container.get(ProductService);
  const orderService = Container.get(OrderService);
  const commonService = Container.get(CommonService);
  const [usersCount, setUsersCount] = React.useState(0);
  const [productsCount, setProductsCount] = React.useState(0);
  const [ordersCount, setOrdersCount] = React.useState(0);
  const [totalRevenue, setTotalRevenue] = React.useState(0);
  React.useEffect(() => {
    Promise.all([
      customerService.getCount(),
      productService.getCount(),
      orderService.getCount(),
      orderService.getPrice()
    ]).then(([usersCount2, productsCount2, ordersCount2, totalRevenue2]) => {
      setUsersCount(usersCount2.data);
      setProductsCount(productsCount2.data);
      setOrdersCount(ordersCount2.data);
      setTotalRevenue(totalRevenue2.data);
    });
  }, []);
  return /* @__PURE__ */ jsxs(Box, { className: "p-[16px]", children: [
    /* @__PURE__ */ jsx(Typography, { component: "h5", variant: "h5", sx: { fontWeight: 500, marginBottom: "16px" }, children: "Statistics" }),
    /* @__PURE__ */ jsxs(
      Grid,
      {
        container: true,
        spacing: 3,
        justifyContent: "space-between",
        alignItems: "center",
        children: [
          /* @__PURE__ */ jsx(Grid, { item: true, xs: 12, sm: 6, md: 3, children: /* @__PURE__ */ jsx(Card, { sx: { height: 150, bgcolor: "#6261cc" }, children: /* @__PURE__ */ jsxs(CardContent, { children: [
            /* @__PURE__ */ jsx(ListItemIcon, { children: /* @__PURE__ */ jsx(PersonIcon, { sx: { fontSize: 40 } }) }),
            /* @__PURE__ */ jsxs(Box, { className: "flex justify-center items-center gap-2", children: [
              /* @__PURE__ */ jsx(Typography, { variant: "h3", component: "h3", align: "center", sx: { fontWeight: 700 }, children: usersCount }),
              /* @__PURE__ */ jsx(Typography, { variant: "body2", component: "h5", children: productsCount === 1 ? "user" : "users" })
            ] })
          ] }) }) }),
          /* @__PURE__ */ jsx(Grid, { item: true, xs: 12, sm: 6, md: 3, children: /* @__PURE__ */ jsx(Card, { sx: { height: 150, bgcolor: "#3d99f5" }, children: /* @__PURE__ */ jsxs(CardContent, { children: [
            /* @__PURE__ */ jsx(ListItemIcon, { children: /* @__PURE__ */ jsx(GppGoodIcon, { sx: { fontSize: 40 } }) }),
            /* @__PURE__ */ jsxs(Box, { className: "flex justify-center items-center gap-2", children: [
              /* @__PURE__ */ jsx(Typography, { variant: "h3", component: "h3", align: "center", sx: { fontWeight: 700 }, children: productsCount }),
              /* @__PURE__ */ jsx(Typography, { variant: "body2", component: "h5", children: productsCount === 1 ? "product" : "products" })
            ] })
          ] }) }) }),
          /* @__PURE__ */ jsx(Grid, { item: true, xs: 12, sm: 6, md: 3, children: /* @__PURE__ */ jsx(Card, { sx: { height: 150, bgcolor: "#edad21" }, children: /* @__PURE__ */ jsxs(CardContent, { children: [
            /* @__PURE__ */ jsx(ListItemIcon, { children: /* @__PURE__ */ jsx(LocalGroceryStore, { sx: { fontSize: 40 } }) }),
            /* @__PURE__ */ jsxs(Box, { className: "flex justify-center items-center gap-2", children: [
              /* @__PURE__ */ jsx(Typography, { variant: "h3", component: "h3", align: "center", sx: { fontWeight: 700 }, children: ordersCount }),
              /* @__PURE__ */ jsx(Typography, { variant: "body2", component: "h5", children: productsCount === 1 ? "order" : "orders" })
            ] })
          ] }) }) }),
          /* @__PURE__ */ jsx(Grid, { item: true, xs: 12, children: /* @__PURE__ */ jsx(Card, { sx: { height: 150, bgcolor: "#db5d5d" }, children: /* @__PURE__ */ jsxs(CardContent, { children: [
            /* @__PURE__ */ jsx(ListItemIcon, { children: /* @__PURE__ */ jsx(MonetizationOnIcon, { sx: { fontSize: 40 } }) }),
            /* @__PURE__ */ jsxs(Box, { className: "flex justify-center items-center gap-2", children: [
              /* @__PURE__ */ jsx(Typography, { variant: "h3", component: "h3", align: "center", sx: { fontWeight: 700 }, children: commonService.currencyFormatWithoutUnit(totalRevenue) }),
              /* @__PURE__ */ jsx(Typography, { variant: "body2", component: "h5", children: "AED" })
            ] })
          ] }) }) })
        ]
      }
    )
  ] });
};
export {
  Statistics as default
};
