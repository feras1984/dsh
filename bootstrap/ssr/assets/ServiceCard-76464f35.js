import { jsx, jsxs } from "react/jsx-runtime";
import { s as styles } from "./styles.module-18fc343b.js";
import { Box, Typography } from "@mui/material";
const ServiceCard = ({ service }) => {
  return /* @__PURE__ */ jsx(Box, { children: /* @__PURE__ */ jsxs(Box, { className: styles.serviceCard, children: [
    /* @__PURE__ */ jsxs(Box, { className: styles.boxContainer, children: [
      /* @__PURE__ */ jsx(Typography, { variant: "h3", component: "h3", align: "center", sx: { fontWeight: "bold" }, children: service.title }),
      /* @__PURE__ */ jsx(Box, { className: `mt-[16px] p-[16px] ${styles.enableList}`, dangerouslySetInnerHTML: { __html: service.description } })
    ] }),
    /* @__PURE__ */ jsx(Box, { className: `m-[32px] p-[16px] ${styles.imgAria}`, children: /* @__PURE__ */ jsx("img", { src: `/file/blocks/${service.images[0].url}`, alt: "" }) })
  ] }) });
};
export {
  ServiceCard as default
};
