import { jsx, jsxs } from "react/jsx-runtime";
import { Box, Typography } from "@mui/material";
import { s as styles } from "./styles.module-2d4d1c93.js";
const IndustryCard = ({ service }) => {
  return /* @__PURE__ */ jsx(Box, { className: "p-[32px]", children: /* @__PURE__ */ jsx(Box, { className: styles.serviceCard, children: /* @__PURE__ */ jsxs(Box, { className: styles.boxContainer, children: [
    /* @__PURE__ */ jsx(Typography, { variant: "h3", component: "h3", align: "center", sx: { fontWeight: "bold" }, children: service.title }),
    /* @__PURE__ */ jsx(Box, { className: `mt-[16px] p-[16px] ${styles.enableList}`, dangerouslySetInnerHTML: { __html: service.description } })
  ] }) }) });
};
export {
  IndustryCard as default
};
