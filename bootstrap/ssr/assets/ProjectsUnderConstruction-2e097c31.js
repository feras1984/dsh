import { jsxs, jsx } from "react/jsx-runtime";
import React from "react";
import FilteredProjects from "./FilteredProjects-bbda0236.js";
import { MapPin, Calendar, DollarSign } from "lucide-react";
import { useTranslation } from "react-i18next";
const ProjectsUnderConstruction = ({ projects, industries }) => {
  const [filteredProjectsItems, setFilteredProjectsItems] = React.useState(projects);
  const getIndustry = (title) => {
    title === "All" ? setFilteredProjectsItems(projects) : setFilteredProjectsItems(projects.filter((project) => project.industry === title));
  };
  const { t } = useTranslation();
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-background", children: [
    /* @__PURE__ */ jsx("section", { className: "py-20 bg-primary text-primary-foreground", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 text-center", children: [
      /* @__PURE__ */ jsx("h1", { className: "text-5xl font-bold mb-6", children: t("projects-under-construction") }),
      /* @__PURE__ */ jsx("p", { className: "text-xl max-w-3xl mx-auto", children: t("project-under-construction-hero") })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "py-20", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4", children: [
      /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-8 mb-16", children: [
        /* @__PURE__ */ jsxs("div", { className: "bg-card border border-border rounded-lg p-6 text-center", children: [
          /* @__PURE__ */ jsx("div", { className: "text-3xl font-bold text-primary mb-2", children: "15" }),
          /* @__PURE__ */ jsx("div", { className: "text-muted-foreground", children: "Active Projects" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "bg-card border border-border rounded-lg p-6 text-center", children: [
          /* @__PURE__ */ jsx("div", { className: "text-3xl font-bold text-primary mb-2", children: "$450M" }),
          /* @__PURE__ */ jsx("div", { className: "text-muted-foreground", children: "Total Value" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "bg-card border border-border rounded-lg p-6 text-center", children: [
          /* @__PURE__ */ jsx("div", { className: "text-3xl font-bold text-primary mb-2", children: "2,500" }),
          /* @__PURE__ */ jsx("div", { className: "text-muted-foreground", children: "Jobs Created" })
        ] })
      ] }),
      /* @__PURE__ */ jsx(FilteredProjects, { industries, getIndustry }),
      /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-8", children: filteredProjectsItems.map((project, index) => /* @__PURE__ */ jsxs("div", { className: "bg-card border border-border rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300", children: [
        /* @__PURE__ */ jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ jsx(
            "img",
            {
              src: `/file/blocks/${project.images[0].url}`,
              alt: project.title,
              className: "w-full h-64 object-cover"
            }
          ),
          /* @__PURE__ */ jsx("div", { className: "absolute top-4 left-4", children: /* @__PURE__ */ jsx("span", { className: "bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-semibold", children: project.industry }) }),
          /* @__PURE__ */ jsx("div", { className: "absolute top-4 right-4", children: /* @__PURE__ */ jsxs("span", { className: "bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold", children: [
            project.progression,
            "% Complete"
          ] }) })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "p-6", children: [
          /* @__PURE__ */ jsx("h3", { className: "text-2xl font-semibold mb-3 text-foreground", children: project.title }),
          /* @__PURE__ */ jsx(
            "p",
            {
              className: "text-muted-foreground mb-4",
              dangerouslySetInnerHTML: { __html: project.description }
            }
          ),
          /* @__PURE__ */ jsxs("div", { className: "mb-4", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center mb-2", children: [
              /* @__PURE__ */ jsx("span", { className: "text-sm font-medium text-foreground", children: "Construction Progress" }),
              /* @__PURE__ */ jsxs("span", { className: "text-sm text-muted-foreground", children: [
                project.progression,
                "%"
              ] })
            ] }),
            /* @__PURE__ */ jsx("div", { className: "w-full bg-secondary rounded-full h-2", children: /* @__PURE__ */ jsx(
              "div",
              {
                className: "bg-primary h-2 rounded-full transition-all duration-300",
                style: { width: `${project.progression}%` }
              }
            ) })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center text-sm text-muted-foreground", children: [
              /* @__PURE__ */ jsx(MapPin, { className: "h-4 w-4 mr-2 text-primary" }),
              project.location
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex items-center text-sm text-muted-foreground", children: [
              /* @__PURE__ */ jsx(Calendar, { className: "h-4 w-4 mr-2 text-primary" }),
              "Expected Completion: ",
              project.completionDate
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex items-center text-sm text-muted-foreground", children: [
              /* @__PURE__ */ jsx(DollarSign, { className: "h-4 w-4 mr-2 text-primary" }),
              "Project Value: ",
              project.value / 1e6,
              " M"
            ] })
          ] })
        ] })
      ] }, index)) })
    ] }) })
  ] });
};
export {
  ProjectsUnderConstruction as default
};
