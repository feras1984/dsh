import { jsxs, jsx } from "react/jsx-runtime";
import { C as CommonService } from "../app.js";
import { Container } from "typedi";
import "reflect-metadata";
import { B as BlockCategories } from "./BlockCategories-4588e507.js";
import { Quote } from "lucide-react";
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
const GeneralDirectorSpeech = ({ blocks }) => {
  const commonService = Container.get(CommonService);
  const speech = blocks.filter((block) => block.category === commonService.toSnakeCase(BlockCategories.GENERAL_DIRECTOR_SPEECH))[0];
  const profile = blocks.filter((block) => block.category === commonService.toSnakeCase(BlockCategories.MANAGER_PROFILE))[0];
  const leadership = blocks.filter((block) => block.category === commonService.toSnakeCase(BlockCategories.LEADERSHIP_PHILOSOPHY));
  const { t } = useTranslation();
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-background", children: [
    /* @__PURE__ */ jsx("section", { className: "py-20 bg-secondary/50", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 text-center", children: [
      /* @__PURE__ */ jsx("h1", { className: "text-5xl font-bold mb-6 text-foreground", children: "Managing Director's Speech" }),
      /* @__PURE__ */ jsx("p", { className: "text-xl text-muted-foreground max-w-3xl mx-auto", children: "A message from our leadership on vision, values, and the future of SDH" })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "py-20", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-3 gap-12 items-start", children: [
      /* @__PURE__ */ jsx("div", { className: "lg:col-span-1", children: /* @__PURE__ */ jsxs("div", { className: "bg-card border border-border rounded-lg p-6 text-center", children: [
        /* @__PURE__ */ jsx(
          "img",
          {
            src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
            alt: "Managing Director",
            className: "w-48 h-48 rounded-full mx-auto mb-6 object-cover"
          }
        ),
        /* @__PURE__ */ jsx("h3", { className: "text-2xl font-bold mb-2 text-foreground", children: profile.title }),
        /* @__PURE__ */ jsx(
          "p",
          {
            className: "text-primary font-medium mb-4",
            dangerouslySetInnerHTML: { __html: profile.brief }
          }
        ),
        /* @__PURE__ */ jsx(
          "p",
          {
            className: "text-muted-foreground",
            dangerouslySetInnerHTML: { __html: profile.description }
          }
        )
      ] }) }),
      /* @__PURE__ */ jsx("div", { className: "lg:col-span-2", children: /* @__PURE__ */ jsxs("div", { className: "bg-card border border-border rounded-lg p-8", children: [
        /* @__PURE__ */ jsx(Quote, { className: "h-12 w-12 text-primary mb-6" }),
        /* @__PURE__ */ jsx("blockquote", { className: "text-lg text-foreground leading-relaxed space-y-4", children: /* @__PURE__ */ jsx("p", { dangerouslySetInnerHTML: { __html: speech.description } }) }),
        /* @__PURE__ */ jsxs("div", { className: "mt-8 pt-6 border-t border-border", children: [
          /* @__PURE__ */ jsx("p", { className: "text-foreground font-semibold", children: profile.title }),
          /* @__PURE__ */ jsx(
            "p",
            {
              className: "text-muted-foreground",
              dangerouslySetInnerHTML: { __html: profile.brief }
            }
          )
        ] })
      ] }) })
    ] }) }) }),
    /* @__PURE__ */ jsx("section", { className: "py-20 bg-secondary/50", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-4xl font-bold mb-12 text-center text-foreground", children: t("leadership-philosophy") }),
      /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-8", children: leadership.map((item, i) => /* @__PURE__ */ jsxs("div", { className: "bg-card border border-border rounded-lg p-6 text-center", children: [
        /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold mb-4 text-foreground", children: item.title }),
        /* @__PURE__ */ jsx(
          "p",
          {
            className: "text-muted-foreground",
            dangerouslySetInnerHTML: { __html: item.description }
          }
        )
      ] })) })
    ] }) }) })
  ] });
};
export {
  GeneralDirectorSpeech as default
};
