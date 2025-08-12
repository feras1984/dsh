import { jsx, jsxs } from "react/jsx-runtime";
import { useTranslation } from "react-i18next";
const OrganizationalSection = ({ blocks }) => {
  const { t } = useTranslation();
  return /* @__PURE__ */ jsx("main", { className: "flex-1 bg-background", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4 py-16", children: /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto text-center", children: [
    /* @__PURE__ */ jsx("h1", { className: "text-4xl font-bold text-foreground mb-8", children: blocks[0].title }),
    /* @__PURE__ */ jsx("p", { className: "text-lg text-muted-foreground mb-12", children: t("organizational-structure-hero") }),
    /* @__PURE__ */ jsx("div", { className: "bg-white rounded-lg shadow-lg p-8", children: /* @__PURE__ */ jsx(
      "div",
      {
        className: "flex items-center justify-center min-h-[600px] border-2 border-dashed border-border rounded-lg",
        children: /* @__PURE__ */ jsx(
          "img",
          {
            className: "w-full h-full text-primary",
            src: `/file/blocks/${blocks[0].images[0].url}`,
            alt: "SDH Construction Site"
          }
        )
      }
    ) })
  ] }) }) });
};
export {
  OrganizationalSection as default
};
