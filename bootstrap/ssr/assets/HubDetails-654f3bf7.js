import { jsxs, jsx } from "react/jsx-runtime";
import React from "react";
import { Container } from "typedi";
import "reflect-metadata";
import { C as CommonService, u as useAppDispatch, s as setSpinner } from "../app.js";
import { B as BlockCategories } from "./BlockCategories-455d683a.js";
import { Head } from "@inertiajs/react";
import { Box } from "@mui/material";
import { H as HeaderLayout } from "./HeaderLayout-57d179bb.js";
import AboutUsDetails from "./AboutUsDetails-510769db.js";
import ClientDetails from "./ClientDetails-9c82a8cb.js";
import GalleryDetails from "./GalleryDetails-9ca2e0b7.js";
import ServiceCard from "./ServiceCard-76464f35.js";
import IndustryCard from "./IndustryCard-509aa060.js";
import ArticleCard from "./ArticleCard-3e503df1.js";
import NewsCard from "./NewsCard-f345105c.js";
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
import "react-icons/fa/index.esm.js";
import "react-icons/fa6/index.esm.js";
import "react-icons/gr/index.esm.js";
import "react-country-flag";
import "./FileService-5953256c.js";
import "@mui/icons-material/Menu.js";
import "@mui/icons-material/ClearOutlined.js";
import "@mui/material/colors/index.js";
import "./MenuService-1c3a39b3.js";
import "./SliderContainer-6175f32b.js";
import "gsap";
import "./Icon-2105584c.js";
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
import "@mui/icons-material/MonetizationOn.js";
import "@mui/icons-material/GppGood.js";
import "@mui/icons-material/Login.js";
import "@mui/icons-material/HowToReg.js";
import "@mui/icons-material/Logout.js";
import "@mui/icons-material";
import "@mui/icons-material/Notifications.js";
import "@mui/icons-material/MoreVert.js";
import "@mui/icons-material/Close.js";
import "swiper/react";
import "swiper/modules";
/* empty css                     */import "swiper";
import "@gsap/react";
import "./styles.module-18fc343b.js";
import "./styles.module-2d4d1c93.js";
import "./styles.module-498bd7ba.js";
import "./styles.module-2038aa74.js";
const HubList = ({
  mainLinks,
  socialLinks,
  footerLinks,
  contactLinks,
  logo,
  languages,
  block,
  category
}) => {
  const commonService = Container.get(CommonService);
  let AddComponent;
  const dispatch = useAppDispatch();
  React.useEffect(() => {
    setTimeout(() => {
      dispatch(setSpinner(false));
    }, 3e3);
  }, []);
  switch (commonService.toTitleCase(category)) {
    case BlockCategories.ABOUT: {
      AddComponent = () => /* @__PURE__ */ jsx(AboutUsDetails, { about: block });
      break;
    }
    case BlockCategories.CLIENTS: {
      AddComponent = () => /* @__PURE__ */ jsx(ClientDetails, { client: block });
      break;
    }
    case BlockCategories.GALLERY: {
      AddComponent = () => /* @__PURE__ */ jsx(GalleryDetails, { gallery: block });
      break;
    }
    case BlockCategories.SERVICES: {
      AddComponent = () => /* @__PURE__ */ jsx(ServiceCard, { service: block });
      break;
    }
    case BlockCategories.INDUSTRIES: {
      AddComponent = () => /* @__PURE__ */ jsx(IndustryCard, { service: block });
      break;
    }
    case BlockCategories.ARTICLES: {
      AddComponent = () => /* @__PURE__ */ jsx(ArticleCard, { service: block });
      break;
    }
    case BlockCategories.NEWS: {
      AddComponent = () => /* @__PURE__ */ jsx(NewsCard, { service: block });
      break;
    }
  }
  return /* @__PURE__ */ jsxs(
    HeaderLayout,
    {
      mainLinks,
      socialLinks,
      contactLinks,
      footerLinks,
      logo,
      languages,
      children: [
        /* @__PURE__ */ jsx(Head, { title: commonService.toTitleCase(category) }),
        /* @__PURE__ */ jsx(Box, { className: "relative mt-[90px]", children: /* @__PURE__ */ jsx(AddComponent, {}) })
      ]
    }
  );
};
export {
  HubList as default
};
