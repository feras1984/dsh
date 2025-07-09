import { jsxs, jsx } from "react/jsx-runtime";
import { C as CommonService } from "../app.js";
import { Container } from "typedi";
import "reflect-metadata";
import { B as BlockCategories } from "./BlockCategories-455d683a.js";
import { Star, Award, Users, Building } from "lucide-react";
import { usePage } from "@inertiajs/react";
import { useTranslation } from "react-i18next";
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
import "react";
const Clients = ({ blocks }) => {
  const commonService = Container.get(CommonService);
  const industries = blocks.filter((block) => block.category === commonService.toSnakeCase(BlockCategories.INDUSTRIES));
  const clients = blocks.filter((block) => block.category === commonService.toSnakeCase(BlockCategories.CLIENTS));
  const lang = usePage().props.lang;
  const { t } = useTranslation();
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-background", children: [
    /* @__PURE__ */ jsx("section", { className: "py-20 bg-primary text-primary-foreground", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 text-center", children: [
      /* @__PURE__ */ jsx("h1", { className: "text-5xl font-bold mb-6", children: t("valued-clients") }),
      /* @__PURE__ */ jsx("p", { className: "text-xl max-w-3xl mx-auto", children: t("clients-hero") })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "py-20 bg-secondary/50", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4", children: [
      /* @__PURE__ */ jsxs("div", { className: "text-center mb-12", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-4xl font-bold mb-4 text-foreground", children: t("industries-we-served") }),
        /* @__PURE__ */ jsx("p", { className: "text-xl text-muted-foreground", children: t("industries-hero") })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8", children: industries.map((industry, index) => /* @__PURE__ */ jsxs("div", { className: "bg-card border border-border rounded-lg p-6 text-center hover:shadow-lg transition-all duration-300 group", children: [
        /* @__PURE__ */ jsx(
          "div",
          {
            className: "flex justify-center mb-4 text-primary group-hover:scale-110 transition-transform duration-300",
            children: /* @__PURE__ */ jsx(
              "object",
              {
                data: `/file/blocks/${industry.images[0].url}` || "",
                type: "image/svg+xml",
                width: "64px",
                height: "64px",
                children: /* @__PURE__ */ jsx("img", { src: `/file/blocks/${industry.images[0].url}` || "", width: "32px", height: "32px", alt: "svg fallback" })
              }
            )
          }
        ),
        /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold mb-2 text-foreground", children: industry.title }),
        /* @__PURE__ */ jsxs("p", { className: "text-muted-foreground", children: [
          industry.executedProjects,
          " Projects Completed"
        ] })
      ] }, index)) })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "py-20", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4", children: [
      /* @__PURE__ */ jsxs("div", { className: "text-center mb-12", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-4xl font-bold mb-4 text-foreground", children: t("featured-clients") }),
        /* @__PURE__ */ jsx("p", { className: "text-xl text-muted-foreground", children: t("featured-clients-hero") })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8", children: clients.map((client, index) => /* @__PURE__ */ jsxs("div", { className: "bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-all duration-300", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center mb-4", children: [
          /* @__PURE__ */ jsx(
            "img",
            {
              src: `/file/blocks/${client.images[0].url}`,
              alt: client.title,
              className: "w-12 h-12 rounded-full mr-4 object-cover"
            }
          ),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("h3", { className: "text-lg font-semibold text-foreground", children: client.title }),
            /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground", children: client.industry })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "mb-4", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center mb-2", children: [
            /* @__PURE__ */ jsx(Star, { className: "h-4 w-4 text-yellow-500 mr-1" }),
            /* @__PURE__ */ jsx(Star, { className: "h-4 w-4 text-yellow-500 mr-1" }),
            /* @__PURE__ */ jsx(Star, { className: "h-4 w-4 text-yellow-500 mr-1" }),
            /* @__PURE__ */ jsx(Star, { className: "h-4 w-4 text-yellow-500 mr-1" }),
            /* @__PURE__ */ jsx(Star, { className: "h-4 w-4 text-yellow-500 mr-1" })
          ] }),
          /* @__PURE__ */ jsx(
            "p",
            {
              className: "text-sm text-muted-foreground italic",
              dangerouslySetInnerHTML: { __html: client.description }
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "text-sm text-muted-foreground", children: [
          client.executedProjects,
          " Projects Completed"
        ] })
      ] }, index)) })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "py-20 bg-secondary/50", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4", children: [
      /* @__PURE__ */ jsxs("div", { className: "text-center mb-12", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-4xl font-bold mb-4 text-foreground", children: t("why-clients-choose-us") }),
        /* @__PURE__ */ jsx("p", { className: "text-xl text-muted-foreground", children: t("our-commitment") })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8", children: [
        /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
          /* @__PURE__ */ jsx("div", { className: "bg-primary rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4", children: /* @__PURE__ */ jsx(Award, { className: "h-8 w-8 text-primary-foreground" }) }),
          /* @__PURE__ */ jsx("h3", { className: "text-lg font-semibold mb-2 text-foreground", children: t("quality-assurance") }),
          /* @__PURE__ */ jsx("p", { className: "text-muted-foreground", children: t("quality-assurance-hero") })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
          /* @__PURE__ */ jsx("div", { className: "bg-primary rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4", children: /* @__PURE__ */ jsx(Users, { className: "h-8 w-8 text-primary-foreground" }) }),
          /* @__PURE__ */ jsx("h3", { className: "text-lg font-semibold mb-2 text-foreground", children: t("expert-team") }),
          /* @__PURE__ */ jsx("p", { className: "text-muted-foreground", children: t("expert-team-hero") })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
          /* @__PURE__ */ jsx("div", { className: "bg-primary rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4", children: /* @__PURE__ */ jsx(Building, { className: "h-8 w-8 text-primary-foreground" }) }),
          /* @__PURE__ */ jsx("h3", { className: "text-lg font-semibold mb-2 text-foreground", children: t("innovative-solutions") }),
          /* @__PURE__ */ jsx("p", { className: "text-muted-foreground", children: t("innovative-solutions-hero") })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
          /* @__PURE__ */ jsx("div", { className: "bg-primary rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4", children: /* @__PURE__ */ jsx(Star, { className: "h-8 w-8 text-primary-foreground" }) }),
          /* @__PURE__ */ jsx("h3", { className: "text-lg font-semibold mb-2 text-foreground", children: t("client-focus") }),
          /* @__PURE__ */ jsx("p", { className: "text-muted-foreground", children: t("client-focus-hero") })
        ] })
      ] })
    ] }) }),
    "Call to Action",
    /* @__PURE__ */ jsx("section", { className: "py-20 bg-primary text-primary-foreground", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 text-center", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-4xl font-bold mb-6", children: t("ready-to-join") }),
      /* @__PURE__ */ jsx("p", { className: "text-xl mb-8 max-w-2xl mx-auto", children: t("ready-to-join-hero") }),
      /* @__PURE__ */ jsx(
        "a",
        {
          href: `/${lang}/block/contact-us`,
          className: "inline-block bg-primary-foreground text-primary px-8 py-4 rounded-lg font-semibold hover:bg-primary-foreground/90 transition-colors",
          children: t("start-your-project")
        }
      )
    ] }) })
  ] });
};
export {
  Clients as default
};
