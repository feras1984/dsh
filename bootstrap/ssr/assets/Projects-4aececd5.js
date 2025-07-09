import { jsx, jsxs } from "react/jsx-runtime";
import React from "react";
import { Box, Tab } from "@mui/material";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import ExecutedProjects from "./ExecutedProjects-b08ee6d7.js";
import ProjectsUnderConstruction from "./ProjectsUnderConstruction-2e097c31.js";
import { C as CommonService } from "../app.js";
import { Container } from "typedi";
import "reflect-metadata";
import { B as BlockCategories } from "./BlockCategories-455d683a.js";
import { useTranslation } from "react-i18next";
import "./FilteredProjects-bbda0236.js";
import "lucide-react";
import "axios";
import "react-dom/client";
import "@inertiajs/react";
import "react-redux";
import "@reduxjs/toolkit";
import "localstorage-slim";
import "crypto-js";
import "crypto-js/enc-utf8.js";
import "@mui/x-date-pickers";
import "@mui/x-date-pickers/AdapterDateFns/index.js";
import "i18next";
import "@syncfusion/ej2-base";
const Projects = ({ blocks }) => {
  const commonService = Container.get(CommonService);
  const projects = blocks.filter((block) => block.category === commonService.toSnakeCase(BlockCategories.PROJECTS));
  const industries = blocks.filter((block) => block.category === commonService.toSnakeCase(BlockCategories.INDUSTRIES));
  const [value, setValue] = React.useState("1");
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const { t } = useTranslation();
  return /* @__PURE__ */ jsx(Box, { sx: { width: "100%", typography: "body1", padding: "16px" }, children: /* @__PURE__ */ jsx(TabContext, { value, children: /* @__PURE__ */ jsxs(Box, { sx: { borderBottom: 1, borderColor: "divider" }, children: [
    /* @__PURE__ */ jsxs(
      TabList,
      {
        onChange: handleChange,
        "aria-label": "project tabs",
        textColor: "secondary",
        indicatorColor: "secondary",
        children: [
          /* @__PURE__ */ jsx(
            Tab,
            {
              label: t("executed-projects"),
              value: "1",
              wrapped: true,
              className: "tab-width",
              color: "secondary"
            }
          ),
          /* @__PURE__ */ jsx(
            Tab,
            {
              label: t("projects-under-construction"),
              value: "2",
              wrapped: true,
              className: "tab-width",
              color: "secondary"
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ jsx(TabPanel, { value: "1", children: /* @__PURE__ */ jsx(
      ExecutedProjects,
      {
        projects: projects.filter((block) => block.isCompleted),
        industries
      }
    ) }),
    /* @__PURE__ */ jsx(TabPanel, { value: "2", children: /* @__PURE__ */ jsx(
      ProjectsUnderConstruction,
      {
        projects: projects.filter((block) => !block.isCompleted),
        industries
      }
    ) })
  ] }) }) });
};
export {
  Projects as default
};
