import { jsxs, jsx } from "react/jsx-runtime";
import { Container } from "typedi";
import { C as CommonService } from "../app.js";
import { M as MenuCategories, A as AdminLayout } from "./AdminLayout-43a12132.js";
import { Head } from "@inertiajs/react";
import MainLinkUpdate from "./MainLinkUpdate-8e4d3a6c.js";
import FooterUpdate from "./FooterUpdate-45e745fa.js";
import SocialLinkUpdate from "./SocialLinkUpdate-396fef7f.js";
import ContactLinkUpdate from "./ContactLinkUpdate-691e77c1.js";
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
import "react";
import "@mui/material";
import "./styles.module-7e19f3c1.js";
import "@mui/material/ListSubheader/index.js";
import "@mui/material/List/index.js";
import "@mui/material/ListItemButton/index.js";
import "@mui/material/ListItemIcon/index.js";
import "@mui/material/ListItemText/index.js";
import "@mui/material/Collapse/index.js";
import "./BlockCategories-fdc6a0f8.js";
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
import "./MenuService-0806ba85.js";
import "./SocialEnum-17c9978d.js";
import "./CustomSnackbar-a775827f.js";
import "@mui/material/Alert/index.js";
import "zod";
import "react-hook-form";
import "@hookform/resolvers/zod";
import "./ValidatedSelect-8a375c57.js";
import "./AddFileButton-86919368.js";
import "./CustomButton-4b9588a9.js";
import "@mui/icons-material/Add.js";
import "@mui/icons-material/ChangeCircleOutlined.js";
import "@mui/icons-material/DeleteOutlineOutlined.js";
import "@mui/icons-material/SmartDisplayOutlined.js";
import "@mui/icons-material/AutoFixNormal.js";
import "@mui/icons-material/Reorder.js";
import "@mui/icons-material/ArrowBackIos.js";
import "./FileService-5953256c.js";
import "./BasicTitleTranslation-896b3103.js";
import "./ValidatedInput-d372d269.js";
import "@mui/material/InputAdornment/index.js";
import "./ValidatedSwitch-c309fa1c.js";
import "./DeleteModal-9d9ad51f.js";
import "./MainMenuTypesEnum-f980ffeb.js";
import "./ValidatedSelectWithIcon-5da14450.js";
import "./SocialMenuEnum-5925d08f.js";
import "./ContactEnum-89ec9065.js";
const MenuUpdate = ({ category, menu, menus }) => {
  const commonService = Container.get(CommonService);
  let UpdateComponent;
  switch (commonService.toTitleCase(category)) {
    case MenuCategories.MAIN_MENU: {
      UpdateComponent = () => /* @__PURE__ */ jsx(MainLinkUpdate, { category, menu, menus });
      break;
    }
    case MenuCategories.SOCIAL_MENU: {
      UpdateComponent = () => /* @__PURE__ */ jsx(SocialLinkUpdate, { category, menu, menus });
      break;
    }
    case MenuCategories.FOOTER_MENU: {
      UpdateComponent = () => /* @__PURE__ */ jsx(FooterUpdate, { category, menu, menus });
      break;
    }
    case MenuCategories.CONTACT_MENU: {
      UpdateComponent = () => /* @__PURE__ */ jsx(ContactLinkUpdate, { category, menus, menu });
      break;
    }
    default: {
      UpdateComponent = () => /* @__PURE__ */ jsx(MainLinkUpdate, { category, menu, menus });
    }
  }
  const getTitle = () => {
    return commonService.toTitleCase(category);
  };
  return /* @__PURE__ */ jsxs(AdminLayout, { children: [
    /* @__PURE__ */ jsx(Head, { title: "Add " + getTitle() }),
    /* @__PURE__ */ jsx(UpdateComponent, {})
  ] });
};
export {
  MenuUpdate as default
};
