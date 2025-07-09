import { jsxs, jsx } from "react/jsx-runtime";
import { usePage, Link } from "@inertiajs/react";
import { Box, Typography, Grid } from "@mui/material";
import IndustryDetails from "./IndustryDetails-344393f1.js";
import { useTranslation } from "react-i18next";
import "react";
import "@gsap/react";
import "@mui/material/styles/index.js";
import "./styles.module-2d4d1c93.js";
const IndustriesList = ({ services, category }) => {
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
        children: t("industries")
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
            children: /* @__PURE__ */ jsx(Link, { href: `/${lang}/block/details/${category}/${service.id}`, children: /* @__PURE__ */ jsx(IndustryDetails, { service }) })
          },
          key
        ))
      }
    )
  ] });
};
export {
  IndustriesList as default
};
