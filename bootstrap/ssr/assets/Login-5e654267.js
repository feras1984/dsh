import { jsxs, jsx } from "react/jsx-runtime";
import { Head } from "@inertiajs/react";
import { useState } from "react";
import { Box, Paper, Card, Typography, CardContent } from "@mui/material";
import { s as styles$1 } from "./styles.module-7e19f3c1.js";
import { c as useAppSelector } from "../app.js";
import LoginForm from "./LoginForm-bcd6d236.js";
import "axios";
import "react-dom/client";
import "react-redux";
import "@reduxjs/toolkit";
import "typedi";
import "reflect-metadata";
import "localstorage-slim";
import "crypto-js";
import "crypto-js/enc-utf8.js";
import "@mui/x-date-pickers";
import "@mui/x-date-pickers/AdapterDateFns/index.js";
import "i18next";
import "react-i18next";
import "@syncfusion/ej2-base";
import "zod";
import "@hookform/resolvers/zod";
import "react-hook-form";
import "./ValidatedInput-4e590f68.js";
import "@mui/material/InputAdornment/index.js";
const logoImg = "_logoImg_6nhpq_1";
const styles = {
  logoImg
};
const AuthAdminLayout = ({ children }) => {
  const [expand, setExpand] = useState(false);
  const dark = useAppSelector((state) => state.theme.dark);
  return /* @__PURE__ */ jsxs(Box, { className: `flex justify-start items-start ${dark ? "dark" : "light"}`, children: [
    /* @__PURE__ */ jsx(Box, { component: "div", className: `fixed h-screen p-[16px] overflow-y-auto
                ${expand ? styles$1.showSidebar : styles$1.hideSidebar}
                ` }),
    /* @__PURE__ */ jsx(
      Box,
      {
        component: "div",
        className: ` grow ${expand ? "ms-[256px]" : "ms-0"} ${expand ? styles$1.addMargin : styles$1.removeMargin}`,
        children: /* @__PURE__ */ jsx(Box, { component: "div", className: `content p-[16px] bg-scroll`, children })
      }
    )
  ] });
};
const Login = ({ status, canResetPassword }) => {
  const logo = `${window.location.origin}/file/logo`;
  return /* @__PURE__ */ jsxs(AuthAdminLayout, { children: [
    /* @__PURE__ */ jsx(Head, { title: "Login" }),
    /* @__PURE__ */ jsx(Box, { className: "flex justify-center", children: /* @__PURE__ */ jsx(Paper, { elevation: 3, className: "register-paper", children: /* @__PURE__ */ jsxs(Card, { sx: { margin: "auto", boxShadow: "none" }, children: [
      /* @__PURE__ */ jsxs(
        Box,
        {
          component: "div",
          className: "p-2 flex justify-center items-center",
          children: [
            /* @__PURE__ */ jsx(
              Box,
              {
                className: "px-2",
                children: /* @__PURE__ */ jsx("img", { src: logo, alt: "LOGO", className: styles.logoImg })
              }
            ),
            /* @__PURE__ */ jsx(Typography, { variant: "h5", children: /* @__PURE__ */ jsx("strong", { children: "Log In" }) })
          ]
        }
      ),
      /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsx(LoginForm, { status, canResetPassword }) })
    ] }) }) })
  ] });
};
export {
  Login as default
};
