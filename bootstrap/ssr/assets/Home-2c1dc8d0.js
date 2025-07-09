import { jsx, jsxs } from "react/jsx-runtime";
import { usePage, Head, Link } from "@inertiajs/react";
import { H as HeaderLayout } from "./HeaderLayout-57d179bb.js";
import React, { useRef } from "react";
import { C as CommonService, u as useAppDispatch, s as setSpinner } from "../app.js";
import { gsap } from "gsap";
import HeroSlider from "./HeroSlider-225235d4.js";
import { ArrowRight, Users, Building, Phone, Award } from "lucide-react";
import { ScrollTrigger } from "gsap/ScrollTrigger.js";
import { Container } from "typedi";
import "reflect-metadata";
import { B as BlockCategories } from "./BlockCategories-455d683a.js";
import { M as MenuService } from "./MenuService-1c3a39b3.js";
import { C as ContactFormV2 } from "./ContactFormV2-3f1ee9af.js";
import { useTranslation } from "react-i18next";
import "@mui/material";
import "react-icons/fa/index.esm.js";
import "react-icons/fa6/index.esm.js";
import "react-icons/gr/index.esm.js";
import "react-country-flag";
import "./FileService-5953256c.js";
import "@mui/icons-material/Menu.js";
import "@mui/icons-material/ClearOutlined.js";
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
import "@syncfusion/ej2-base";
import "./useRecaptcha-74637499.js";
import "./CustomSnackbar-a775827f.js";
import "@mui/material/Alert/index.js";
import "zod";
import "react-hook-form";
import "@hookform/resolvers/zod";
import "./ValidatedInput-4e590f68.js";
import "@mui/material/InputAdornment/index.js";
import "@mui/icons-material/Send.js";
import "react-google-recaptcha";
import "./ValidatedSelect-8a375c57.js";
import "./BlockService-2a2353d4.js";
gsap.registerPlugin(ScrollTrigger);
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
  projects,
  galleries,
  missions,
  about,
  news,
  articles,
  industries
}) => {
  const commonService = Container.get(CommonService);
  const menuService = Container.get(MenuService);
  const yearsOfExperience = (/* @__PURE__ */ new Date()).getFullYear() - 2002;
  const aboutUs = about[0];
  const lang = usePage().props.lang;
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const aboutSectionRef = useRef(null);
  const aboutTextRef = useRef(null);
  const aboutImageRef = useRef(null);
  const aboutBadgeRef = useRef(null);
  React.useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: aboutSectionRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      });
      tl.fromTo(
        aboutSectionRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }
      ).fromTo(
        aboutTextRef.current,
        { opacity: 0, x: -50 },
        { opacity: 1, x: 0, duration: 0.8, ease: "power2.out" },
        "-=0.4"
      ).fromTo(
        aboutImageRef.current,
        { opacity: 0, x: 50 },
        { opacity: 1, x: 0, duration: 0.8, ease: "power2.out" },
        "-=0.6"
      ).fromTo(
        aboutBadgeRef.current,
        { opacity: 0, scale: 0 },
        { opacity: 1, scale: 1, duration: 0.6, ease: "back.out(1.7)" },
        "-=0.2"
      );
      gsap.fromTo(
        ".client-card",
        { opacity: 0, y: 30, scale: 0.9 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".clients-section",
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        }
      );
      gsap.fromTo(
        ".project-card",
        { opacity: 0, y: 50, rotationY: 15 },
        {
          opacity: 1,
          y: 0,
          rotationY: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".projects-section",
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        }
      );
      gsap.fromTo(
        ".contact-left",
        { opacity: 0, x: -50 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".contact-section",
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        }
      );
      gsap.fromTo(
        ".contact-right",
        { opacity: 0, x: 50 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".contact-section",
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        }
      );
      gsap.fromTo(
        ".form-field",
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".contact-form",
            start: "top 90%",
            toggleActions: "play none none reverse"
          }
        }
      );
    });
    return () => ctx.revert();
  }, []);
  React.useEffect(() => {
    setTimeout(() => {
      dispatch(setSpinner(false));
    }, 3e3);
  }, [mainLinks]);
  return /* @__PURE__ */ jsx("div", { className: "min-h-screen bg-background", children: /* @__PURE__ */ jsxs(
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
        /* @__PURE__ */ jsx(HeroSlider, { slides: mainSliders }),
        /* @__PURE__ */ jsx(
          "section",
          {
            ref: aboutSectionRef,
            className: "py-20 bg-secondary/50",
            children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-12 items-center", children: [
              /* @__PURE__ */ jsxs("div", { ref: aboutTextRef, children: [
                /* @__PURE__ */ jsx("h2", { className: "text-4xl font-bold mb-6 text-foreground", children: aboutUs.title }),
                /* @__PURE__ */ jsx(
                  "p",
                  {
                    className: "text-lg text-muted-foreground mb-6 leading-relaxed",
                    dangerouslySetInnerHTML: { __html: aboutUs.description }
                  }
                ),
                /* @__PURE__ */ jsxs(
                  Link,
                  {
                    href: `/${lang}/block/${commonService.toSnakeCase(aboutUs.category)}`,
                    className: "inline-flex items-center bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:bg-primary/90 transition-all duration-300 font-semibold hover:scale-105",
                    children: [
                      t("learn-more-about-us"),
                      /* @__PURE__ */ jsx(ArrowRight, { className: "ml-2 h-5 w-5" })
                    ]
                  }
                )
              ] }),
              /* @__PURE__ */ jsxs("div", { ref: aboutImageRef, className: "relative", children: [
                /* @__PURE__ */ jsx(
                  "img",
                  {
                    src: `/file/blocks/${aboutUs.images[0].url}`,
                    alt: "D S H Team",
                    className: "rounded-lg shadow-2xl w-full h-96 object-cover transition-transform duration-300 hover:scale-105"
                  }
                ),
                /* @__PURE__ */ jsxs(
                  "div",
                  {
                    ref: aboutBadgeRef,
                    className: "absolute -bottom-6 -left-6 bg-primary text-primary-foreground p-6 rounded-lg shadow-xl",
                    children: [
                      /* @__PURE__ */ jsxs("div", { className: "text-3xl font-bold", children: [
                        yearsOfExperience,
                        "+"
                      ] }),
                      /* @__PURE__ */ jsx("div", { className: "text-sm", children: t("years-of-excellence") })
                    ]
                  }
                )
              ] })
            ] }) })
          }
        ),
        /* @__PURE__ */ jsx("section", { className: "py-20 bg-background clients-section", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4", children: [
          /* @__PURE__ */ jsxs("div", { className: "text-center mb-12", children: [
            /* @__PURE__ */ jsx("h2", { className: "text-4xl font-bold mb-4 text-foreground", children: t("our-valued-clients") }),
            /* @__PURE__ */ jsx("p", { className: "text-xl text-muted-foreground max-w-2xl mx-auto", children: t("client-home") })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8", children: clients.filter((client) => client.category === commonService.toSnakeCase(BlockCategories.CLIENTS)).map((client, index) => /* @__PURE__ */ jsxs(
            "div",
            {
              className: "text-center group client-card",
              children: [
                /* @__PURE__ */ jsx("div", { className: "bg-card border border-border rounded-lg p-6 h-24 flex items-center justify-center hover:shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:-translate-y-2", children: /* @__PURE__ */ jsx(Users, { className: "h-8 w-8 text-primary mb-2" }) }),
                /* @__PURE__ */ jsx("p", { className: "mt-3 text-sm font-medium text-foreground", children: client.title })
              ]
            },
            index
          )) }),
          /* @__PURE__ */ jsx("div", { className: "text-center mt-12", children: /* @__PURE__ */ jsxs(
            Link,
            {
              className: "inline-flex items-center bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:bg-primary/90 transition-all duration-300 font-semibold hover:scale-105",
              href: `/${lang}/block/${commonService.toSnakeCase(clients[0].category)}`,
              children: [
                t("clients-more"),
                /* @__PURE__ */ jsx(ArrowRight, { className: "ml-2 h-5 w-5" })
              ]
            }
          ) })
        ] }) }),
        /* @__PURE__ */ jsx("section", { className: "py-20 bg-secondary/50 projects-section", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4", children: [
          /* @__PURE__ */ jsxs("div", { className: "text-center mb-12", children: [
            /* @__PURE__ */ jsx("h2", { className: "text-4xl font-bold mb-4 text-foreground", children: t("featured-projects") }),
            /* @__PURE__ */ jsx("p", { className: "text-xl text-muted-foreground max-w-2xl mx-auto", children: t("projects-home") })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8", children: projects.filter((project) => project.isCompleted).sort(() => 0.5 - Math.random()).slice(0, 3).map((project, index) => /* @__PURE__ */ jsxs(
            "div",
            {
              className: "bg-card border border-border rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group project-card hover:-translate-y-2",
              children: [
                /* @__PURE__ */ jsxs("div", { className: "relative overflow-hidden", children: [
                  /* @__PURE__ */ jsx(
                    "img",
                    {
                      src: `/file/blocks/${project.images[0].url}`,
                      alt: project.title,
                      className: "w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                    }
                  ),
                  /* @__PURE__ */ jsx("div", { className: "absolute top-4 right-4", children: /* @__PURE__ */ jsx("span", { className: `px-3 py-1 rounded-full text-xs font-semibold transition-all duration-300 ${project.status === "Completed" ? "bg-green-100 text-green-800" : "bg-blue-100 text-blue-800"}`, children: project.status }) })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "p-6", children: [
                  /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold mb-3 text-foreground", children: project.title }),
                  /* @__PURE__ */ jsx(
                    "p",
                    {
                      className: "text-muted-foreground mb-4",
                      dangerouslySetInnerHTML: { __html: project.description }
                    }
                  ),
                  /* @__PURE__ */ jsxs("div", { className: "flex items-center text-primary font-medium hover:text-primary/80 transition-colors", children: [
                    /* @__PURE__ */ jsx(Building, { className: "h-4 w-4 mr-2" }),
                    "View Details"
                  ] })
                ] })
              ]
            },
            index
          )) }),
          /* @__PURE__ */ jsx("div", { className: "text-center mt-12", children: /* @__PURE__ */ jsxs(
            Link,
            {
              href: `/${lang}/block/${commonService.toSnakeCase(projects[0].category)}`,
              className: "inline-flex items-center bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:bg-primary/90 transition-all duration-300 font-semibold mr-4 hover:scale-105",
              children: [
                t("view-projects"),
                /* @__PURE__ */ jsx(ArrowRight, { className: "ml-2 h-5 w-5" })
              ]
            }
          ) })
        ] }) }),
        /* @__PURE__ */ jsx("section", { className: "py-20 bg-background contact-section", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-12 items-center", children: [
          /* @__PURE__ */ jsxs("div", { className: "contact-left", children: [
            /* @__PURE__ */ jsx("h2", { className: "text-4xl font-bold mb-6 text-foreground", children: t("get-in-touch") }),
            /* @__PURE__ */ jsx("p", { className: "text-lg text-muted-foreground mb-8 leading-relaxed", children: t("contact-home") }),
            /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex items-center hover:text-primary transition-colors duration-300", children: [
                /* @__PURE__ */ jsx(Phone, { className: "h-5 w-5 text-primary mr-3" }),
                /* @__PURE__ */ jsx("span", { className: "text-foreground", children: menuService.getSplitLink(contactLinks, "mobile") })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex items-center hover:text-primary transition-colors duration-300", children: [
                /* @__PURE__ */ jsx(Award, { className: "h-5 w-5 text-primary mr-3" }),
                /* @__PURE__ */ jsx("span", { className: "text-foreground", children: menuService.getSplitLink(contactLinks, "mail") })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsx(ContactFormV2, { industries })
        ] }) }) })
      ]
    }
  ) });
};
export {
  Home as default
};
