import { jsx, jsxs } from "react/jsx-runtime";
import { usePage, Link, Head } from "@inertiajs/react";
import { H as HeaderLayout } from "./HeaderLayout-06dccce2.js";
import React, { useRef } from "react";
import { Box, Container, Typography, Button, Stack } from "@mui/material";
/* empty css                     */import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, A11y, Virtual } from "swiper/modules";
import { useGSAP } from "@gsap/react";
import { S as SectionTitle } from "./SectionTitle-76ecd5f3.js";
import { useTranslation } from "react-i18next";
import { styled } from "@mui/material/styles/index.js";
import { s as styles$5 } from "./styles.module-528aad3a.js";
import { C as Contact } from "./Contact-f9d7e060.js";
import { u as useAppDispatch, s as setSpinner } from "../app.js";
import "react-icons/fa/index.esm.js";
import "react-icons/fa6/index.esm.js";
import "react-icons/gr/index.esm.js";
import "react-country-flag";
import "./FileService-769645e4.js";
import "typedi";
import "@mui/icons-material/Menu.js";
import "@mui/icons-material/ClearOutlined.js";
import "@mui/material/colors/index.js";
import "gsap/CSSRulePlugin.js";
import "@mui/icons-material/WhatsApp.js";
import "./CustomSnackbar-a775827f.js";
import "@mui/material/Alert/index.js";
import "zod";
import "react-hook-form";
import "@hookform/resolvers/zod";
import "reflect-metadata";
import "axios";
import "./ValidatedInput-d372d269.js";
import "@mui/material/InputAdornment/index.js";
import "@mui/icons-material/Send.js";
import "react-google-recaptcha";
import "react-dom/client";
import "react-redux";
import "@reduxjs/toolkit";
import "localstorage-slim";
import "crypto-js";
import "crypto-js/enc-utf8.js";
import "@mui/x-date-pickers";
import "@mui/x-date-pickers/AdapterDateFns/index.js";
import "i18next";
import "@syncfusion/ej2-base";
const swiper$3 = "_swiper_13yh8_1";
const swiperSlide$2 = "_swiperSlide_13yh8_7";
const autoplayProgress = "_autoplayProgress_13yh8_37";
const arTitleContainer$3 = "_arTitleContainer_13yh8_66";
const enTitleContainer$3 = "_enTitleContainer_13yh8_76";
const imgContainer = "_imgContainer_13yh8_86";
const textTitle = "_textTitle_13yh8_94";
const styles$4 = {
  swiper: swiper$3,
  swiperSlide: swiperSlide$2,
  autoplayProgress,
  arTitleContainer: arTitleContainer$3,
  enTitleContainer: enTitleContainer$3,
  imgContainer,
  textTitle
};
const MainSlider = ({ mainSliders }) => {
  const lang = usePage().props.lang;
  const containerRef = useRef(null);
  const animate = (index) => {
  };
  useGSAP(() => {
  }, { scope: containerRef });
  return /* @__PURE__ */ jsx(Box, { className: "relative", children: /* @__PURE__ */ jsx(
    Swiper,
    {
      modules: [Navigation, Pagination, Autoplay],
      className: styles$4.swiper,
      pagination: {
        dynamicBullets: true
      },
      autoplay: {
        delay: 1e4,
        disableOnInteraction: false
      },
      centeredSlides: true,
      onSlideChange: (swiper2) => animate(swiper2.activeIndex),
      children: mainSliders.map((slider, key) => /* @__PURE__ */ jsx(
        Container,
        {
          maxWidth: "xl",
          component: "div",
          sx: { position: "relative" },
          children: /* @__PURE__ */ jsx(SwiperSlide, { className: styles$4.swiperSlide, children: /* @__PURE__ */ jsxs(Box, { className: styles$4.imgContainer, ref: containerRef, children: [
            /* @__PURE__ */ jsx("img", { src: `/file/blocks/${slider.images[0].url}`, alt: slider.title }),
            /* @__PURE__ */ jsx(Box, { className: styles$4.backgroundShadow, children: /* @__PURE__ */ jsx(
              Box,
              {
                component: "div",
                className: `${lang === "ar" ? styles$4.arTitleContainer : styles$4.enTitleContainer} p-[16px]`,
                children: /* @__PURE__ */ jsx(
                  "p",
                  {
                    className: `${styles$4.textTitle} text-title-${key} sm:text-2x md:text-4xl font-bold uppercase`,
                    children: slider.title
                  }
                )
              }
            ) })
          ] }) })
        },
        `slider-${Math.random() * 1e4}-${key}`
      ))
    }
  ) });
};
const effectFade = "";
const ServiceCard = ({ block, index = 0 }) => {
  const lang = usePage().props.lang;
  const { t } = useTranslation();
  const ImageStyle = styled(Box)({
    cursor: "pointer",
    position: "relative",
    width: "245px",
    height: "245px",
    borderRadius: "50%",
    minHeight: "190px",
    overflow: "hidden",
    "&:before": {
      position: "absolute",
      content: '""',
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      borderRadius: "50%",
      backgroundImage: `url(/file/blocks/${block.images[0].url})`,
      backgroundPosition: "center center",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      // filter: 'grayscale(0.9)',
      // transform: 'scale(1)',
      transition: "all 0.3s ease-in-out"
    },
    "&:hover": {
      "&:before": {
        transform: "scale(1.05)"
      }
    }
  });
  return (
    // <Grid
    //     container
    //     spacing={2}
    //     direction={{xs: 'column', md: 'row'}}
    //     justifyContent={{xs: 'flex-start', md: 'flex-start'}}
    //     alignItems={{xs: 'stretch', md: 'stretch'}}
    //
    // >
    //     <Grid
    //         item
    //         md={5}
    //     >
    //         <Box
    //             className="px-[16px]"
    //         >
    //             <ImageStyle />
    //         </Box>
    //     </Grid>
    //     <Grid
    //         item
    //         md={7}
    //     >
    //         <Box
    //             className="p-[16px]"
    //         >
    //             <Box className={`absolute botttom-0 left-0 right-0`}>
    //                 <Typography variant="h5">{block.title}</Typography>
    //             </Box>
    //
    //             {/*<Box className="styled-list" dangerouslySetInnerHTML={{__html: block.description}}></Box>*/}
    //
    //             {/*<Typography variant="body2" ></Typography>*/}
    //         </Box>
    //     </Grid>
    // </Grid>
    /* @__PURE__ */ jsxs(Box, { className: "relative m-0 p-0 w-[245px] my-[24px]", children: [
      /* @__PURE__ */ jsx(ImageStyle, {}),
      /* @__PURE__ */ jsx(Box, { className: "my-[32px]", children: /* @__PURE__ */ jsx(
        Typography,
        {
          variant: "h6",
          align: lang === "ar" ? "right" : "left",
          sx: { fontWeight: "bold", color: "#E02027" },
          noWrap: true,
          children: block.title
        }
      ) }),
      /* @__PURE__ */ jsx(Box, { children: /* @__PURE__ */ jsx(Typography, { className: `${styles$5.clamp}`, dangerouslySetInnerHTML: { __html: block.description } }) }),
      /* @__PURE__ */ jsx(Box, { className: "flex justify-center p-[16px]", children: /* @__PURE__ */ jsx(Link, { href: `/${lang}/block/details/services/${block.id}`, children: /* @__PURE__ */ jsx(Button, { color: "secondary", variant: "contained", children: t("more") }) }) })
    ] })
  );
};
const Services = ({ blocks }) => {
  const { t } = useTranslation();
  useRef(null);
  useRef(null);
  const lang = usePage().props.lang;
  return /* @__PURE__ */ jsxs(Box, { className: "m-[16px]", children: [
    /* @__PURE__ */ jsx(Link, { href: `/${lang}/block/services`, children: /* @__PURE__ */ jsx(SectionTitle, { title: t("our-services") }) }),
    /* @__PURE__ */ jsx(Box, { className: "relative", children: /* @__PURE__ */ jsx(
      Stack,
      {
        direction: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "wrap",
        spacing: 3,
        children: blocks.map((slider, key) => /* @__PURE__ */ jsx(Link, { href: `/${lang}/block/details/services/${slider.id}`, children: /* @__PURE__ */ jsx(ServiceCard, { block: slider, index: key }) }))
      }
    ) })
  ] });
};
const mainContainer = "_mainContainer_1cys2_1";
const newsBanner = "_newsBanner_1cys2_4";
const industriesBg = "_industriesBg_1cys2_11";
const styles$3 = {
  mainContainer,
  newsBanner,
  industriesBg
};
const swiper$2 = "_swiper_12nhn_1";
const swiperSlide$1 = "_swiperSlide_12nhn_7";
const arTitleContainer$2 = "_arTitleContainer_12nhn_11";
const enTitleContainer$2 = "_enTitleContainer_12nhn_21";
const itemHidden$2 = "_itemHidden_12nhn_31";
const titleAria$2 = "_titleAria_12nhn_35";
const clamp$2 = "_clamp_12nhn_42";
const styles$2 = {
  swiper: swiper$2,
  swiperSlide: swiperSlide$1,
  arTitleContainer: arTitleContainer$2,
  enTitleContainer: enTitleContainer$2,
  itemHidden: itemHidden$2,
  titleAria: titleAria$2,
  clamp: clamp$2
};
const ArticleCard = ({ block, index = 0 }) => {
  const lang = usePage().props.lang;
  const { t } = useTranslation();
  const ImageStyle = styled(Box)({
    cursor: "pointer",
    position: "relative",
    width: "325px",
    height: "243px",
    borderRadius: "0px",
    minHeight: "190px",
    overflow: "hidden",
    "&:before": {
      position: "absolute",
      content: '""',
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      borderRadius: "0px",
      backgroundImage: `url(/file/blocks/${block.images[0].url})`,
      backgroundPosition: "center center",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      // filter: 'grayscale(0.9)',
      // transform: 'scale(1)',
      transition: "all 0.3s ease-in-out"
    },
    "&:hover": {
      "&:before": {
        transform: "scale(1.05)"
      }
    }
  });
  return (
    // <Grid
    //     container
    //     spacing={2}
    //     direction={{xs: 'column', md: 'row'}}
    //     justifyContent={{xs: 'flex-start', md: 'flex-start'}}
    //     alignItems={{xs: 'stretch', md: 'stretch'}}
    //
    // >
    //     <Grid
    //         item
    //         md={5}
    //     >
    //         <Box
    //             className="px-[16px]"
    //         >
    //             <ImageStyle />
    //         </Box>
    //     </Grid>
    //     <Grid
    //         item
    //         md={7}
    //     >
    //         <Box
    //             className="p-[16px]"
    //         >
    //             <Box className={`absolute botttom-0 left-0 right-0`}>
    //                 <Typography variant="h5">{block.title}</Typography>
    //             </Box>
    //
    //             {/*<Box className="styled-list" dangerouslySetInnerHTML={{__html: block.description}}></Box>*/}
    //
    //             {/*<Typography variant="body2" ></Typography>*/}
    //         </Box>
    //     </Grid>
    // </Grid>
    /* @__PURE__ */ jsxs(Box, { className: "relative m-0 p-0 w-[325px]", children: [
      /* @__PURE__ */ jsx(ImageStyle, {}),
      /* @__PURE__ */ jsxs(Box, { className: "my-[16px]", children: [
        /* @__PURE__ */ jsx(
          Typography,
          {
            variant: "h6",
            align: lang === "ar" ? "right" : "left",
            sx: { fontWeight: "bold", color: "#E02027" },
            noWrap: true,
            children: block.title
          }
        ),
        /* @__PURE__ */ jsx(
          Typography,
          {
            variant: "body2",
            component: "p",
            align: lang === "ar" ? "right" : "left",
            noWrap: true,
            children: block.startDate
          }
        )
      ] }),
      /* @__PURE__ */ jsx(Box, { children: /* @__PURE__ */ jsx(Typography, { className: `${styles$2.clamp}`, dangerouslySetInnerHTML: { __html: block.description } }) }),
      /* @__PURE__ */ jsx(Box, { className: "flex justify-center p-[16px]", children: /* @__PURE__ */ jsx(Link, { href: `/${lang}/block/details/articles/${block.id}`, children: /* @__PURE__ */ jsx(Button, { color: "secondary", variant: "contained", children: t("more") }) }) })
    ] })
  );
};
const Articles = ({ blocks }) => {
  const { t } = useTranslation();
  useRef(null);
  useRef(null);
  const lang = usePage().props.lang;
  return /* @__PURE__ */ jsxs(Box, { className: "m-[16px]", children: [
    /* @__PURE__ */ jsx(Link, { href: `/${lang}/block/articles`, children: /* @__PURE__ */ jsx(SectionTitle, { title: t("articles") }) }),
    /* @__PURE__ */ jsx(Box, { className: "relative", children: /* @__PURE__ */ jsx(
      Stack,
      {
        direction: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "wrap",
        spacing: 3,
        children: blocks.map((slider, key) => /* @__PURE__ */ jsx(Link, { href: `/${lang}/block/details/articles/${slider.id}`, children: /* @__PURE__ */ jsx(ArticleCard, { block: slider, index: key }) }))
      }
    ) })
  ] });
};
const swiper$1 = "_swiper_12nhn_1";
const swiperSlide = "_swiperSlide_12nhn_7";
const arTitleContainer$1 = "_arTitleContainer_12nhn_11";
const enTitleContainer$1 = "_enTitleContainer_12nhn_21";
const itemHidden$1 = "_itemHidden_12nhn_31";
const titleAria$1 = "_titleAria_12nhn_35";
const clamp$1 = "_clamp_12nhn_42";
const styles$1 = {
  swiper: swiper$1,
  swiperSlide,
  arTitleContainer: arTitleContainer$1,
  enTitleContainer: enTitleContainer$1,
  itemHidden: itemHidden$1,
  titleAria: titleAria$1,
  clamp: clamp$1
};
const IndustryCard = ({ block, index = 0 }) => {
  const lang = usePage().props.lang;
  const { t } = useTranslation();
  const ImageStyle = styled(Box)({
    cursor: "pointer",
    position: "relative",
    width: "128px",
    height: "128px",
    borderRadius: "0px",
    minHeight: "100px",
    overflow: "hidden",
    "&:before": {
      position: "absolute",
      content: '""',
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      borderRadius: "0px",
      backgroundImage: `url(/file/blocks/${block.images[0].url})`,
      backgroundPosition: "center center",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      // filter: 'grayscale(0.9)',
      // transform: 'scale(1)',
      transition: "all 0.3s ease-in-out"
    },
    "&:hover": {
      "&:before": {
        transform: "scale(1.05)"
      }
    }
  });
  return (
    // <Grid
    //     container
    //     spacing={2}
    //     direction={{xs: 'column', md: 'row'}}
    //     justifyContent={{xs: 'flex-start', md: 'flex-start'}}
    //     alignItems={{xs: 'stretch', md: 'stretch'}}
    //
    // >
    //     <Grid
    //         item
    //         md={5}
    //     >
    //         <Box
    //             className="px-[16px]"
    //         >
    //             <ImageStyle />
    //         </Box>
    //     </Grid>
    //     <Grid
    //         item
    //         md={7}
    //     >
    //         <Box
    //             className="p-[16px]"
    //         >
    //             <Box className={`absolute botttom-0 left-0 right-0`}>
    //                 <Typography variant="h5">{block.title}</Typography>
    //             </Box>
    //
    //             {/*<Box className="styled-list" dangerouslySetInnerHTML={{__html: block.description}}></Box>*/}
    //
    //             {/*<Typography variant="body2" ></Typography>*/}
    //         </Box>
    //     </Grid>
    // </Grid>
    /* @__PURE__ */ jsxs(Box, { className: "relative m-0 p-0 w-[325px]", children: [
      /* @__PURE__ */ jsx(ImageStyle, {}),
      /* @__PURE__ */ jsx(Box, { className: "my-[16px]", children: /* @__PURE__ */ jsx(
        Typography,
        {
          variant: "h6",
          align: lang === "ar" ? "right" : "left",
          sx: { fontWeight: "bold", color: "#E02027" },
          noWrap: true,
          children: block.title
        }
      ) }),
      /* @__PURE__ */ jsx(Box, { children: /* @__PURE__ */ jsx(Typography, { className: `${styles$1.clamp}`, dangerouslySetInnerHTML: { __html: block.description } }) }),
      /* @__PURE__ */ jsx(Box, { className: "flex justify-center p-[16px]", children: /* @__PURE__ */ jsx(Link, { href: `/${lang}/block/details/industries/${block.id}`, children: /* @__PURE__ */ jsx(Button, { color: "secondary", variant: "contained", children: t("more") }) }) })
    ] })
  );
};
const Industries = ({ blocks }) => {
  const { t } = useTranslation();
  useRef(null);
  useRef(null);
  const lang = usePage().props.lang;
  return /* @__PURE__ */ jsxs(Box, { className: "m-[16px]", children: [
    /* @__PURE__ */ jsx(Link, { href: `/${lang}/block/industries`, children: /* @__PURE__ */ jsx(SectionTitle, { title: t("industries") }) }),
    /* @__PURE__ */ jsx(Box, { className: "relative", children: /* @__PURE__ */ jsx(
      Stack,
      {
        direction: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "wrap",
        spacing: 3,
        children: blocks.map((slider, key) => /* @__PURE__ */ jsx(Link, { href: `/${lang}/block/details/industries/${slider.id}`, children: /* @__PURE__ */ jsx(IndustryCard, { block: slider, index: key }) }))
      }
    ) })
  ] });
};
const swiper = "_swiper_1h982_1";
const arTitleContainer = "_arTitleContainer_1h982_7";
const enTitleContainer = "_enTitleContainer_1h982_17";
const itemHidden = "_itemHidden_1h982_27";
const titleAria = "_titleAria_1h982_31";
const clamp = "_clamp_1h982_38";
const cardContainer = "_cardContainer_1h982_45";
const bgRed = "_bgRed_1h982_45";
const styles = {
  swiper,
  arTitleContainer,
  enTitleContainer,
  itemHidden,
  titleAria,
  clamp,
  cardContainer,
  bgRed
};
const NewsCard = ({ block, index = 0 }) => {
  const lang = usePage().props.lang;
  useTranslation();
  styled(Box)({
    cursor: "pointer",
    position: "relative",
    width: "325px",
    height: "243px",
    borderRadius: "0px",
    minHeight: "190px",
    overflow: "hidden",
    "&:before": {
      position: "absolute",
      content: '""',
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      borderRadius: "0px",
      backgroundImage: `url(/file/blocks/${block.images[0].url})`,
      backgroundPosition: "center center",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      // filter: 'grayscale(0.9)',
      // transform: 'scale(1)',
      transition: "all 0.3s ease-in-out"
    },
    "&:hover": {
      "&:before": {
        transform: "scale(1.05)"
      }
    }
  });
  return (
    // <Grid
    //     container
    //     spacing={2}
    //     direction={{xs: 'column', md: 'row'}}
    //     justifyContent={{xs: 'flex-start', md: 'flex-start'}}
    //     alignItems={{xs: 'stretch', md: 'stretch'}}
    //
    // >
    //     <Grid
    //         item
    //         md={5}
    //     >
    //         <Box
    //             className="px-[16px]"
    //         >
    //             <ImageStyle />
    //         </Box>
    //     </Grid>
    //     <Grid
    //         item
    //         md={7}
    //     >
    //         <Box
    //             className="p-[16px]"
    //         >
    //             <Box className={`absolute botttom-0 left-0 right-0`}>
    //                 <Typography variant="h5">{block.title}</Typography>
    //             </Box>
    //
    //             {/*<Box className="styled-list" dangerouslySetInnerHTML={{__html: block.description}}></Box>*/}
    //
    //             {/*<Typography variant="body2" ></Typography>*/}
    //         </Box>
    //     </Grid>
    // </Grid>
    /* @__PURE__ */ jsx(Box, { className: "relative m-0 p-0", children: /* @__PURE__ */ jsxs(Box, { className: `${styles.bgRed}`, children: [
      /* @__PURE__ */ jsxs(Box, { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ jsx(
          Typography,
          {
            variant: "h6",
            align: lang === "ar" ? "right" : "left",
            sx: { fontWeight: "bold" },
            noWrap: true,
            children: block.title
          }
        ),
        /* @__PURE__ */ jsx(Typography, { variant: "body2", component: "p", children: block.startDate })
      ] }),
      /* @__PURE__ */ jsx(Typography, { className: `${styles.clamp}`, dangerouslySetInnerHTML: { __html: block.description } })
    ] }) })
  );
};
const News = ({ blocks }) => {
  useTranslation();
  useRef(null);
  useRef(null);
  const lang = usePage().props.lang;
  return /* @__PURE__ */ jsx(Box, { children: /* @__PURE__ */ jsx(Box, { className: "relative", children: /* @__PURE__ */ jsx(
    Swiper,
    {
      modules: [Navigation, Pagination, Autoplay, A11y, Virtual],
      slidesPerView: 1,
      autoplay: true,
      virtual: true,
      className: styles.cardContainer,
      children: blocks.map((slider, key) => /* @__PURE__ */ jsx(
        Container,
        {
          maxWidth: "xl",
          component: "div",
          sx: { position: "relative" },
          children: /* @__PURE__ */ jsx(SwiperSlide, { className: styles.swiperSlide, virtualIndex: key, children: /* @__PURE__ */ jsx(Link, { href: `/${lang}/block/details/news/${slider.id}`, children: /* @__PURE__ */ jsx(NewsCard, { block: slider, index: key }) }) }, key + "-" + slider.title)
        },
        key + "-" + slider.title
      ))
    }
  ) }) });
};
const Home = ({
  mainLinks,
  socialLinks,
  footerLinks,
  contactLinks,
  logo,
  languages,
  mainSliders,
  services,
  clients,
  galleries,
  missions,
  about,
  news,
  articles,
  industries
}) => {
  const dispatch = useAppDispatch();
  const mainSliderRef = React.useRef(null);
  React.useRef(null);
  React.useEffect(() => {
    setTimeout(() => {
      dispatch(setSpinner(false));
    }, 3e3);
  }, [mainLinks]);
  useGSAP(() => {
  }, { scope: mainSliderRef });
  return /* @__PURE__ */ jsx(Box, { children: /* @__PURE__ */ jsxs(
    HeaderLayout,
    {
      mainLinks,
      socialLinks,
      contactLinks,
      footerLinks,
      logo,
      languages,
      children: [
        /* @__PURE__ */ jsx(Head, { title: "Home" }),
        /* @__PURE__ */ jsx(Box, { className: styles$3.mainContainer, children: /* @__PURE__ */ jsxs(Box, { className: "relative", ref: mainSliderRef, children: [
          /* @__PURE__ */ jsx(MainSlider, { mainSliders }),
          /* @__PURE__ */ jsx(Box, { className: `newsBanner ${styles$3.newsBanner}`, children: /* @__PURE__ */ jsx(News, { blocks: news }) })
        ] }) }),
        /* @__PURE__ */ jsx(Box, { className: "relative", children: /* @__PURE__ */ jsx(Articles, { blocks: articles.filter((article, index) => index < 3) }) }),
        /* @__PURE__ */ jsx(Box, { className: `relative ${styles$3.industriesBg}`, children: /* @__PURE__ */ jsx(Box, { className: "py-[32px]", children: /* @__PURE__ */ jsx(Industries, { blocks: industries.filter((industry, index) => index < 3) }) }) }),
        /* @__PURE__ */ jsx(Box, { className: "relative", children: /* @__PURE__ */ jsx(Services, { blocks: services }) }),
        /* @__PURE__ */ jsx(Box, { className: "my-[32px]" }),
        /* @__PURE__ */ jsx(Box, { children: /* @__PURE__ */ jsx(Contact, {}) })
      ]
    }
  ) });
};
export {
  Home as default
};
