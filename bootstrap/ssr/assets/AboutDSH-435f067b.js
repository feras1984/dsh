import { jsxs, jsx } from "react/jsx-runtime";
import { C as CommonService } from "../app.js";
import { Container } from "typedi";
import "reflect-metadata";
import { B as BlockCategories } from "./BlockCategories-4588e507.js";
import { useTranslation } from "react-i18next";
import "axios";
import "react-dom/client";
import "@inertiajs/react";
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
const AboutDsh = ({ blocks }) => {
  const commonService = Container.get(CommonService);
  const ourStory = blocks.filter((block) => block.category === commonService.toSnakeCase(BlockCategories.ABOUT_DSH))[0];
  const mission = blocks.filter((block) => block.category === commonService.toSnakeCase(BlockCategories.MISSION))[0];
  const vision = blocks.filter((block) => block.category === commonService.toSnakeCase(BlockCategories.VISION))[0];
  const coreValues = blocks.filter((block) => block.category === commonService.toSnakeCase(BlockCategories.CORE_VALUES));
  const { t } = useTranslation();
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-background", children: [
    /* @__PURE__ */ jsx("section", { className: "py-20 bg-primary text-primary-foreground", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 text-center", children: [
      /* @__PURE__ */ jsx("h1", { className: "text-5xl font-bold mb-6", children: t("about-dsh") }),
      /* @__PURE__ */ jsx("p", { className: "text-xl max-w-3xl mx-auto leading-relaxed", children: t("about-hero") })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "py-20", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-12 items-center", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h2", { className: "text-4xl font-bold mb-6 text-foreground", children: ourStory.title }),
        /* @__PURE__ */ jsx(
          "p",
          {
            className: "text-lg text-muted-foreground mb-6 leading-relaxed",
            dangerouslySetInnerHTML: { __html: ourStory.description }
          }
        )
      ] }),
      /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(
        "img",
        {
          src: `/file/blocks/${ourStory.images[0].url}`,
          alt: "SDH Construction Site",
          className: "rounded-lg shadow-2xl w-full h-96 object-cover"
        }
      ) })
    ] }) }) }),
    /* @__PURE__ */ jsx("section", { className: "py-20 bg-secondary/50", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4", children: [
      /* @__PURE__ */ jsxs("div", { className: "text-center mb-12", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-4xl font-bold mb-4 text-foreground", children: t("core-values") }),
        /* @__PURE__ */ jsx("p", { className: "text-xl text-muted-foreground max-w-2xl mx-auto", children: t("core-values-hero") })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8", children: coreValues.map((value, index) => /* @__PURE__ */ jsxs("div", { className: "bg-card border border-border rounded-lg p-6 text-center hover:shadow-lg transition-all duration-300", children: [
        /* @__PURE__ */ jsx("div", { className: "flex justify-center mb-4", children: /* @__PURE__ */ jsx(
          "object",
          {
            data: `/file/blocks/${value.images[0].url}` || "",
            type: "image/svg+xml",
            width: "64px",
            height: "64px",
            children: /* @__PURE__ */ jsx("img", { src: `/file/blocks/${value.images[0].url}` || "", width: "32px", height: "32px", alt: "svg fallback" })
          }
        ) }),
        /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold mb-3 text-foreground", children: value.title }),
        /* @__PURE__ */ jsx(
          "p",
          {
            className: "text-muted-foreground",
            dangerouslySetInnerHTML: { __html: value.description }
          }
        )
      ] }, index)) })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "py-20", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-12", children: [
      /* @__PURE__ */ jsxs("div", { className: "bg-card border border-border rounded-lg p-8", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold mb-6 text-foreground", children: mission.title }),
        /* @__PURE__ */ jsx(
          "p",
          {
            className: "text-lg text-muted-foreground leading-relaxed",
            dangerouslySetInnerHTML: { __html: mission.description }
          }
        )
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "bg-card border border-border rounded-lg p-8", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold mb-6 text-foreground", children: vision.title }),
        /* @__PURE__ */ jsx(
          "p",
          {
            className: "text-lg text-muted-foreground leading-relaxed",
            dangerouslySetInnerHTML: { __html: vision.description }
          }
        )
      ] })
    ] }) }) }),
    /* @__PURE__ */ jsx("section", { className: "py-20 bg-primary text-primary-foreground", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-8 text-center", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("div", { className: "text-4xl font-bold mb-2", children: "50+" }),
        /* @__PURE__ */ jsx("div", { className: "text-primary-foreground/80", children: t("completed-projects") })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("div", { className: "text-4xl font-bold mb-2", children: "23+" }),
        /* @__PURE__ */ jsx("div", { className: "text-primary-foreground/80", children: t("year-of-experience") })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("div", { className: "text-4xl font-bold mb-2", children: "150+" }),
        /* @__PURE__ */ jsx("div", { className: "text-primary-foreground/80", children: t("team-members") })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("div", { className: "text-4xl font-bold mb-2", children: "50+" }),
        /* @__PURE__ */ jsx("div", { className: "text-primary-foreground/80", children: t("happy-clients") })
      ] })
    ] }) }) })
  ] });
};
export {
  AboutDsh as default
};
