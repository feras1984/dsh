import { jsxs, jsx } from "react/jsx-runtime";
const PrincipalActivities = ({ blocks }) => {
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-background", children: [
    /* @__PURE__ */ jsx("section", { className: "py-20 bg-primary text-primary-foreground", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 text-center", children: [
      /* @__PURE__ */ jsx("h1", { className: "text-5xl font-bold mb-6", children: "Principal Activities" }),
      /* @__PURE__ */ jsx("p", { className: "text-xl max-w-3xl mx-auto", children: "SDH specializes in a comprehensive range of construction and development services, delivering excellence across multiple sectors with proven expertise and innovation." })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "p-20 bg-secondary/50", children: /* @__PURE__ */ jsx(
      "p",
      {
        className: "text-muted-foreground text-lg leading-relaxed",
        dangerouslySetInnerHTML: { __html: blocks[0].description }
      }
    ) })
  ] });
};
export {
  PrincipalActivities as default
};
