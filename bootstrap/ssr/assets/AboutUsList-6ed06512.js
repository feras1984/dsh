import { jsxs, jsx } from "react/jsx-runtime";
import { Box } from "@mui/material";
import MissionList from "./MissionList-05983eef.js";
import AboutPage from "./AboutPage-aa2d8e6a.js";
import "./MissionDetails-769e6610.js";
import "./styles.module-18fc343b.js";
const AboutUsList = ({ about }) => {
  const missions = about.filter((b, index) => index !== 0);
  return /* @__PURE__ */ jsxs(Box, { children: [
    /* @__PURE__ */ jsx(AboutPage, { about: about[0] }),
    /* @__PURE__ */ jsx(MissionList, { blocks: missions })
  ] });
};
export {
  AboutUsList as default
};
