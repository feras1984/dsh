import { jsxs, jsx } from "react/jsx-runtime";
import { Phone, Mail, MapPin, Clock, Blinds, ShieldMinus, Factory } from "lucide-react";
import React from "react";
import { Container } from "typedi";
import "reflect-metadata";
import { M as MenuService } from "./MenuService-1c3a39b3.js";
import { C as ContactFormV2 } from "./ContactFormV2-3f1ee9af.js";
import { useTranslation } from "react-i18next";
import "axios";
import "./useRecaptcha-74637499.js";
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
import "@syncfusion/ej2-base";
import "./CustomSnackbar-a775827f.js";
import "@mui/material";
import "@mui/material/Alert/index.js";
import "zod";
import "react-hook-form";
import "@hookform/resolvers/zod";
import "./ValidatedInput-4e590f68.js";
import "@mui/material/InputAdornment/index.js";
import "@mui/icons-material/Send.js";
import "react-google-recaptcha";
import "./ValidatedSelect-8a375c57.js";
import "./BlockService-2a2353d4.js";
const ContactUs = ({ industries, contactLinks }) => {
  const menuService = Container.get(MenuService);
  const { t } = useTranslation();
  React.useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    projectType: "",
    message: ""
  });
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-background", children: [
    /* @__PURE__ */ jsx("section", { className: "py-20 bg-primary text-primary-foreground", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 text-center", children: [
      /* @__PURE__ */ jsx("h1", { className: "text-5xl font-bold mb-6", children: t("contact-us") }),
      /* @__PURE__ */ jsx("p", { className: "text-xl max-w-3xl mx-auto", children: t("contact-us-hero") })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "py-20", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16", children: [
      /* @__PURE__ */ jsxs("div", { className: "text-center bg-card border border-border rounded-lg p-6", children: [
        /* @__PURE__ */ jsx(
          "div",
          {
            className: "bg-primary rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4",
            children: /* @__PURE__ */ jsx(Phone, { className: "h-8 w-8 text-primary-foreground" })
          }
        ),
        /* @__PURE__ */ jsx("h3", { className: "text-lg font-semibold mb-2 text-foreground", children: t("phone") }),
        /* @__PURE__ */ jsx("p", { className: "text-muted-foreground", children: menuService.getSplitLink(contactLinks, "mobile") })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "text-center bg-card border border-border rounded-lg p-6", children: [
        /* @__PURE__ */ jsx(
          "div",
          {
            className: "bg-primary rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4",
            children: /* @__PURE__ */ jsx(Mail, { className: "h-8 w-8 text-primary-foreground" })
          }
        ),
        /* @__PURE__ */ jsx("h3", { className: "text-lg font-semibold mb-2 text-foreground", children: t("email") }),
        /* @__PURE__ */ jsx("p", { className: "text-muted-foreground", children: menuService.getSplitLink(contactLinks, "mail") })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "text-center bg-card border border-border rounded-lg p-6", children: [
        /* @__PURE__ */ jsx(
          "div",
          {
            className: "bg-primary rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4",
            children: /* @__PURE__ */ jsx(MapPin, { className: "h-8 w-8 text-primary-foreground" })
          }
        ),
        /* @__PURE__ */ jsx("h3", { className: "text-lg font-semibold mb-2 text-foreground", children: t("address") }),
        menuService.getAddress().map((address, key) => /* @__PURE__ */ jsx("p", { className: "text-muted-foreground", children: address }, key))
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "text-center bg-card border border-border rounded-lg p-6", children: [
        /* @__PURE__ */ jsx(
          "div",
          {
            className: "bg-primary rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4",
            children: /* @__PURE__ */ jsx(Clock, { className: "h-8 w-8 text-primary-foreground" })
          }
        ),
        /* @__PURE__ */ jsx("h3", { className: "text-lg font-semibold mb-2 text-foreground", children: t("hours") }),
        /* @__PURE__ */ jsx("p", { className: "text-muted-foreground", children: "Mon - Fri: 8:00 AM - 6:00 PM" }),
        /* @__PURE__ */ jsx("p", { className: "text-muted-foreground", children: "Sat: 9:00 AM - 4:00 PM" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "text-center bg-card border border-border rounded-lg p-6", children: [
        /* @__PURE__ */ jsx(
          "div",
          {
            className: "bg-primary rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4",
            children: /* @__PURE__ */ jsx(Blinds, { className: "h-8 w-8 text-primary-foreground" })
          }
        ),
        /* @__PURE__ */ jsx("h3", { className: "text-lg font-semibold mb-2 text-foreground", children: t("trade-license-number") }),
        /* @__PURE__ */ jsx("p", { className: "text-muted-foreground", children: "535877" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "text-center bg-card border border-border rounded-lg p-6", children: [
        /* @__PURE__ */ jsx(
          "div",
          {
            className: "bg-primary rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4",
            children: /* @__PURE__ */ jsx(ShieldMinus, { className: "h-8 w-8 text-primary-foreground" })
          }
        ),
        /* @__PURE__ */ jsx("h3", { className: "text-lg font-semibold mb-2 text-foreground", children: t("commercial-registration-number") }),
        /* @__PURE__ */ jsx("p", { className: "text-muted-foreground", children: "1002916" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "text-center bg-card border border-border rounded-lg p-6", children: [
        /* @__PURE__ */ jsx(
          "div",
          {
            className: "bg-primary rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4",
            children: /* @__PURE__ */ jsx(Factory, { className: "h-8 w-8 text-primary-foreground" })
          }
        ),
        /* @__PURE__ */ jsx("h3", { className: "text-lg font-semibold mb-2 text-foreground", children: t("chamber-of-commerce-industry-registration-no") }),
        /* @__PURE__ */ jsx("p", { className: "text-muted-foreground", children: "61529" })
      ] })
    ] }) }) }),
    /* @__PURE__ */ jsx("section", { className: "py-20 bg-secondary/50", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-12", children: [
      /* @__PURE__ */ jsx(ContactFormV2, { industries }),
      /* @__PURE__ */ jsxs("div", { className: "space-y-8", children: [
        /* @__PURE__ */ jsx("div", { className: "bg-card border border-border rounded-lg overflow-hidden", children: /* @__PURE__ */ jsx(
          "iframe",
          {
            src: "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3608.3835780967206!2d55.33020777538377!3d25.257678977672022!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjXCsDE1JzI3LjYiTiA1NcKwMTknNTguMCJF!5e0!3m2!1sen!2sae!4v1751881104918!5m2!1sen!2sae",
            width: "100%",
            height: "450",
            loading: "lazy",
            referrerPolicy: "no-referrer-when-downgrade"
          }
        ) }),
        /* @__PURE__ */ jsxs("div", { className: "bg-card border border-border rounded-lg p-6", children: [
          /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold mb-4 text-foreground", children: "Visit Our Office" }),
          /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-start", children: [
              /* @__PURE__ */ jsx(MapPin, { className: "h-5 w-5 text-primary mr-3 mt-1" }),
              /* @__PURE__ */ jsx("div", { children: menuService.getAddress().map((address, key) => /* @__PURE__ */ jsx("p", { className: "text-muted-foreground", children: address }, key)) })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex items-center", children: [
              /* @__PURE__ */ jsx(Phone, { className: "h-5 w-5 text-primary mr-3" }),
              /* @__PURE__ */ jsx("p", { className: "text-muted-foreground", children: menuService.getSplitLink(contactLinks, "mobile") })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex items-center", children: [
              /* @__PURE__ */ jsx(Mail, { className: "h-5 w-5 text-primary mr-3" }),
              /* @__PURE__ */ jsx("p", { className: "text-muted-foreground", children: menuService.getSplitLink(contactLinks, "mail") })
            ] })
          ] })
        ] })
      ] })
    ] }) }) })
  ] });
};
export {
  ContactUs as default
};
