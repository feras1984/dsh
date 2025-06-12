import { jsxs, jsx } from "react/jsx-runtime";
import { usePage, Link } from "@inertiajs/react";
import { Box, Typography, Grid } from "@mui/material";
import ArticleDetails from "./ArticleDetails-2f3295df.js";
import { useTranslation } from "react-i18next";
import "react";
import "@gsap/react";
import "@mui/material/styles/index.js";
import "./styles.module-498bd7ba.js";
const ArticlesList = ({ services, category }) => {
  const lang = usePage().props.lang;
  const { t } = useTranslation();
  return /* @__PURE__ */ jsxs(Box, { className: "py-[16px]", children: [
    /* @__PURE__ */ jsx(
      Typography,
      {
        variant: "h3",
        component: "h3",
        className: "p-[16px] uppercase",
        sx: { fontWeight: "bold" },
        children: t("articles")
      }
    ),
    /* @__PURE__ */ jsx(
      Grid,
      {
        container: true,
        spacing: 5,
        justifyContent: "center",
        alignItems: "start",
        className: "py-[16px]",
        children: services.map((service, key) => /* @__PURE__ */ jsx(
          Grid,
          {
            item: true,
            columns: 3,
            children: /* @__PURE__ */ jsx(Link, { href: `/${lang}/block/details/${category}/${service.id}`, children: /* @__PURE__ */ jsx(ArticleDetails, { service }) })
          },
          key
        ))
      }
    )
  ] });
};
export {
  ArticlesList as default
};
