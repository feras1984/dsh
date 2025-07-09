import { jsx } from "react/jsx-runtime";
import { Box } from "@mui/material";
const GalleryCard = ({ gallery }) => {
  console.log("gallery: ", gallery);
  return /* @__PURE__ */ jsx(Box, { children: "Gallery Card" });
};
export {
  GalleryCard as default
};
