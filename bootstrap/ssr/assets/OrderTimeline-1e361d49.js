import { jsxs, jsx } from "react/jsx-runtime";
import React from "react";
import { Container } from "typedi";
import "reflect-metadata";
import { O as OrderService } from "./OrderService-94437450.js";
import { LineChart } from "@mui/x-charts/LineChart";
import moment from "moment";
import { Box, Typography } from "@mui/material";
import "axios";
import "../app.js";
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
const OrderTimeline = () => {
  const orderService = Container.get(OrderService);
  const [orderTime, setOrderTime] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  React.useEffect(() => {
    setLoading(true);
    orderService.getTimeline().then((response) => {
      setLoading(false);
      setOrderTime(response.data);
    }).catch((error) => {
      setLoading(false);
    });
  }, []);
  return /* @__PURE__ */ jsxs(Box, { className: "p-[16px]", children: [
    /* @__PURE__ */ jsx(Typography, { component: "h5", variant: "h5", sx: { fontWeight: 500, marginBottom: "16px" }, children: "Total Revenue" }),
    /* @__PURE__ */ jsx(Box, { className: "flex", children: /* @__PURE__ */ jsx(
      LineChart,
      {
        dataset: orderTime,
        xAxis: [{
          data: orderTime.map((ord) => moment(ord.month).month()),
          // dataKey: 'month',
          valueFormatter: (date) => moment().month(date).format("MMM/YYYY")
        }],
        series: [
          {
            data: orderTime.map((ord) => ord.totalRevenue),
            label: "Total Revenue",
            // dataKey: 'totalRevenue',
            area: true,
            color: "#009688"
          }
        ],
        width: 500,
        className: "m-auto",
        height: 300,
        sx: {
          margin: "auto"
        }
      }
    ) })
  ] });
};
export {
  OrderTimeline as default
};
