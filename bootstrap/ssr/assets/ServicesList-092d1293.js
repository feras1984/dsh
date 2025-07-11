import { jsxs, jsx } from "react/jsx-runtime";
import { Box, Typography, Grid } from "@mui/material";
import ServicesDetails from "./ServicesDetails-9823cc38.js";
import { usePage, Link } from "@inertiajs/react";
import "react";
import "./styles.module-18fc343b.js";
import "@gsap/react";
import "@mui/material/styles/index.js";
const ServicesList = ({ services, category }) => {
  const lang = usePage().props.lang;
  return /* @__PURE__ */ jsxs(Box, { className: "py-[16px]", children: [
    /* @__PURE__ */ jsx(
      Typography,
      {
        variant: "h3",
        component: "h3",
        className: "p-[16px] uppercase",
        sx: { fontWeight: "bold" },
        children: "Services"
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
            children: /* @__PURE__ */ jsx(Link, { href: `/${lang}/block/details/${category}/${service.id}`, children: /* @__PURE__ */ jsx(ServicesDetails, { service }) })
          },
          key
        ))
      }
    )
  ] });
};
export {
  ServicesList as default
};
