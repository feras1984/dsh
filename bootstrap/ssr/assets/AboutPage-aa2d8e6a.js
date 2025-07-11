import { jsx, jsxs } from "react/jsx-runtime";
import { Box, Typography } from "@mui/material";
import { s as styles } from "./styles.module-18fc343b.js";
const AboutPage = ({ about }) => {
  return /* @__PURE__ */ jsx(Box, { children: /* @__PURE__ */ jsxs(Box, { className: styles.serviceCard, children: [
    /* @__PURE__ */ jsxs(Box, { className: styles.boxContainer, children: [
      /* @__PURE__ */ jsx(
        Typography,
        {
          variant: "h3",
          component: "h3",
          align: "center",
          sx: { fontWeight: "bold", bgcolor: "transparent !important" },
          children: about.title
        }
      ),
      /* @__PURE__ */ jsx(Box, { className: "mt-[16px] p-[16px]", dangerouslySetInnerHTML: { __html: about.description } })
    ] }),
    /* @__PURE__ */ jsx(Box, { className: `m-[8px] p-[16px] ${styles.imgAria}`, children: /* @__PURE__ */ jsx("img", { src: `/file/blocks/${about.images[0].url}`, alt: "" }) })
  ] }) });
};
export {
  AboutPage as default
};
