import { jsxs, jsx } from "react/jsx-runtime";
const CompanyThoughts = ({ blocks }) => {
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-background", children: [
    /* @__PURE__ */ jsx("section", { className: "py-20 bg-primary text-primary-foreground", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 text-center", children: [
      /* @__PURE__ */ jsx("h1", { className: "text-5xl font-bold mb-6", children: "Company Thoughts" }),
      /* @__PURE__ */ jsx("p", { className: "text-xl max-w-3xl mx-auto", children: "Our philosophy, values, and vision for the future of construction. These thoughts guide every decision we make and every project we undertake." })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "p-20 bg-secondary/50", children: /* @__PURE__ */ jsx(
      "p",
      {
        className: "text-muted-foreground text-lg leading-relaxed",
        dangerouslySetInnerHTML: { __html: blocks[0].description }
      }
    ) }),
    /* @__PURE__ */ jsx("section", { className: "py-20 bg-primary text-primary-foreground", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 text-center", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-4xl font-bold mb-6", children: "Join Our Journey" }),
      /* @__PURE__ */ jsx("p", { className: "text-xl mb-8 max-w-3xl mx-auto", children: "These thoughts and visions drive us forward every day. We invite you to be part of this journey as we build not just structures, but a better future for all." }),
      /* @__PURE__ */ jsx("p", { className: "text-lg italic max-w-2xl mx-auto", children: '"The best time to plant a tree was 20 years ago. The second best time is now. The same is true for sustainable, thoughtful construction."' })
    ] }) })
  ] });
};
export {
  CompanyThoughts as default
};
