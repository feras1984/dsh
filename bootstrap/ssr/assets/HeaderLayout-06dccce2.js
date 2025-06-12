import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { Box, Button, Paper, List, ListItemButton, ListItemText, Divider, ListItem, AppBar, Toolbar, Container, Stack, Typography, styled, IconButton, Drawer, Grid, createTheme, ThemeProvider, CssBaseline } from "@mui/material";
import React, { useState, useEffect, useRef, useMemo } from "react";
import { usePage, Link } from "@inertiajs/react";
import { FaTiktok, FaSnapchatGhost, FaYoutube, FaTwitter, FaLinkedinIn, FaInstagram, FaFacebook } from "react-icons/fa/index.esm.js";
import { FaWhatsapp, FaMobileScreen } from "react-icons/fa6/index.esm.js";
import { GrMail } from "react-icons/gr/index.esm.js";
import ReactCountryFlag from "react-country-flag";
import { c as useAppSelector, u as useAppDispatch, e as setSiteMode } from "../app.js";
import { F as FileService } from "./FileService-769645e4.js";
import MenuIcon from "@mui/icons-material/Menu.js";
import ClearOutlinedIcon from "@mui/icons-material/ClearOutlined.js";
import { green, lightGreen, pink, red } from "@mui/material/colors/index.js";
import { useTranslation } from "react-i18next";
import { useGSAP } from "@gsap/react";
import { CSSRulePlugin } from "gsap/CSSRulePlugin.js";
import WhatsAppIcon from "@mui/icons-material/WhatsApp.js";
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
const styles$5 = {
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
const container = "_container_1vese_1";
const bgImg = "_bgImg_1vese_8";
const overlayImage = "_overlayImage_1vese_34";
const logoImg$1 = "_logoImg_1vese_45";
const styles$4 = {
  container,
  bgImg,
  overlayImage,
  logoImg: logoImg$1
};
const LogoSection = () => {
  return /* @__PURE__ */ jsx(Link, { href: route("home"), children: /* @__PURE__ */ jsx("img", { className: styles$4.logoImg, src: FileService.LOGO, alt: "LOGO" }) });
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
  return /* @__PURE__ */ jsx(AppBar, { component: "nav", className: `${styles$5.navbarBgColor}`, sx: { padding: 0 }, children: /* @__PURE__ */ jsxs(Toolbar, { className: `${styles$5.padding0}`, children: [
    /* @__PURE__ */ jsx(LogoSection, {}),
    /* @__PURE__ */ jsxs(Container, { maxWidth: "xl", component: "nav", className: `${styles$5.padding0}`, sx: { height: 90 }, children: [
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
                    className: `${styles$5.socialLink} text-xs uppercase font-bold mx-2`,
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
                className: `${styles$5.socialLink} text-xs uppercase font-bold mx-2`,
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
            children: mainLinks.map((link, i) => /* @__PURE__ */ jsx(Box, { children: link.children.length <= 0 ? /* @__PURE__ */ jsx(AnchorTag, { link: link.url, linkType: link.type, children: /* @__PURE__ */ jsx(ListItemButton, { className: lang === "ar" ? styles$5.arLinkStyle : styles$5.enLinkStyle, children: /* @__PURE__ */ jsx(ListItemText, { sx: { fontWeight: 600 }, children: /* @__PURE__ */ jsx(Typography, { sx: {
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
const styles$3 = {
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
    /* @__PURE__ */ jsx(AppBar, { component: "nav", className: styles$3.navbarBgColor, children: /* @__PURE__ */ jsxs(Toolbar, { sx: { justifyContent: "space-between" }, children: [
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
                  className: "hover:text-gray-400 text-gray-500 px-3 py-4\n                                            lg:py-2 flex items-center text-xs uppercase font-bold",
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
                  className: "hover:text-gray-400 text-gray-500 px-3 py-4\n                                            lg:py-2 flex items-center text-xs uppercase font-bold",
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
          main: "#e02027"
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
          main: "#e02027"
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
const styles$2 = {
  minHeight,
  marginTop,
  whatsIcon,
  whatsIconUpper
};
const divider = "_divider_1qnak_1";
const clientDivider = "_clientDivider_1qnak_18";
const lineDivider = "_lineDivider_1qnak_35";
const lineDividerReverse = "_lineDividerReverse_1qnak_49";
const styles$1 = {
  divider,
  clientDivider,
  lineDivider,
  lineDividerReverse
};
const LineDivider = () => {
  const containerRef = useRef(null);
  CSSRulePlugin.getRule(`.${styles$1.lineDivider}:after`);
  useGSAP(() => {
  }, {});
  return /* @__PURE__ */ jsx("div", { className: styles$1.lineDivider, ref: containerRef });
};
const logoImg = "_logoImg_frd10_1";
const footerContainer = "_footerContainer_frd10_5";
const bgImage = "_bgImage_frd10_11";
const styles = {
  logoImg,
  footerContainer,
  bgImage
};
const FooterLogo = () => {
  const { t } = useTranslation();
  return /* @__PURE__ */ jsxs(Box, { className: "p-[16px] flex flex-col items-end", sx: { width: "fit-content" }, children: [
    /* @__PURE__ */ jsx(Link, { href: route("home"), children: /* @__PURE__ */ jsx("img", { className: styles.logoImg, src: FileService.LOGO, alt: "LOGO" }) }),
    /* @__PURE__ */ jsxs(Typography, { variant: "body2", children: [
      "© ",
      t("all-rights-reserved"),
      ", ",
      (/* @__PURE__ */ new Date()).getFullYear()
    ] })
  ] });
};
const SocialList = ({ links, displayName = false }) => {
  return /* @__PURE__ */ jsx(
    Stack,
    {
      direction: "row",
      justifyContent: "center",
      alignItems: "end",
      flexWrap: "wrap",
      className: "py-[20px] px-[8px]",
      children: links.map((link, index) => /* @__PURE__ */ jsx(
        "a",
        {
          className: "hover:text-gray-300 text-white text-xs uppercase font-bold mx-4",
          href: link.url,
          target: link.target,
          rel: "noopener",
          children: /* @__PURE__ */ jsxs("div", { className: "flex items-center p-[8px] gap-1", children: [
            /* @__PURE__ */ jsx(SocialIcon, { name: link.image }),
            displayName && /* @__PURE__ */ jsx("div", { dir: "ltr", children: link.url.split(":")[1] })
          ] })
        },
        index
      ))
    }
  );
};
const FooterV1 = ({
  mainLinks,
  socialLinks,
  contactLinks,
  logo,
  languages
}) => {
  const { t } = useTranslation();
  return /* @__PURE__ */ jsx(Box, { className: styles.footerContainer, dir: "ltr", children: /* @__PURE__ */ jsxs(Box, { className: styles.bgImage, children: [
    /* @__PURE__ */ jsx(
      Box,
      {
        className: "p-[16px]",
        children: /* @__PURE__ */ jsx(
          Typography,
          {
            variant: "h3",
            align: "center",
            sx: { fontWeight: "bold", color: "#E02027", fontSize: { xs: "1.5rem", md: "1.75rem" } },
            children: t("asas")
          }
        )
      }
    ),
    /* @__PURE__ */ jsx(LineDivider, {}),
    /* @__PURE__ */ jsx(Box, { className: "m-[32px]" }),
    /* @__PURE__ */ jsx(
      Stack,
      {
        direction: { xs: "column", md: "row" },
        justifyContent: { xs: "center", md: "space-evenly" },
        alignItems: "center",
        spacing: 3,
        flexWrap: "wrap",
        sx: { position: "relative", zIndex: 1 },
        children: mainLinks.map(
          (link, key) => /* @__PURE__ */ jsx(AnchorTag, { link: link.url, linkType: link.type, children: /* @__PURE__ */ jsx(Box, { className: "p-[8px]", children: /* @__PURE__ */ jsx(
            Typography,
            {
              sx: { fontWeight: 600, fontSize: { xs: "0.8rem", md: "1rem" } },
              className: "uppercase",
              variant: "body1",
              component: "h5",
              align: "center",
              children: link.name
            }
          ) }) }, key)
        )
      }
    ),
    /* @__PURE__ */ jsx(Box, { className: "flex", children: /* @__PURE__ */ jsxs(
      Stack,
      {
        direction: { xs: "column-reverse", md: "row" },
        flexWrap: "wrap",
        justifyContent: { xs: "center", md: "space-between" },
        alignItems: { xs: "center", md: "flex-end" },
        sx: { width: "100%", position: "relative", zIndex: 1 },
        children: [
          /* @__PURE__ */ jsx(Box, { children: /* @__PURE__ */ jsx(FooterLogo, {}) }),
          /* @__PURE__ */ jsxs(Box, { className: "flex flex-wrap justify-center", children: [
            /* @__PURE__ */ jsx(SocialList, { links: socialLinks }),
            /* @__PURE__ */ jsx(SocialList, { links: contactLinks, displayName: true })
          ] })
        ]
      }
    ) })
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
    /* @__PURE__ */ jsx("div", { className: `${styles$2.minHeight} ${styles$2.marginTop}`, children }),
    /* @__PURE__ */ jsx("div", { className: styles$2.whatsIcon, children: /* @__PURE__ */ jsxs("div", { className: "flex justify-center align-middle gap-2", children: [
      /* @__PURE__ */ jsx("a", { href: "https://wa.me/971558399642?text=I'm%20interested%20", target: "_blank", children: /* @__PURE__ */ jsx(IconButton, { color: "success", size: "large", sx: { bgcolor: "#fff" }, children: /* @__PURE__ */ jsx(WhatsAppIcon, { sx: { fontSize: "32px" } }) }) }),
      /* @__PURE__ */ jsx("a", { href: "https://wa.me/971543414809?text=I'm%20interested%20", target: "_blank", children: /* @__PURE__ */ jsx(IconButton, { color: "success", size: "large", sx: { bgcolor: "#fff" }, children: /* @__PURE__ */ jsx(WhatsAppIcon, { sx: { fontSize: "32px" } }) }) })
    ] }) }),
    /* @__PURE__ */ jsx(
      FooterV1,
      {
        mainLinks: footerLinks,
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
