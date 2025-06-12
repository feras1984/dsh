import { jsxs, jsx } from "react/jsx-runtime";
import { A as AdminLayout } from "./AdminLayout-7a25f172.js";
import { usePage, Head } from "@inertiajs/react";
import Statistics from "./Statistics-c2833c90.js";
import OrderTimeline from "./OrderTimeline-1e361d49.js";
import ProductActivities from "./ProductActivities-1a051e60.js";
import { Divider } from "@mui/material";
import TopProducts from "./TopProducts-129dea49.js";
import "react";
import "./styles.module-7e19f3c1.js";
import "@mui/material/ListSubheader/index.js";
import "@mui/material/List/index.js";
import "@mui/material/ListItemButton/index.js";
import "@mui/material/ListItemIcon/index.js";
import "@mui/material/ListItemText/index.js";
import "@mui/material/Collapse/index.js";
import "./BlockCategories-6eec95f4.js";
import "typedi";
import "../app.js";
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
import "./Icon-2105584c.js";
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
import "@mui/material/colors/index.js";
import "./OrderService-94437450.js";
import "@mui/x-charts/LineChart";
import "moment";
import "@mui/icons-material/Favorite.js";
import "@mui/icons-material/Bookmark.js";
import "@mui/icons-material/Stars.js";
import "@mui/icons-material/Preview.js";
const Home = () => {
  usePage().props.auth.user;
  return /* @__PURE__ */ jsxs(AdminLayout, { children: [
    /* @__PURE__ */ jsx(Head, { title: "Home" }),
    /* @__PURE__ */ jsx(Statistics, {}),
    /* @__PURE__ */ jsx(Divider, { variant: "middle" }),
    /* @__PURE__ */ jsx(OrderTimeline, {}),
    /* @__PURE__ */ jsx(Divider, { variant: "middle" }),
    /* @__PURE__ */ jsx(ProductActivities, {}),
    /* @__PURE__ */ jsx(Divider, { variant: "middle" }),
    /* @__PURE__ */ jsx(TopProducts, {})
  ] });
};
export {
  Home as default
};
