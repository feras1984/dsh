import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import React, { useState, useEffect, useMemo } from "react";
import { Typography, Divider, Box, Avatar, IconButton, Menu, MenuItem, ListItemIcon as ListItemIcon$1, ListItemText as ListItemText$1, Stack, createTheme, ThemeProvider } from "@mui/material";
import { s as styles$1 } from "./styles.module-7e19f3c1.js";
import ListSubheader from "@mui/material/ListSubheader/index.js";
import List from "@mui/material/List/index.js";
import ListItemButton from "@mui/material/ListItemButton/index.js";
import ListItemIcon from "@mui/material/ListItemIcon/index.js";
import ListItemText from "@mui/material/ListItemText/index.js";
import Collapse from "@mui/material/Collapse/index.js";
import { B as BlockCategories } from "./BlockCategories-fdc6a0f8.js";
import { Container } from "typedi";
import { C as CommonService, c as useAppSelector, u as useAppDispatch, d as setMode } from "../app.js";
import "reflect-metadata";
import { I as Icon } from "./Icon-2105584c.js";
import { Link, useForm } from "@inertiajs/react";
import { grey, green, lightGreen, pink, red } from "@mui/material/colors/index.js";
import MenuIcon from "@mui/icons-material/Menu.js";
var MenuCategories = /* @__PURE__ */ ((MenuCategories2) => {
  MenuCategories2["MAIN_MENU"] = "Main Menu";
  MenuCategories2["SOCIAL_MENU"] = "Social Menu";
  MenuCategories2["FOOTER_MENU"] = "Footer Menu";
  MenuCategories2["CONTACT_MENU"] = "Contact Menu";
  return MenuCategories2;
})(MenuCategories || {});
const commonService = Container.get(CommonService);
const SidebarList = [
  {
    name: "Home",
    icon: "home",
    link: "/admin",
    children: []
  },
  // {
  //     name: 'Customers',
  //     icon: 'customer',
  //     link: '/admin/user',
  //     children: [],
  // },
  //
  // {
  //     name: 'Categories',
  //     icon: 'category',
  //     link: '/admin/category',
  //     children: [],
  // },
  //
  // {
  //     name: 'Products',
  //     icon: 'product',
  //     link: '/admin/product',
  //     children: [],
  // },
  //
  // {
  //     name: 'Marketing',
  //     icon: 'marketing',
  //     link: '',
  //     children: [
  //         {
  //             name: 'Offers',
  //             icon: 'offer',
  //             link: '/admin/marketing/offer',
  //             children: [],
  //         },
  //         {
  //             name: 'Coupons',
  //             icon: 'coupon',
  //             link: '/admin/marketing/coupon',
  //             children: [],
  //         },
  //         {
  //             name: 'Loyalty Points',
  //             icon: 'loyalty',
  //             link: '/admin/marketing/loyalty',
  //             children: [],
  //         },
  //     ],
  // },
  //
  // {
  //     name: 'Orders',
  //     icon: 'order',
  //     link: '/admin/order',
  //     children: [],
  // },
  {
    name: "Website",
    icon: "website",
    link: "/admin/website",
    children: [
      {
        name: BlockCategories.MAIN_SECTION,
        icon: "main-section",
        link: "/admin/website/get-block/" + commonService.toSnakeCase(BlockCategories.MAIN_SECTION),
        children: []
      },
      // {
      //     name: BlockCategories.STORE_SECTION,
      //     icon: 'main-section',
      //     link: '/admin/website/get-block/' + commonService.toSnakeCase(BlockCategories.STORE_SECTION),
      //     children: [],
      // },
      {
        name: BlockCategories.SERVICES,
        icon: "services",
        link: "/admin/website/get-block/" + commonService.toSnakeCase(BlockCategories.SERVICES),
        children: []
      },
      {
        name: BlockCategories.CLIENTS,
        icon: "clients",
        link: "/admin/website/get-block/" + commonService.toSnakeCase(BlockCategories.CLIENTS),
        children: []
      },
      // {
      //     name: BlockCategories.GALLERY,
      //     icon: 'gallery',
      //     link: '/admin/website/get-block/' + commonService.toSnakeCase(BlockCategories.GALLERY),
      //     children: [],
      // },
      {
        name: BlockCategories.ABOUT,
        icon: "about-us",
        link: "/admin/website/get-block/" + commonService.toSnakeCase(BlockCategories.ABOUT),
        children: [
          {
            name: BlockCategories.ABOUT_SDH,
            icon: "about-us",
            link: "/admin/website/get-block/" + commonService.toSnakeCase(BlockCategories.ABOUT_SDH),
            children: []
          },
          {
            name: BlockCategories.MISSION,
            icon: "about-us",
            link: "/admin/website/get-block/" + commonService.toSnakeCase(BlockCategories.MISSION),
            children: []
          },
          {
            name: BlockCategories.VISION,
            icon: "about-us",
            link: "/admin/website/get-block/" + commonService.toSnakeCase(BlockCategories.VISION),
            children: []
          },
          {
            name: BlockCategories.CORE_VALUES,
            icon: "about-us",
            link: "/admin/website/get-block/" + commonService.toSnakeCase(BlockCategories.CORE_VALUES),
            children: []
          },
          {
            name: BlockCategories.GENERAL_DIRECTOR_SPEECH,
            icon: "about-us",
            link: "/admin/website/get-block/" + commonService.toSnakeCase(BlockCategories.GENERAL_DIRECTOR_SPEECH),
            children: []
          },
          {
            name: BlockCategories.MANAGER_PROFILE,
            icon: "about-us",
            link: "/admin/website/get-block/" + commonService.toSnakeCase(BlockCategories.MANAGER_PROFILE),
            children: []
          },
          {
            name: BlockCategories.LEADERSHIP_PHILOSOPHY,
            icon: "about-us",
            link: "/admin/website/get-block/" + commonService.toSnakeCase(BlockCategories.LEADERSHIP_PHILOSOPHY),
            children: []
          }
        ]
      },
      // {
      //     name: BlockCategories.MISSION,
      //     icon: 'mission',
      //     link: '/admin/website/get-block/' + commonService.toSnakeCase(BlockCategories.MISSION),
      //     children: [],
      // },
      {
        name: BlockCategories.NEWS,
        icon: "mission",
        link: "/admin/website/get-block/" + commonService.toSnakeCase(BlockCategories.NEWS),
        children: []
      },
      {
        name: BlockCategories.ARTICLES,
        icon: "mission",
        link: "/admin/website/get-block/" + commonService.toSnakeCase(BlockCategories.ARTICLES),
        children: []
      },
      {
        name: BlockCategories.INDUSTRIES,
        icon: "mission",
        link: "/admin/website/get-block/" + commonService.toSnakeCase(BlockCategories.INDUSTRIES),
        children: []
      },
      {
        name: BlockCategories.PROJECTS,
        icon: "mission",
        link: "/admin/website/get-block/" + commonService.toSnakeCase(BlockCategories.PROJECTS),
        children: []
      },
      {
        name: MenuCategories.MAIN_MENU,
        icon: "main-menu",
        link: "/admin/website/get-menu/" + commonService.toSnakeCase(MenuCategories.MAIN_MENU),
        children: []
      },
      {
        name: MenuCategories.SOCIAL_MENU,
        icon: "social-menu",
        link: "/admin/website/get-menu/" + commonService.toSnakeCase(MenuCategories.SOCIAL_MENU),
        children: []
      },
      {
        name: MenuCategories.CONTACT_MENU,
        icon: "contact-menu",
        link: "/admin/website/get-menu/" + commonService.toSnakeCase(MenuCategories.CONTACT_MENU),
        children: []
      },
      {
        name: MenuCategories.FOOTER_MENU,
        icon: "footer-menu",
        link: "/admin/website/get-menu/" + commonService.toSnakeCase(MenuCategories.FOOTER_MENU),
        children: []
      }
    ]
  }
  // {
  //     name: 'Settings',
  //     icon: 'settings',
  //     link: '/admin/setting',
  //     children: [
  //         {
  //             name: 'Languages',
  //             icon: 'language',
  //             link: '/admin/setting/language',
  //             children: [],
  //         },
  //     ],
  // },
];
const Sidebar = ({ expand }) => {
  const appName = "D S H International Construction";
  const generateTabs = (tabs, level = 0) => {
    const offset = 2 * level;
    return tabs.map((tab, index) => {
      const [open, setOpen] = useState(false);
      const [expand2, setExpand] = useState("forward");
      const handleClick = () => {
        setOpen(!open);
        setExpand((expand3) => expand3 === "forward" ? "expand-more" : "forward");
      };
      return /* @__PURE__ */ jsx(Box, { children: tab.children.length === 0 ? /* @__PURE__ */ jsx(Link, { href: tab.link, children: /* @__PURE__ */ jsxs(ListItemButton, { sx: { pl: offset, pr: 0 }, onClick: () => {
        tab.children.length > 0 ? handleClick() : null;
      }, children: [
        /* @__PURE__ */ jsx(ListItemIcon, { children: /* @__PURE__ */ jsx(Icon, { name: tab.icon }) }),
        /* @__PURE__ */ jsx(ListItemText, { primary: tab.name }),
        tab.children.length > 0 && /* @__PURE__ */ jsx(Icon, { name: expand2 })
      ] }) }) : /* @__PURE__ */ jsxs(Fragment, { children: [
        /* @__PURE__ */ jsxs(ListItemButton, { sx: { pl: offset, pr: 0 }, onClick: () => {
          tab.children.length > 0 ? handleClick() : null;
        }, children: [
          /* @__PURE__ */ jsx(ListItemIcon, { children: /* @__PURE__ */ jsx(Icon, { name: tab.icon }) }),
          /* @__PURE__ */ jsx(ListItemText, { primary: tab.name }),
          tab.children.length > 0 && /* @__PURE__ */ jsx(Icon, { name: expand2 })
        ] }),
        tab.children.length > 0 && /* @__PURE__ */ jsx(Collapse, { in: open, timeout: "auto", unmountOnExit: true, children: /* @__PURE__ */ jsx(List, { component: "div", disablePadding: true, children: generateTabs(tab.children, level + 1) }) })
      ] }) }, index);
    });
  };
  return /* @__PURE__ */ jsx(
    List,
    {
      sx: { width: "100%", maxWidth: 360, bgcolor: "background.paper" },
      component: "nav",
      "aria-labelledby": "nested-list-subheader",
      subheader: /* @__PURE__ */ jsxs(Fragment, { children: [
        /* @__PURE__ */ jsx(ListSubheader, { component: "div", id: "nested-list-subheader", sx: { height: "44px" }, children: /* @__PURE__ */ jsx(Typography, { variant: "body2", sx: { fontWeight: 700 }, children: appName }) }),
        /* @__PURE__ */ jsx(Divider, {})
      ] }),
      children: generateTabs(SidebarList)
    }
  );
};
const Account = () => {
  const { post } = useForm();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  useAppSelector((state) => {
    return state.user.user;
  });
  const logout = () => {
    post(route("logout"));
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  useEffect(() => {
  }, []);
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsx(Avatar, { sx: { bgcolor: grey[500] }, children: /* @__PURE__ */ jsx(
      IconButton,
      {
        id: "basic-button",
        "aria-controls": open ? "basic-menu" : void 0,
        "aria-haspopup": "true",
        "aria-expanded": open ? "true" : void 0,
        onClick: handleClick,
        sx: { color: "white" },
        children: /* @__PURE__ */ jsx(Box, { className: "h-[40px] w-[40px] rounded-full flex justify-center items-center", children: /* @__PURE__ */ jsx(Icon, { name: "account" }) })
      }
    ) }),
    /* @__PURE__ */ jsxs(
      Menu,
      {
        id: "basic-menu",
        anchorEl,
        open,
        onClose: handleClose,
        MenuListProps: {
          "aria-labelledby": "basic-button"
        },
        anchorOrigin: {
          vertical: "bottom",
          horizontal: "right"
        },
        transformOrigin: {
          vertical: "top",
          horizontal: "right"
        },
        children: [
          /* @__PURE__ */ jsxs(
            MenuItem,
            {
              children: [
                /* @__PURE__ */ jsx(ListItemIcon$1, { children: /* @__PURE__ */ jsx(Icon, { name: "account" }) }),
                /* @__PURE__ */ jsx(Link, { href: route("profile.edit"), children: "Profile" })
              ]
            }
          ),
          /* @__PURE__ */ jsxs(MenuItem, { onClick: logout, children: [
            /* @__PURE__ */ jsx(ListItemIcon$1, { children: /* @__PURE__ */ jsx(Icon, { name: "logout" }) }),
            /* @__PURE__ */ jsx(ListItemText$1, { children: "Logout" })
          ] })
        ]
      }
    )
  ] });
};
const iconDark = "_iconDark_1vq3e_1";
const iconLight = "_iconLight_1vq3e_5";
const styles = {
  iconDark,
  iconLight
};
const Header = ({ handleExpand }) => {
  const dispatch = useAppDispatch();
  const dark = useAppSelector((state) => state.theme.dark);
  const handleTheme = () => {
    dark ? dispatch(setMode(false)) : dispatch(setMode(true));
  };
  const handleIconClass = () => dark ? styles.iconDark : styles.iconLight;
  return /* @__PURE__ */ jsxs(
    Stack,
    {
      direction: "row",
      className: "h-100 items-center p-[10px]",
      children: [
        /* @__PURE__ */ jsx(Box, { className: "grow justify-self-start", children: /* @__PURE__ */ jsx(IconButton, { onClick: () => handleExpand(), children: /* @__PURE__ */ jsx(MenuIcon, { className: handleIconClass() }) }) }),
        /* @__PURE__ */ jsxs(Box, { className: "flex flex-nowrap ", children: [
          dark ? /* @__PURE__ */ jsx(IconButton, { onClick: handleTheme, children: /* @__PURE__ */ jsx(Icon, { name: "light-mode" }) }) : /* @__PURE__ */ jsx(IconButton, { onClick: handleTheme, children: /* @__PURE__ */ jsx(Icon, { name: "dark-mode" }) }),
          /* @__PURE__ */ jsx(IconButton, { children: /* @__PURE__ */ jsx(Icon, { name: "notification-mui" }) }),
          /* @__PURE__ */ jsx(IconButton, { children: /* @__PURE__ */ jsx(Icon, { name: "mail-mui" }) }),
          /* @__PURE__ */ jsx(IconButton, { children: /* @__PURE__ */ jsx(Icon, { name: "language" }) }),
          /* @__PURE__ */ jsx(Box, { className: "ms-[40px]", children: /* @__PURE__ */ jsx(Account, {}) })
        ] })
      ]
    }
  );
};
const AppRoot = ({ children }) => {
  const themeMode = useAppSelector((state) => state.theme.mode);
  const dark2 = useAppSelector((state) => state.theme.dark);
  const theme = useMemo(() => createTheme({
    palette: {
      mode: themeMode,
      ...dark2 ? {
        primary: {
          main: "#3d5afe"
        },
        secondary: {
          main: "#009688"
        },
        info: {
          main: green[900]
        },
        text: {
          primary: "#fafafa"
        },
        action: {
          active: "#fafafa"
        },
        background: {
          default: "#1f2937",
          paper: "#1f2937"
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
          main: "#357a38"
        },
        info: {
          main: green[900]
        },
        text: {
          primary: "#374151"
        },
        action: {
          active: "#374151"
        },
        background: {
          default: "#d4d4d4",
          paper: "#d4d4d4"
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
      // ...(dark) ? {
      //
      // } : {}
    }
  }), [themeMode]);
  return /* @__PURE__ */ jsx(ThemeProvider, { theme, children });
};
const AdminLayout = ({ children }) => {
  const [expand, setExpand] = useState(false);
  const dark = useAppSelector((state) => state.theme.dark);
  const handleExpand = () => {
    setExpand((expand2) => !expand2);
  };
  return /* @__PURE__ */ jsx(AppRoot, { children: /* @__PURE__ */ jsxs(Box, { className: `flex justify-start items-start ${dark ? "dark" : "light"}`, children: [
    /* @__PURE__ */ jsx(Box, { component: "div", className: `fixed h-screen p-[16px] overflow-y-auto
                ${expand ? styles$1.showSidebar : styles$1.hideSidebar}
                `, children: /* @__PURE__ */ jsx(Sidebar, { expand }) }),
    /* @__PURE__ */ jsxs(
      Box,
      {
        component: "div",
        className: ` grow ${expand ? "ms-[256px]" : "ms-0"} ${expand ? styles$1.addMargin : styles$1.removeMargin}`,
        children: [
          /* @__PURE__ */ jsx(Box, { component: "div", className: `h-[60px] ${styles$1.boxShadow} ${dark ? "dark" : "light"}`, children: /* @__PURE__ */ jsx(Header, { handleExpand }) }),
          /* @__PURE__ */ jsx(Box, { component: "div", className: `content p-[16px] bg-scroll`, children })
        ]
      }
    )
  ] }) });
};
export {
  AdminLayout as A,
  MenuCategories as M
};
