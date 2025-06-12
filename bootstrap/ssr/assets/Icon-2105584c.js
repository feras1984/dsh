import { jsx } from "react/jsx-runtime";
import { FaSnapchatGhost, FaTwitter, FaLinkedinIn, FaInstagram, FaFacebook } from "react-icons/fa/index.esm.js";
import { FaMobileScreen } from "react-icons/fa6/index.esm.js";
import { GrMail } from "react-icons/gr/index.esm.js";
import { AiFillHome, AiFillYoutube } from "react-icons/ai/index.esm.js";
import { HiUserGroup } from "react-icons/hi/index.esm.js";
import { IoIosNotifications } from "react-icons/io/index.esm.js";
import { MdLoyalty } from "react-icons/md/index.esm.js";
import { BiSolidCoupon, BiLogoTiktok } from "react-icons/bi/index.esm.js";
import AccountCircleIcon from "@mui/icons-material/AccountCircle.js";
import { IconContext } from "react-icons";
import InboxIcon from "@mui/icons-material/MoveToInbox.js";
import DraftsIcon from "@mui/icons-material/Drafts.js";
import SendIcon from "@mui/icons-material/Send.js";
import ExpandLess from "@mui/icons-material/ExpandLess.js";
import ExpandMore from "@mui/icons-material/ExpandMore.js";
import StarBorder from "@mui/icons-material/StarBorder.js";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos.js";
import CategoryIcon from "@mui/icons-material/Category.js";
import PersonIcon from "@mui/icons-material/Person.js";
import ListAltIcon from "@mui/icons-material/ListAlt.js";
import SettingsIcon from "@mui/icons-material/Settings.js";
import LanguageIcon from "@mui/icons-material/Language.js";
import EmailIcon from "@mui/icons-material/Email.js";
import DarkModeIcon from "@mui/icons-material/DarkMode.js";
import LightModeIcon from "@mui/icons-material/LightMode.js";
import EditIcon from "@mui/icons-material/Edit.js";
import DeleteRoundedIcon from "@mui/icons-material/DeleteRounded.js";
import WebIcon from "@mui/icons-material/Web.js";
import SlideshowIcon from "@mui/icons-material/Slideshow.js";
import DesignServicesIcon from "@mui/icons-material/DesignServices.js";
import BusinessIcon from "@mui/icons-material/Business.js";
import ListIcon from "@mui/icons-material/List.js";
import LinkIcon from "@mui/icons-material/Link.js";
import ConnectWithoutContactIcon from "@mui/icons-material/ConnectWithoutContact.js";
import ContactsIcon from "@mui/icons-material/Contacts.js";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone.js";
import WhatsAppIcon from "@mui/icons-material/WhatsApp.js";
import FaxIcon from "@mui/icons-material/Fax.js";
import LocalPostOfficeIcon from "@mui/icons-material/LocalPostOffice.js";
import PlayCircleIcon from "@mui/icons-material/PlayCircle.js";
import ZoomInIcon from "@mui/icons-material/ZoomIn.js";
import ZoomOutIcon from "@mui/icons-material/ZoomOut.js";
import ZoomInMapIcon from "@mui/icons-material/ZoomInMap.js";
import ZoomOutMapIcon from "@mui/icons-material/ZoomOutMap.js";
import StopCircleIcon from "@mui/icons-material/StopCircle.js";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft.js";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft.js";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight.js";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight.js";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart.js";
import MenuIcon from "@mui/icons-material/Menu.js";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn.js";
import GppGoodIcon from "@mui/icons-material/GppGood.js";
import LoginIcon from "@mui/icons-material/Login.js";
import HowToRegIcon from "@mui/icons-material/HowToReg.js";
import LogoutIcon from "@mui/icons-material/Logout.js";
import { SpeakerGroup, Info, Collections, LocalOffer, LocalGroceryStore } from "@mui/icons-material";
import NotificationsIcon from "@mui/icons-material/Notifications.js";
import MoreVertIcon from "@mui/icons-material/MoreVert.js";
import CloseIcon from "@mui/icons-material/Close.js";
const facebookColor = "_facebookColor_fhsvx_1";
const instagramColor = "_instagramColor_fhsvx_5";
const twitterColor = "_twitterColor_fhsvx_9";
const linkedinColor = "_linkedinColor_fhsvx_13";
const youtubeColor = "_youtubeColor_fhsvx_17";
const tiktokColor = "_tiktokColor_fhsvx_21";
const styles = {
  facebookColor,
  instagramColor,
  twitterColor,
  linkedinColor,
  youtubeColor,
  tiktokColor
};
const Icon = ({ name, color = "", size = 36, sizeSmall = 24 }) => {
  switch (name.toLowerCase()) {
    case "facebook":
      return /* @__PURE__ */ jsx(IconContext.Provider, { value: { className: styles.facebookColor }, children: /* @__PURE__ */ jsx(FaFacebook, { size: sizeSmall }) });
    case "instagram":
      return /* @__PURE__ */ jsx(IconContext.Provider, { value: { className: styles.instagramColor }, children: /* @__PURE__ */ jsx(FaInstagram, { size: sizeSmall }) });
    case "linkedin":
      return /* @__PURE__ */ jsx(IconContext.Provider, { value: { className: styles.linkedinColor }, children: /* @__PURE__ */ jsx(FaLinkedinIn, { size: sizeSmall }) });
    case "twitter":
      return /* @__PURE__ */ jsx(IconContext.Provider, { value: { className: styles.twitterColor }, children: /* @__PURE__ */ jsx(FaTwitter, { size: sizeSmall }) });
    case "youtube":
      return /* @__PURE__ */ jsx(IconContext.Provider, { value: { className: styles.youtubeColor }, children: /* @__PURE__ */ jsx(AiFillYoutube, { size: sizeSmall }) });
    case "tiktok":
      return /* @__PURE__ */ jsx(IconContext.Provider, { value: { className: styles.tiktokColor }, children: /* @__PURE__ */ jsx(BiLogoTiktok, { size: sizeSmall }) });
    case "snapchat":
      return /* @__PURE__ */ jsx(FaSnapchatGhost, { size: 20 });
    case "whatsapp":
      return /* @__PURE__ */ jsx(WhatsAppIcon, {});
    case "phone":
      return /* @__PURE__ */ jsx(FaMobileScreen, {});
    case "local-phone":
      return /* @__PURE__ */ jsx(LocalPhoneIcon, {});
    case "mail-mui":
      return /* @__PURE__ */ jsx(EmailIcon, {});
    case "fax":
      return /* @__PURE__ */ jsx(FaxIcon, {});
    case "post-office":
      return /* @__PURE__ */ jsx(LocalPostOfficeIcon, {});
    case "mail":
      return /* @__PURE__ */ jsx(GrMail, { size });
    case "home":
      return /* @__PURE__ */ jsx(AiFillHome, { size: sizeSmall });
    case "group":
      return /* @__PURE__ */ jsx(HiUserGroup, { size });
    case "login":
      return (
        // <FaSignInAlt size={sizeSmall}></FaSignInAlt>
        /* @__PURE__ */ jsx(LoginIcon, {})
      );
    case "register":
      return (
        // <SiGnuprivacyguard size={sizeSmall}></SiGnuprivacyguard>
        /* @__PURE__ */ jsx(HowToRegIcon, {})
      );
    case "notification-mui":
      return /* @__PURE__ */ jsx(NotificationsIcon, {});
    case "notifications":
      return /* @__PURE__ */ jsx(IoIosNotifications, { size: sizeSmall });
    case "logout":
      return /* @__PURE__ */ jsx(LogoutIcon, {});
    case "account":
      return /* @__PURE__ */ jsx(AccountCircleIcon, { sx: { fontSize: size } });
    case "inbox":
      return /* @__PURE__ */ jsx(InboxIcon, {});
    case "draft":
      return /* @__PURE__ */ jsx(DraftsIcon, {});
    case "send":
      return /* @__PURE__ */ jsx(SendIcon, {});
    case "expand-less":
      return /* @__PURE__ */ jsx(ExpandLess, {});
    case "expand-more":
      return /* @__PURE__ */ jsx(ExpandMore, { sx: { fontSize: size } });
    case "star":
      return /* @__PURE__ */ jsx(StarBorder, {});
    case "forward":
      return /* @__PURE__ */ jsx(ArrowForwardIosIcon, {});
    case "category":
      return /* @__PURE__ */ jsx(CategoryIcon, {});
    case "customer":
      return /* @__PURE__ */ jsx(PersonIcon, {});
    case "product":
      return /* @__PURE__ */ jsx(GppGoodIcon, {});
    case "order":
      return /* @__PURE__ */ jsx(LocalGroceryStore, {});
    case "settings":
      return /* @__PURE__ */ jsx(SettingsIcon, {});
    case "marketing":
      return /* @__PURE__ */ jsx(ListAltIcon, {});
    case "offer":
      return /* @__PURE__ */ jsx(LocalOffer, {});
    case "coupon":
      return /* @__PURE__ */ jsx(BiSolidCoupon, {});
    case "loyalty":
      return /* @__PURE__ */ jsx(MdLoyalty, {});
    case "language":
      return /* @__PURE__ */ jsx(LanguageIcon, {});
    case "revenue":
      return /* @__PURE__ */ jsx(MonetizationOnIcon, {});
    case "light-mode":
      return /* @__PURE__ */ jsx(LightModeIcon, {});
    case "dark-mode":
      return /* @__PURE__ */ jsx(DarkModeIcon, {});
    case "edit":
      return /* @__PURE__ */ jsx(EditIcon, { color: "secondary" });
    case "delete":
      return /* @__PURE__ */ jsx(DeleteRoundedIcon, { color: "error" });
    case "vertical-dots":
      return /* @__PURE__ */ jsx(MoreVertIcon, {});
    case "website":
      return /* @__PURE__ */ jsx(WebIcon, {});
    case "main-section":
      return /* @__PURE__ */ jsx(SlideshowIcon, {});
    case "services":
      return /* @__PURE__ */ jsx(DesignServicesIcon, {});
    case "clients":
      return /* @__PURE__ */ jsx(BusinessIcon, {});
    case "gallery":
      return /* @__PURE__ */ jsx(Collections, {});
    case "about-us":
      return /* @__PURE__ */ jsx(Info, {});
    case "mission":
      return /* @__PURE__ */ jsx(SpeakerGroup, {});
    case "main-menu":
      return /* @__PURE__ */ jsx(ListIcon, {});
    case "social-menu":
      return /* @__PURE__ */ jsx(ConnectWithoutContactIcon, {});
    case "contact-menu":
      return /* @__PURE__ */ jsx(ContactsIcon, {});
    case "footer-menu":
      return /* @__PURE__ */ jsx(LinkIcon, {});
    case "burger-menu":
      return /* @__PURE__ */ jsx(MenuIcon, {});
    case "close":
      return /* @__PURE__ */ jsx(CloseIcon, {});
    case "play":
      return /* @__PURE__ */ jsx(PlayCircleIcon, {});
    case "stop":
      return /* @__PURE__ */ jsx(StopCircleIcon, {});
    case "zoom-in":
      return /* @__PURE__ */ jsx(ZoomInIcon, {});
    case "zoom-out":
      return /* @__PURE__ */ jsx(ZoomOutIcon, {});
    case "map-in":
      return /* @__PURE__ */ jsx(ZoomInMapIcon, {});
    case "map-out":
      return /* @__PURE__ */ jsx(ZoomOutMapIcon, {});
    case "left":
      return /* @__PURE__ */ jsx(KeyboardArrowLeftIcon, {});
    case "double-left":
      return /* @__PURE__ */ jsx(KeyboardDoubleArrowLeftIcon, {});
    case "right":
      return /* @__PURE__ */ jsx(KeyboardArrowRightIcon, {});
    case "double-right":
      return /* @__PURE__ */ jsx(KeyboardDoubleArrowRightIcon, {});
    case "shopping-cart":
      return /* @__PURE__ */ jsx(ShoppingCartIcon, {});
    default:
      return null;
  }
};
export {
  Icon as I
};
