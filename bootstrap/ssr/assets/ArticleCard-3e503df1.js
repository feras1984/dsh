import { jsx, jsxs } from "react/jsx-runtime";
import { Box, Typography } from "@mui/material";
import { s as styles } from "./styles.module-498bd7ba.js";
import { usePage } from "@inertiajs/react";
const ArticleCard = ({ service }) => {
  const lang = usePage().props.lang;
  return /* @__PURE__ */ jsx(Box, { children: /* @__PURE__ */ jsxs(Box, { className: styles.serviceCard, children: [
    /* @__PURE__ */ jsx(Box, { className: "m-[32px]", children: /* @__PURE__ */ jsx(Box, { className: `m-auto p-[16px] ${styles.imgAria}`, children: /* @__PURE__ */ jsx("img", { src: `/file/blocks/${service.images[0].url}`, alt: "" }) }) }),
    /* @__PURE__ */ jsx(Box, { className: "p-[16px]", children: /* @__PURE__ */ jsxs(Box, { className: styles.boxContainer, children: [
      /* @__PURE__ */ jsx(Typography, { variant: "h3", component: "h3", align: "center", sx: { fontWeight: "bold" }, children: service.title }),
      /* @__PURE__ */ jsx(
        Typography,
        {
          variant: "body2",
          component: "p",
          align: lang === "ar" ? "right" : "left",
          noWrap: true,
          className: `px-[16px]`,
          children: service.startDate
        }
      ),
      /* @__PURE__ */ jsx(Box, { className: `mt-[16px] p-[16px] ${styles.enableList}`, dangerouslySetInnerHTML: { __html: service.description } })
    ] }) })
  ] }) });
};
export {
  ArticleCard as default
};
