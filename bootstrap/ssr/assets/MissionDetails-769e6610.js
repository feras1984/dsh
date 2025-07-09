import { jsxs, jsx } from "react/jsx-runtime";
import { Box, Container, Typography } from "@mui/material";
const imgBorder = "_imgBorder_19vst_1";
const left = "_left_19vst_19";
const right = "_right_19vst_23";
const descriptionAria = "_descriptionAria_19vst_27";
const descLeft = "_descLeft_19vst_45";
const descRight = "_descRight_19vst_56";
const styles = {
  imgBorder,
  left,
  right,
  descriptionAria,
  descLeft,
  descRight
};
const MissionDetails = ({ block, order }) => {
  const image = block.images[0].url;
  console.log("block: ", block);
  return /* @__PURE__ */ jsxs(Box, { className: "m-[16px] relative", children: [
    /* @__PURE__ */ jsx(Box, { className: `m-[32px] p-[16px] ${styles.imgBorder} ${order % 2 === 0 ? styles.left : styles.right}`, children: /* @__PURE__ */ jsx("img", { src: `/file/blocks/${image}`, alt: "" }) }),
    /* @__PURE__ */ jsx(Container, { children: /* @__PURE__ */ jsxs(Box, { className: `${styles.descriptionAria} p-[16px] ${order % 2 === 0 ? styles.descLeft : styles.descRight}`, children: [
      /* @__PURE__ */ jsx(
        Typography,
        {
          variant: "h3",
          component: "h3",
          className: "p-[16px] uppercase",
          sx: { fontWeight: "bold" },
          children: block.title
        }
      ),
      /* @__PURE__ */ jsx(Box, { className: "styled-list", dangerouslySetInnerHTML: { __html: block.description } })
    ] }) })
  ] });
};
export {
  MissionDetails as default
};
