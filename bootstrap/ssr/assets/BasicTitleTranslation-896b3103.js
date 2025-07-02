import { jsx } from "react/jsx-runtime";
import { usePage } from "@inertiajs/react";
import { Box } from "@mui/material";
import { V as ValidatedInput } from "./ValidatedInput-d372d269.js";
import { Container } from "typedi";
import { F as FormService } from "../app.js";
const BasicTitleTranslation = ({
  methods,
  category
}) => {
  const { languages } = usePage().props.settings;
  const formService = Container.get(FormService);
  return /* @__PURE__ */ jsx(Box, { children: languages.map((language, index) => /* @__PURE__ */ jsx(Box, { children: /* @__PURE__ */ jsx(
    ValidatedInput,
    {
      controlName: formService.generateControllerName("translations") + language.code + ".name",
      name: language.code + "-name",
      id: language.code + "-name",
      label: `${language.name} ${category} Name`,
      placeholder: `${language.name} ${category} Name`,
      control: methods.control
    }
  ) }, index)) });
};
export {
  BasicTitleTranslation as B
};
