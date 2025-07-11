import { jsxs, jsx } from "react/jsx-runtime";
import { usePage, Link } from "@inertiajs/react";
import { Box, Typography, Grid } from "@mui/material";
import NewsDetails from "./NewsDetails-e38c0a4b.js";
import { useTranslation } from "react-i18next";
import "react";
import "@gsap/react";
import "@mui/material/styles/index.js";
import "./styles.module-2038aa74.js";
const NewsList = ({ services, category }) => {
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
        children: t("news")
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
            children: /* @__PURE__ */ jsx(Link, { href: `/${lang}/block/details/${category}/${service.id}`, children: /* @__PURE__ */ jsx(NewsDetails, { service }) })
          },
          key
        ))
      }
    )
  ] });
};
export {
  NewsList as default
};
