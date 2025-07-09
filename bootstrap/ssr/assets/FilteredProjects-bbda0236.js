import { jsx, jsxs } from "react/jsx-runtime";
import React from "react";
const FilteredProjects = ({ industries, getIndustry }) => {
  const [selectedCategory, setSelectedCategory] = React.useState("All");
  const sendIndustry = (value) => {
    getIndustry(value);
    setSelectedCategory(value);
  };
  return /* @__PURE__ */ jsx("section", { className: "py-8 bg-secondary/50", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap justify-center gap-4", children: [
    /* @__PURE__ */ jsx(
      "button",
      {
        onClick: () => sendIndustry("All"),
        className: `px-6 py-2 rounded-full font-medium transition-all duration-300 ${selectedCategory === "All" ? "bg-primary text-primary-foreground" : "bg-card border border-border text-foreground hover:bg-primary hover:text-primary-foreground"}`,
        children: "All"
      },
      "All"
    ),
    industries.map((industry) => /* @__PURE__ */ jsx(
      "button",
      {
        onClick: () => sendIndustry(industry.title),
        className: `px-6 py-2 rounded-full font-medium transition-all duration-300 ${selectedCategory === industry.title ? "bg-primary text-primary-foreground" : "bg-card border border-border text-foreground hover:bg-primary hover:text-primary-foreground"}`,
        children: industry.title
      },
      industry.title
    ))
  ] }) }) });
};
export {
  FilteredProjects as default
};
