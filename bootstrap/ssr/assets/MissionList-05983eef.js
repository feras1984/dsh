import { jsx } from "react/jsx-runtime";
import { Box } from "@mui/material";
import MissionDetails from "./MissionDetails-769e6610.js";
const MissionList = ({ blocks }) => {
  return /* @__PURE__ */ jsx(Box, { children: blocks.map((block, key) => /* @__PURE__ */ jsx(MissionDetails, { block, order: key }, key)) });
};
export {
  MissionList as default
};
