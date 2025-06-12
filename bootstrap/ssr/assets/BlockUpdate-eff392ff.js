import { jsxs, jsx } from "react/jsx-runtime";
import { C as CommonService } from "../app.js";
import { Container } from "typedi";
import "reflect-metadata";
import { Head } from "@inertiajs/react";
import { A as AdminLayout } from "./AdminLayout-7a25f172.js";
import { B as BlockCategories } from "./BlockCategories-6eec95f4.js";
import MainSectionUpdate from "./MainSectionUpdate-6c2919f7.js";
import AboutUpdate from "./AboutUpdate-c4d2edc1.js";
import ClientsUpdate from "./ClientsUpdate-ec6c19aa.js";
import GalleryUpdate from "./GalleryUpdate-86d37964.js";
import MissionUpdate from "./MissionUpdate-f27e265d.js";
import ServicesUpdate from "./ServicesUpdate-27ed8120.js";
import StoreSectionUpdate from "./StoreSectionUpdate-b61029f5.js";
import NewsUpdate from "./NewsUpdate-a335a7b3.js";
import ArticlesUpdate from "./ArticlesUpdate-eb2ba0c0.js";
import IndustriesUpdate from "./IndustriesUpdate-bcbb6bbb.js";
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
import "@mui/material";
import "./styles.module-7e19f3c1.js";
import "@mui/material/ListSubheader/index.js";
import "@mui/material/List/index.js";
import "@mui/material/ListItemButton/index.js";
import "@mui/material/ListItemIcon/index.js";
import "@mui/material/ListItemText/index.js";
import "@mui/material/Collapse/index.js";
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
import "./BlockService-e48abac9.js";
import "./CustomSnackbar-a775827f.js";
import "@mui/material/Alert/index.js";
import "zod";
import "react-hook-form";
import "@hookform/resolvers/zod";
import "./BasicTranslation-dfe7cd4c.js";
import "./FileService-769645e4.js";
import "./ValidatedInput-d372d269.js";
import "@mui/material/InputAdornment/index.js";
import "@syncfusion/ej2-react-richtexteditor";
import "./CustomButton-4b9588a9.js";
import "@mui/icons-material/Add.js";
import "@mui/icons-material/ChangeCircleOutlined.js";
import "@mui/icons-material/DeleteOutlineOutlined.js";
import "@mui/icons-material/SmartDisplayOutlined.js";
import "@mui/icons-material/AutoFixNormal.js";
import "@mui/icons-material/Reorder.js";
import "@mui/icons-material/ArrowBackIos.js";
import "./ValidatedSwitch-c309fa1c.js";
import "./DeleteModal-9d9ad51f.js";
import "./ValidatedDatePicker-08c6d786.js";
import "@mui/x-date-pickers/DatePicker/index.js";
const BlockUpdate = ({ category, block }) => {
  const commonService = Container.get(CommonService);
  Object.values(BlockCategories);
  let UpdateComponent;
  switch (commonService.toTitleCase(category)) {
    case BlockCategories.MAIN_SECTION: {
      UpdateComponent = () => /* @__PURE__ */ jsx(MainSectionUpdate, { block, category });
      break;
    }
    case BlockCategories.STORE_SECTION: {
      UpdateComponent = () => /* @__PURE__ */ jsx(StoreSectionUpdate, { block, category });
      break;
    }
    case BlockCategories.ABOUT: {
      UpdateComponent = () => /* @__PURE__ */ jsx(AboutUpdate, { block, category });
      break;
    }
    case BlockCategories.CLIENTS: {
      UpdateComponent = () => /* @__PURE__ */ jsx(ClientsUpdate, { block, category });
      break;
    }
    case BlockCategories.GALLERY: {
      UpdateComponent = () => /* @__PURE__ */ jsx(GalleryUpdate, { block, category });
      break;
    }
    case BlockCategories.MISSION: {
      UpdateComponent = () => /* @__PURE__ */ jsx(MissionUpdate, { block, category });
      break;
    }
    case BlockCategories.SERVICES: {
      UpdateComponent = () => /* @__PURE__ */ jsx(ServicesUpdate, { block, category });
      break;
    }
    case BlockCategories.NEWS: {
      UpdateComponent = () => /* @__PURE__ */ jsx(NewsUpdate, { block, category });
      break;
    }
    case BlockCategories.ARTICLES: {
      UpdateComponent = () => /* @__PURE__ */ jsx(ArticlesUpdate, { block, category });
      break;
    }
    case BlockCategories.INDUSTRIES: {
      UpdateComponent = () => /* @__PURE__ */ jsx(IndustriesUpdate, { block, category });
      break;
    }
    default: {
      UpdateComponent = () => /* @__PURE__ */ jsx(MainSectionUpdate, { block, category });
    }
  }
  const getTitle = () => {
    return commonService.toTitleCase(category);
  };
  return /* @__PURE__ */ jsxs(AdminLayout, { children: [
    /* @__PURE__ */ jsx(Head, { title: "Update " + getTitle() }),
    /* @__PURE__ */ jsx(UpdateComponent, {})
  ] });
};
export {
  BlockUpdate as default
};
