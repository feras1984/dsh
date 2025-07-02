import { jsxs, jsx } from "react/jsx-runtime";
import { Head } from "@inertiajs/react";
import { A as AdminLayout } from "./AdminLayout-43a12132.js";
import { C as CommonService } from "../app.js";
import { Container } from "typedi";
import "reflect-metadata";
import { B as BlockCategories } from "./BlockCategories-fdc6a0f8.js";
import MainSectionAdd from "./MainSectionAdd-95c949ee.js";
import AboutAdd from "./AboutAdd-748fea12.js";
import ClientsAdd from "./ClientsAdd-ef897eeb.js";
import GalleryAdd from "./GalleryAdd-42a7e188.js";
import MissionAdd from "./MissionAdd-930b0bdc.js";
import ServicesAdd from "./ServicesAdd-161c444e.js";
import StoreSectionAdd from "./StoreSectionAdd-be1016d3.js";
import NewsAdd from "./NewsAdd-ef3395c6.js";
import IndustriesAdd from "./IndustriesAdd-a502da79.js";
import ArticlesAdd from "./ArticlesAdd-4de192d9.js";
import GeneralDirectorAdd from "./GeneralDirectorAdd-da81f5c8.js";
import ProjectsAdd from "./ProjectsAdd-9279dca9.js";
import ManagerProfileAdd from "./ManagerProfileAdd-bc13270b.js";
import LeadershipPhilosophyAdd from "./LeadershipPhilosophyAdd-e2e74042.js";
import VisionAdd from "./VisionAdd-fb9aa158.js";
import CoreValuesAdd from "./CoreValuesAdd-6d1c43f0.js";
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
import "./BlockService-2a2353d4.js";
import "zod";
import "@hookform/resolvers/zod";
import "react-hook-form";
import "./BasicTranslation-0749eeb7.js";
import "./ValidatedInput-d372d269.js";
import "@mui/material/InputAdornment/index.js";
import "@syncfusion/ej2-react-richtexteditor";
import "./ValidatedCheckbox-55518ad2.js";
import "./ValidatedImage-80931c96.js";
import "./FileService-5953256c.js";
import "./CustomSnackbar-a775827f.js";
import "@mui/material/Alert/index.js";
import "./CustomButton-4b9588a9.js";
import "@mui/icons-material/Add.js";
import "@mui/icons-material/ChangeCircleOutlined.js";
import "@mui/icons-material/DeleteOutlineOutlined.js";
import "@mui/icons-material/SmartDisplayOutlined.js";
import "@mui/icons-material/AutoFixNormal.js";
import "@mui/icons-material/Reorder.js";
import "@mui/icons-material/ArrowBackIos.js";
import "./ValidatedSelect-8a375c57.js";
import "./ValidatedDatePicker-08c6d786.js";
import "@mui/x-date-pickers/DatePicker/index.js";
import "./news-default-e98e3324.js";
import "./ValidatedSwitch-c309fa1c.js";
const BlockAdd = ({ category }) => {
  const commonService = Container.get(CommonService);
  Object.values(BlockCategories);
  let AddComponent;
  switch (commonService.toTitleCase(category)) {
    case BlockCategories.MAIN_SECTION: {
      AddComponent = () => /* @__PURE__ */ jsx(MainSectionAdd, { category });
      break;
    }
    case BlockCategories.STORE_SECTION: {
      AddComponent = () => /* @__PURE__ */ jsx(StoreSectionAdd, { category });
      break;
    }
    case BlockCategories.ABOUT_SDH: {
      AddComponent = () => /* @__PURE__ */ jsx(AboutAdd, { category });
      break;
    }
    case BlockCategories.CLIENTS: {
      AddComponent = () => /* @__PURE__ */ jsx(ClientsAdd, { category });
      break;
    }
    case BlockCategories.GALLERY: {
      AddComponent = () => /* @__PURE__ */ jsx(GalleryAdd, { category });
      break;
    }
    case BlockCategories.MISSION: {
      AddComponent = () => /* @__PURE__ */ jsx(MissionAdd, { category });
      break;
    }
    case BlockCategories.VISION: {
      AddComponent = () => /* @__PURE__ */ jsx(VisionAdd, { category });
      break;
    }
    case BlockCategories.CORE_VALUES: {
      AddComponent = () => /* @__PURE__ */ jsx(CoreValuesAdd, { category });
      break;
    }
    case BlockCategories.SERVICES: {
      AddComponent = () => /* @__PURE__ */ jsx(ServicesAdd, { category });
      break;
    }
    case BlockCategories.NEWS: {
      AddComponent = () => /* @__PURE__ */ jsx(NewsAdd, { category });
      break;
    }
    case BlockCategories.ARTICLES: {
      AddComponent = () => /* @__PURE__ */ jsx(ArticlesAdd, { category });
      break;
    }
    case BlockCategories.INDUSTRIES: {
      AddComponent = () => /* @__PURE__ */ jsx(IndustriesAdd, { category });
      break;
    }
    case BlockCategories.GENERAL_DIRECTOR_SPEECH: {
      AddComponent = () => /* @__PURE__ */ jsx(GeneralDirectorAdd, { category });
      break;
    }
    case BlockCategories.MANAGER_PROFILE: {
      AddComponent = () => /* @__PURE__ */ jsx(ManagerProfileAdd, { category });
      break;
    }
    case BlockCategories.LEADERSHIP_PHILOSOPHY: {
      AddComponent = () => /* @__PURE__ */ jsx(LeadershipPhilosophyAdd, { category });
      break;
    }
    case BlockCategories.PROJECTS: {
      AddComponent = () => /* @__PURE__ */ jsx(ProjectsAdd, { category });
      break;
    }
    default: {
      AddComponent = () => /* @__PURE__ */ jsx(MainSectionAdd, { category });
    }
  }
  const getTitle = () => {
    return commonService.toTitleCase(category);
  };
  return /* @__PURE__ */ jsxs(AdminLayout, { children: [
    /* @__PURE__ */ jsx(Head, { title: "Add " + getTitle() }),
    /* @__PURE__ */ jsx(AddComponent, {})
  ] });
};
export {
  BlockAdd as default
};
