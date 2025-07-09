import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { Box, Button, Paper, List, ListItemButton, ListItemText, Divider, ListItem, AppBar, Toolbar, Container, Stack, Typography, styled, IconButton, Drawer, Grid, createTheme, ThemeProvider, CssBaseline } from "@mui/material";
import React, { useState, useEffect, useRef, useMemo } from "react";
import { usePage, Link } from "@inertiajs/react";
import { FaTiktok, FaSnapchatGhost, FaYoutube, FaTwitter, FaLinkedinIn, FaInstagram, FaFacebook } from "react-icons/fa/index.esm.js";
import { FaWhatsapp, FaMobileScreen } from "react-icons/fa6/index.esm.js";
import { GrMail } from "react-icons/gr/index.esm.js";
import ReactCountryFlag from "react-country-flag";
import { c as useAppSelector, u as useAppDispatch, e as setSiteMode, C as CommonService } from "../app.js";
import { F as FileService } from "./FileService-5953256c.js";
import MenuIcon from "@mui/icons-material/Menu.js";
import ClearOutlinedIcon from "@mui/icons-material/ClearOutlined.js";
import { green, lightGreen, pink, red } from "@mui/material/colors/index.js";
import { useTranslation } from "react-i18next";
import { Container as Container$1 } from "typedi";
import "reflect-metadata";
import { M as MenuService } from "./MenuService-1c3a39b3.js";
const slugify = (str) => str.toLowerCase().trim().replace(/[^\w\s-]/g, "").replace(/[\s_-]+/g, "-").replace(/^-+|-+$/g, "");
const useClickOutsideArea = (ref, clicked) => {
  const [visible, setVisible] = useState(clicked);
  const clickOutsideArea = (event) => {
    if ((ref == null ? void 0 : ref.current) && !ref.current.contains(event.target)) {
      setVisible(false);
    }
  };
  useEffect(() => {
    document.addEventListener("click", clickOutsideArea, true);
    return () => {
      document.removeEventListener("click", clickOutsideArea, true);
    };
  }, []);
  return { visible, setVisible };
};
const NavbarMenu = ({
  menuLink
}) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const ref = useRef();
  const { visible, setVisible } = useClickOutsideArea(ref, false);
  const lang = usePage().props.lang;
  const handleClick = (event) => {
    setVisible(true);
  };
  const open = Boolean(anchorEl);
  const id = open ? slugify(menuLink.name) : void 0;
  return /* @__PURE__ */ jsxs(Box, { ref, sx: { position: "relative" }, children: [
    /* @__PURE__ */ jsx(
      Button,
      {
        sx: { color: "inherit" },
        "aria-describedby": id,
        "aria-controls": open ? id : void 0,
        "aria-haspopup": "true",
        "aria-expanded": open ? "true" : void 0,
        onClick: handleClick,
        children: menuLink.name
      }
    ),
    visible && /* @__PURE__ */ jsx(
      Paper,
      {
        elevation: 3,
        sx: { position: "absolute", top: "100%", left: 0, right: 0, zIndex: 10, width: "250px" },
        className: "text-zinc-700 text-start",
        children: /* @__PURE__ */ jsx(List, { dense: true, children: menuLink.children.map((child, index) => /* @__PURE__ */ jsxs(Link, { href: `/${lang}${child.url}`, children: [
          /* @__PURE__ */ jsx(
            ListItemButton,
            {
              children: /* @__PURE__ */ jsx(
                ListItemText,
                {
                  className: "text-start",
                  primary: child.name
                }
              )
            }
          ),
          /* @__PURE__ */ jsx(Divider, { component: "li", variant: "middle" })
        ] }, index)) })
      }
    )
  ] });
};
const navbarBgColor$1 = "_navbarBgColor_q6e7j_1";
const arLinkStyle = "_arLinkStyle_q6e7j_8";
const enLinkStyle = "_enLinkStyle_q6e7j_33";
const socialLink = "_socialLink_q6e7j_58";
const marginAuto = "_marginAuto_q6e7j_68";
const styles$4 = {
  navbarBgColor: navbarBgColor$1,
  arLinkStyle,
  enLinkStyle,
  socialLink,
  marginAuto
};
const SocialIcon = ({ name }) => {
  switch (name.toLowerCase()) {
    case "facebook":
      return /* @__PURE__ */ jsx(FaFacebook, { size: 20 });
    case "instagram":
      return /* @__PURE__ */ jsx(FaInstagram, { size: 20 });
    case "linkedin":
      return /* @__PURE__ */ jsx(FaLinkedinIn, { size: 20 });
    case "twitter":
      return /* @__PURE__ */ jsx(FaTwitter, { size: 20 });
    case "phone":
      return /* @__PURE__ */ jsx(FaMobileScreen, { size: 20 });
    case "mail":
      return /* @__PURE__ */ jsx(GrMail, { size: 20 });
    case "whatsapp":
      return /* @__PURE__ */ jsx(FaWhatsapp, { size: 20 });
    case "youtube":
      return /* @__PURE__ */ jsx(FaYoutube, { size: 20 });
    case "snapchat":
      return /* @__PURE__ */ jsx(FaSnapchatGhost, { size: 20 });
    case "tiktok":
      return /* @__PURE__ */ jsx(FaTiktok, { size: 20 });
    default:
      return null;
  }
};
const LanguageMenu = ({
  languages,
  displayText = true
}) => {
  const { lang } = usePage().props;
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [selectedIndex, setSelectedIndex] = React.useState(1);
  const open = Boolean(anchorEl);
  useEffect(() => {
    languages.map((languange, index) => {
      if (languange.code === lang)
        setSelectedIndex(index);
    });
  }, [document.cookie]);
  return /* @__PURE__ */ jsx("div", { className: "ms-auto", children: /* @__PURE__ */ jsx(
    List,
    {
      component: "nav",
      "aria-label": "Device settings",
      className: "lg:text-white lg:hover:text-gray-300 text-gray-800",
      sx: { padding: "0" },
      dir: document.dir,
      children: /* @__PURE__ */ jsx("a", { href: `/${languages[(selectedIndex + 1) % 2].code}/home`, className: "flex items-center", children: /* @__PURE__ */ jsxs(
        ListItem,
        {
          button: true,
          id: "lock-button",
          "aria-haspopup": "listbox",
          "aria-controls": "lock-menu",
          "aria-label": "Language-Aria",
          "aria-expanded": open ? "true" : void 0,
          sx: { padding: "0" },
          children: [
            /* @__PURE__ */ jsx(
              ReactCountryFlag,
              {
                svg: true,
                className: "emojiFlag",
                countryCode: languages[(selectedIndex + 1) % 2].flagCode,
                style: {
                  fontSize: "2em",
                  lineHeight: "2em"
                },
                "aria-label": "United States"
              }
            ),
            displayText && /* @__PURE__ */ jsx(
              ListItemText,
              {
                secondary: languages[(selectedIndex + 1) % 2].code.toUpperCase(),
                secondaryTypographyProps: { sx: { textAlign: "start", padding: "8px" } },
                sx: { width: "80px" }
              }
            )
          ]
        }
      ) })
    }
  ) });
};
const container = "_container_1shh8_1";
const bgImg = "_bgImg_1shh8_8";
const overlayImage = "_overlayImage_1shh8_34";
const logoImg$1 = "_logoImg_1shh8_45";
const styles$3 = {
  container,
  bgImg,
  overlayImage,
  logoImg: logoImg$1
};
const LogoSection = () => {
  return /* @__PURE__ */ jsx(Link, { href: route("home"), children: /* @__PURE__ */ jsx("img", { className: styles$3.logoImg, src: FileService.LOGO, alt: "LOGO" }) });
};
const AnchorTag = ({ children, link, linkType }) => {
  const lang = usePage().props.lang;
  return /* @__PURE__ */ jsx(Box, { children: linkType === "File" ? /* @__PURE__ */ jsx("a", { href: "/" + link, download: link, target: "_blank", children }) : /* @__PURE__ */ jsx(Link, { href: `/${lang}${link}`, children }) });
};
const NavBar = ({
  mainLinks,
  socialLinks,
  contactLinks,
  logo,
  languages,
  handleTheme
}) => {
  useAppSelector((state) => state.siteTheme.dark);
  const lang = usePage().props.lang;
  return /* @__PURE__ */ jsx(AppBar, { component: "nav", className: `${styles$4.navbarBgColor}`, sx: { padding: 0 }, children: /* @__PURE__ */ jsxs(Toolbar, { className: `${styles$4.padding0}`, children: [
    /* @__PURE__ */ jsx(LogoSection, {}),
    /* @__PURE__ */ jsxs(Container, { maxWidth: "xl", component: "nav", className: `${styles$4.padding0}`, sx: { height: 90 }, children: [
      /* @__PURE__ */ jsx(Box, { component: "div", children: /* @__PURE__ */ jsxs(
        Stack,
        {
          dir: document.dir,
          direction: "row",
          justifyContent: "space-between",
          alignItems: "center",
          spacing: 2,
          className: "w-full",
          children: [
            /* @__PURE__ */ jsx(
              Stack,
              {
                direction: "row",
                justifyContent: "space-evenly",
                alignItems: "center",
                children: contactLinks.map((link, index) => /* @__PURE__ */ jsx(
                  "a",
                  {
                    className: `${styles$4.socialLink} text-xs uppercase font-bold mx-2`,
                    href: link.url,
                    children: /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1", children: [
                      /* @__PURE__ */ jsx(SocialIcon, { name: link.image }),
                      /* @__PURE__ */ jsx("div", { dir: "ltr", children: link.url.split(":")[1] })
                    ] })
                  },
                  index
                ))
              }
            ),
            /* @__PURE__ */ jsx(LanguageMenu, { languages })
          ]
        }
      ) }),
      /* @__PURE__ */ jsxs(Box, { component: "div", sx: { display: "flex", justifyContent: "space-between" }, children: [
        /* @__PURE__ */ jsx(
          Stack,
          {
            direction: "row",
            justifyContent: "space-evenly",
            alignItems: "center",
            className: "mx-auto",
            children: socialLinks.map((link, index) => /* @__PURE__ */ jsx(
              "a",
              {
                className: `${styles$4.socialLink} text-xs uppercase font-bold mx-2`,
                href: link.url,
                target: link.target,
                rel: "noopener",
                children: /* @__PURE__ */ jsx(SocialIcon, { name: link.image })
              },
              index
            ))
          }
        ),
        /* @__PURE__ */ jsx(
          Stack,
          {
            direction: "row",
            justifyContent: "flex-end",
            alignItems: "center",
            children: mainLinks.map((link, i) => /* @__PURE__ */ jsx(Box, { children: link.children.length <= 0 ? /* @__PURE__ */ jsx(AnchorTag, { link: link.url, linkType: link.type, children: /* @__PURE__ */ jsx(ListItemButton, { className: lang === "ar" ? styles$4.arLinkStyle : styles$4.enLinkStyle, children: /* @__PURE__ */ jsx(ListItemText, { sx: { fontWeight: 600 }, children: /* @__PURE__ */ jsx(Typography, { sx: {
              fontWeight: 600,
              textTransform: "uppercase",
              fontSize: "0.75rem"
            }, children: link.name }) }) }) }) : /* @__PURE__ */ jsx(NavbarMenu, { menuLink: link }) }, i))
          }
        )
      ] })
    ] })
  ] }) });
};
const navbarBgColor = "_navbarBgColor_lv9gl_1";
const bgColor = "_bgColor_lv9gl_5";
const styles$2 = {
  navbarBgColor,
  bgColor
};
const LogoImg = styled("img")({
  height: "90px"
});
const NavDrawer = ({
  mainLinks,
  socialLinks,
  contactLinks,
  logo,
  languages,
  handleTheme
}) => {
  useAppSelector((state) => state.siteTheme.dark);
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const { lang } = usePage().props;
  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };
  return /* @__PURE__ */ jsxs(Box, { sx: { display: "flex" }, children: [
    /* @__PURE__ */ jsx(AppBar, { component: "nav", className: styles$2.navbarBgColor, children: /* @__PURE__ */ jsxs(Toolbar, { sx: { justifyContent: "space-between" }, children: [
      /* @__PURE__ */ jsx(LogoSection, {}),
      /* @__PURE__ */ jsx(
        IconButton,
        {
          "aria-label": "open drawer",
          edge: "end",
          onClick: handleDrawerToggle,
          children: /* @__PURE__ */ jsx(MenuIcon, {})
        }
      )
    ] }) }),
    /* @__PURE__ */ jsx(Box, { component: "nav", dir: document.dir, children: /* @__PURE__ */ jsxs(
      Drawer,
      {
        anchor: lang === "ar" ? "left" : "right",
        dir: document.dir,
        variant: "temporary",
        open: mobileOpen,
        onClose: handleDrawerToggle,
        ModalProps: {
          keepMounted: true
          // Better open performance on mobile.
        },
        children: [
          /* @__PURE__ */ jsxs(Toolbar, { component: "nav", sx: { justifyContent: "space-between" }, children: [
            /* @__PURE__ */ jsx(Link, { href: route("home"), children: /* @__PURE__ */ jsx(LogoImg, { src: FileService.LOGO }) }),
            /* @__PURE__ */ jsx(
              IconButton,
              {
                onClick: handleDrawerToggle,
                children: /* @__PURE__ */ jsx(ClearOutlinedIcon, {})
              }
            )
          ] }),
          /* @__PURE__ */ jsx(Divider, {}),
          /* @__PURE__ */ jsx(Box, { className: "px-[8px]", children: /* @__PURE__ */ jsx(
            Stack,
            {
              direction: "row",
              justifyContent: "flex-end",
              alignItems: "center",
              dir: document.dir,
              children: /* @__PURE__ */ jsx(LanguageMenu, { languages, displayText: false })
            }
          ) }),
          /* @__PURE__ */ jsx(Divider, {}),
          /* @__PURE__ */ jsx(
            Grid,
            {
              container: true,
              spacing: 2,
              direction: "row",
              justifyContent: "start",
              alignItems: "start",
              children: mainLinks.map((link, index) => /* @__PURE__ */ jsxs(Grid, { item: true, xs: 6, children: [
                link.children.length <= 0 && /* @__PURE__ */ jsx(AnchorTag, { link: link.url, linkType: link.type, children: /* @__PURE__ */ jsx(ListItemButton, { children: /* @__PURE__ */ jsx(ListItemText, { sx: { textAlign: "start", fontWeight: 600 }, children: /* @__PURE__ */ jsx(Typography, { sx: {
                  fontWeight: 700,
                  textTransform: "uppercase",
                  fontSize: "0.75rem"
                }, children: link.name }) }) }) }),
                link.children.length > 0 && /* @__PURE__ */ jsxs(Box, { children: [
                  /* @__PURE__ */ jsx(ListItemButton, { children: /* @__PURE__ */ jsx(ListItemText, { sx: { textAlign: "start", fontWeight: 600 }, children: /* @__PURE__ */ jsx(Typography, { sx: {
                    fontWeight: 700,
                    textTransform: "uppercase",
                    fontSize: "0.75rem"
                  }, children: link.name }) }) }),
                  /* @__PURE__ */ jsx(Divider, { variant: "inset" }),
                  /* @__PURE__ */ jsx(List, { dense: true, children: link.children.map((child, key) => /* @__PURE__ */ jsx(ListItem, { children: /* @__PURE__ */ jsx(Link, { href: `/${lang}${child.url}`, children: /* @__PURE__ */ jsx(ListItemButton, { children: /* @__PURE__ */ jsx(
                    ListItemText,
                    {
                      className: "text-start",
                      primary: child.name
                    }
                  ) }) }) }, key)) })
                ] })
              ] }, index))
            }
          ),
          /* @__PURE__ */ jsx(
            Stack,
            {
              direction: "row",
              justifyContent: "center",
              alignItems: "center",
              spacing: 2,
              useFlexGap: true,
              flexWrap: "wrap",
              children: contactLinks.map((link, index) => /* @__PURE__ */ jsx(
                "a",
                {
                  className: "hover:text-gray-400 text-gray-500 px-3 py-4\r\n                                            lg:py-2 flex items-center text-xs uppercase font-bold",
                  href: link.url,
                  children: /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1", children: [
                    /* @__PURE__ */ jsx(SocialIcon, { name: link.image }),
                    /* @__PURE__ */ jsx("div", { dir: "ltr", children: link.url.split(":")[1] })
                  ] })
                },
                index
              ))
            }
          ),
          /* @__PURE__ */ jsx(
            Stack,
            {
              direction: "row",
              justifyContent: "center",
              alignItems: "center",
              spacing: 2,
              useFlexGap: true,
              flexWrap: "wrap",
              children: socialLinks.map((link, index) => /* @__PURE__ */ jsx(
                "a",
                {
                  className: "hover:text-gray-400 text-gray-500 px-3 py-4\r\n                                            lg:py-2 flex items-center text-xs uppercase font-bold",
                  href: link.url,
                  target: link.target,
                  children: /* @__PURE__ */ jsx(SocialIcon, { name: link.image })
                },
                index
              ))
            }
          )
        ]
      }
    ) })
  ] });
};
const Header = ({
  mainLinks,
  socialLinks,
  contactLinks,
  logo,
  languages
}) => {
  const dispatch = useAppDispatch();
  const dark = useAppSelector((state) => state.siteTheme.dark);
  const handleTheme = () => {
    dark ? dispatch(setSiteMode(false)) : dispatch(setSiteMode(true));
  };
  ({
    ...mainLinks,
    socialLinks,
    contactLinks,
    languages,
    logo
  });
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(Box, { className: "displayLg", children: /* @__PURE__ */ jsx(
      NavBar,
      {
        languages,
        mainLinks,
        socialLinks,
        contactLinks,
        logo,
        handleTheme
      }
    ) }),
    /* @__PURE__ */ jsx(Box, { className: "displayMd", children: /* @__PURE__ */ jsx(
      NavDrawer,
      {
        languages,
        mainLinks,
        socialLinks,
        contactLinks,
        logo,
        handleTheme
      }
    ) })
  ] });
};
const trebuchet = "/build/assets/TrebuchetMS-ff1d49fd.ttf";
const SiteAppRoot = ({ children, lang }) => {
  const themeMode = useAppSelector((state) => state.siteTheme.mode);
  const dark2 = useAppSelector((state) => state.siteTheme.dark);
  const theme = useMemo(() => createTheme({
    // direction: (document.dir || 'ltr') as Direction,
    palette: {
      mode: themeMode,
      ...dark2 ? {
        primary: {
          main: "#3d5afe"
        },
        secondary: {
          main: "hsl(222.2, 47.4%, 11.2%)"
        },
        info: {
          main: green[900]
        },
        text: {
          primary: "#ddefee"
        },
        action: {
          active: "#ddefee"
        },
        background: {
          default: "#242424",
          paper: "#242424"
        },
        activate: {
          main: lightGreen["A400"]
        },
        deactivate: {
          main: pink["A400"]
        }
      } : {
        primary: {
          main: "#2a3eb1"
        },
        secondary: {
          main: "hsl(222.2, 47.4%, 11.2%)"
        },
        info: {
          main: green[900]
        },
        text: {
          primary: "#231f20"
        },
        action: {
          active: "#231f20"
        },
        background: {
          default: "#fff",
          paper: "#fff"
        },
        activate: {
          main: green[700]
        },
        deactivate: {
          main: red[900]
        }
      }
    },
    typography: {
      fontFamily: [
        "trebuchet",
        "Sans",
        '"Helvetica Neue"',
        '"Segoe UI"',
        "Roboto",
        "Ubuntu",
        "sans-serif"
      ].join(",")
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: `
        @font-face {
          font-family: 'trebuchet';
          font-style: regular;
          font-display: swap;
          font-weight: 500;

          src: url(${trebuchet}) format('ttf');
          unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
        }
      `
      }
    }
  }), [themeMode]);
  return /* @__PURE__ */ jsxs(ThemeProvider, { theme, children: [
    /* @__PURE__ */ jsx(CssBaseline, {}),
    children
  ] });
};
const minHeight = "_minHeight_t018h_1";
const marginTop = "_marginTop_t018h_5";
const whatsIcon = "_whatsIcon_t018h_14";
const whatsIconUpper = "_whatsIconUpper_t018h_21";
const styles$1 = {
  minHeight,
  marginTop,
  whatsIcon,
  whatsIconUpper
};
const logoImg = "_logoImg_frd10_1";
const footerContainer = "_footerContainer_frd10_5";
const bgImage = "_bgImage_frd10_11";
const styles = {
  logoImg,
  footerContainer,
  bgImage
};
const FooterV2 = ({
  mainLinks,
  footerLinks,
  socialLinks,
  contactLinks,
  logo,
  languages
}) => {
  const { t } = useTranslation();
  const lang = usePage().props.lang;
  Container$1.get(CommonService);
  const menuService = Container$1.get(MenuService);
  return /* @__PURE__ */ jsx("footer", { className: "bg-primary text-primary-foreground", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 py-12", children: [
    /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("div", { className: "px-[16px] pb-[8px]", children: /* @__PURE__ */ jsx(Link, { href: route("home"), children: /* @__PURE__ */ jsx("img", { className: styles.logoImg, src: FileService.LOGO, alt: "LOGO" }) }) }),
        /* @__PURE__ */ jsx("h3", { className: "text-2xl font-bold mb-4", children: t("dsh") }),
        /* @__PURE__ */ jsx("p", { className: "text-primary-foreground/80 mb-4", children: t("building-excellence") })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h4", { className: "text-lg font-semibold mb-4", children: t("main-menu") }),
        /* @__PURE__ */ jsx("ul", { className: "space-y-2", children: mainLinks.map((link, key) => link.children.length > 0 ? link.children.map((child, key2) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(
          Link,
          {
            href: `/${lang}${child.url}`,
            className: "text-primary-foreground/80 hover:text-primary-foreground transition-colors",
            children: child.name
          }
        ) }, key2)) : /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(
          Link,
          {
            href: `/${lang}${link.url}`,
            className: "text-primary-foreground/80 hover:text-primary-foreground transition-colors",
            children: link.name
          }
        ) }, key)) })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h4", { className: "text-lg font-semibold mb-4", children: t("company-info") }),
        /* @__PURE__ */ jsx("ul", { className: "space-y-2", children: footerLinks && footerLinks.map((link, key) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(
          Link,
          {
            href: `/${lang}${link.url}`,
            className: "text-primary-foreground/80 hover:text-primary-foreground transition-colors",
            children: link.name
          }
        ) }, key)) })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h4", { className: "text-lg font-semibold mb-4", children: t("contact-info") }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-2 text-primary-foreground/80", children: [
          /* @__PURE__ */ jsxs("p", { children: [
            /* @__PURE__ */ jsxs("strong", { children: [
              t("email"),
              ":"
            ] }),
            " ",
            menuService.getSplitLink(contactLinks, "mail")
          ] }),
          /* @__PURE__ */ jsxs("p", { children: [
            /* @__PURE__ */ jsxs("strong", { children: [
              t("phone"),
              ":"
            ] }),
            " ",
            menuService.getSplitLink(contactLinks, "mobile")
          ] }),
          /* @__PURE__ */ jsxs("p", { children: [
            /* @__PURE__ */ jsxs("strong", { children: [
              t("address"),
              ":"
            ] }),
            " "
          ] }),
          menuService.getAddress().map((address, key) => /* @__PURE__ */ jsx("p", { children: address }, key))
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx(
      "div",
      {
        className: "border-t border-primary-foreground/20 mt-8 pt-8 text-center",
        dir: lang === "en" ? "ltr" : "rtl",
        children: /* @__PURE__ */ jsxs("p", { className: "text-primary-foreground/80", children: [
          "© ",
          (/* @__PURE__ */ new Date()).getFullYear(),
          " | ",
          t("dsh"),
          ". ",
          t("all-rights-reserved"),
          "."
        ] })
      }
    )
  ] }) });
};
const HeaderLayout = ({
  children,
  mainLinks,
  socialLinks,
  contactLinks,
  footerLinks,
  logo,
  languages
}) => {
  const dark = useAppSelector((state) => state.siteTheme.dark);
  const lang = usePage().props.lang;
  useAppSelector((state) => state.spinner.spinner);
  const { t, i18n: { changeLanguage, language } } = useTranslation();
  React.useEffect(() => {
    changeLanguage(lang);
  }, [lang]);
  return /* @__PURE__ */ jsx(SiteAppRoot, { lang, children: /* @__PURE__ */ jsxs(Box, { className: `${dark ? "site-dark" : "site-light"}`, children: [
    /* @__PURE__ */ jsx(
      Header,
      {
        mainLinks,
        socialLinks,
        contactLinks,
        logo,
        languages
      }
    ),
    /* @__PURE__ */ jsx("div", { className: `${styles$1.minHeight} ${styles$1.marginTop}`, children }),
    /* @__PURE__ */ jsx(
      FooterV2,
      {
        mainLinks,
        footerLinks,
        socialLinks,
        contactLinks,
        logo,
        languages
      }
    )
  ] }) });
};
export {
  HeaderLayout as H
};
