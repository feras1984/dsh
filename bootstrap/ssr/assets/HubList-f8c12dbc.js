import { jsxs, jsx } from "react/jsx-runtime";
import { Container } from "typedi";
import "reflect-metadata";
import { C as CommonService, u as useAppDispatch } from "../app.js";
import { B as BlockCategories } from "./BlockCategories-455d683a.js";
import AboutUsList from "./AboutUsList-6ed06512.js";
import GalleryList from "./GalleryList-4d4b33a5.js";
import ServicesList from "./ServicesList-092d1293.js";
import { Head } from "@inertiajs/react";
import { Box } from "@mui/material";
import { H as HeaderLayout } from "./HeaderLayout-57d179bb.js";
import ArticlesList from "./ArticlesList-bf8d8597.js";
import IndustriesList from "./IndustriesList-db45c56a.js";
import NewsList from "./NewsList-98077556.js";
import AboutDsh from "./AboutDSH-9b96eeca.js";
import GeneralDirectorSpeech from "./GeneralDirectorSpeech-d2c7cdc0.js";
import Clients from "./Clients-95b797dc.js";
import Projects from "./Projects-4aececd5.js";
import PrincipalActivities from "./PrincipalActivities-06462e70.js";
import QualityAssurance from "./QualityAssurance-beec1e83.js";
import SafetyPlanning from "./SafetyPlanning-857316e7.js";
import CompanyThoughts from "./CompanyThoughts-d26721bd.js";
import ContactUs from "./ContactUs-067d309b.js";
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
import "react";
import "./MissionList-05983eef.js";
import "./MissionDetails-769e6610.js";
import "./AboutPage-aa2d8e6a.js";
import "./styles.module-2038aa74.js";
import "./SliderContainer-6175f32b.js";
import "gsap";
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
import "swiper/react";
import "swiper/modules";
/* empty css                     */import "swiper";
import "@gsap/react";
import "@mui/material/styles/index.js";
import "./ServicesDetails-9823cc38.js";
import "react-country-flag";
import "./FileService-5953256c.js";
import "@mui/icons-material/ClearOutlined.js";
import "@mui/material/colors/index.js";
import "./MenuService-1c3a39b3.js";
import "./ArticleDetails-2f3295df.js";
import "./styles.module-498bd7ba.js";
import "./IndustryDetails-344393f1.js";
import "./styles.module-2d4d1c93.js";
import "./NewsDetails-e38c0a4b.js";
import "./styles.module-18fc343b.js";
import "lucide-react";
import "@mui/lab";
import "./ExecutedProjects-b08ee6d7.js";
import "./FilteredProjects-bbda0236.js";
import "./ProjectsUnderConstruction-2e097c31.js";
import "./ContactFormV2-3f1ee9af.js";
import "./useRecaptcha-74637499.js";
import "./CustomSnackbar-a775827f.js";
import "@mui/material/Alert/index.js";
import "zod";
import "react-hook-form";
import "@hookform/resolvers/zod";
import "./ValidatedInput-4e590f68.js";
import "@mui/material/InputAdornment/index.js";
import "react-google-recaptcha";
import "./ValidatedSelect-8a375c57.js";
import "./BlockService-2a2353d4.js";
const HubList = ({
  mainLinks,
  socialLinks,
  footerLinks,
  contactLinks,
  logo,
  languages,
  blocks,
  category
}) => {
  const commonService = Container.get(CommonService);
  let AddComponent;
  useAppDispatch();
  switch (commonService.toTitleCase(category)) {
    case BlockCategories.ABOUT: {
      AddComponent = () => /* @__PURE__ */ jsx(AboutUsList, { about: blocks });
      break;
    }
    case BlockCategories.ABOUT_DSH: {
      AddComponent = () => /* @__PURE__ */ jsx(AboutDsh, { blocks });
      break;
    }
    case BlockCategories.GENERAL_DIRECTOR_SPEECH: {
      AddComponent = () => /* @__PURE__ */ jsx(GeneralDirectorSpeech, { blocks });
      break;
    }
    case BlockCategories.CLIENTS: {
      AddComponent = () => /* @__PURE__ */ jsx(Clients, { blocks });
      break;
    }
    case BlockCategories.PROJECTS: {
      AddComponent = () => /* @__PURE__ */ jsx(Projects, { blocks });
      break;
    }
    case BlockCategories.GALLERY: {
      AddComponent = () => /* @__PURE__ */ jsx(GalleryList, { galleries: blocks });
      break;
    }
    case BlockCategories.SERVICES: {
      AddComponent = () => /* @__PURE__ */ jsx(ServicesList, { services: blocks, category });
      break;
    }
    case BlockCategories.CONTACT_US: {
      AddComponent = () => /* @__PURE__ */ jsx(ContactUs, { industries: blocks, contactLinks });
      break;
    }
    case BlockCategories.ARTICLES: {
      AddComponent = () => /* @__PURE__ */ jsx(ArticlesList, { services: blocks, category });
      break;
    }
    case BlockCategories.INDUSTRIES: {
      AddComponent = () => /* @__PURE__ */ jsx(IndustriesList, { services: blocks, category });
      break;
    }
    case BlockCategories.NEWS: {
      AddComponent = () => /* @__PURE__ */ jsx(NewsList, { services: blocks, category });
      break;
    }
    case BlockCategories.PRINCIPAL_ACTIVITIES: {
      AddComponent = () => /* @__PURE__ */ jsx(PrincipalActivities, { blocks });
      break;
    }
    case BlockCategories.QUALITY_ASSURANCE: {
      AddComponent = () => /* @__PURE__ */ jsx(QualityAssurance, { blocks });
      break;
    }
    case BlockCategories.SAFETY_PLANNING: {
      AddComponent = () => /* @__PURE__ */ jsx(SafetyPlanning, { blocks });
      break;
    }
    case BlockCategories.COMPANY_THOUGHTS: {
      AddComponent = () => /* @__PURE__ */ jsx(CompanyThoughts, { blocks });
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
