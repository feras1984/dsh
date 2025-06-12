import { jsx, jsxs } from "react/jsx-runtime";
import { Controller } from "react-hook-form";
import { FormControl, InputLabel, Select, MenuItem, FormHelperText, Box } from "@mui/material";
import { usePage } from "@inertiajs/react";
import { V as ValidatedInput } from "./ValidatedInput-d372d269.js";
import { Container } from "typedi";
import { F as FormService } from "../app.js";
const ValidatedSelect = ({
  control,
  controlName,
  id,
  label = "",
  placeholder = "",
  items = [],
  withNone = true,
  selectChanged,
  ...props
}) => {
  return /* @__PURE__ */ jsx(
    Controller,
    {
      name: controlName,
      control,
      render: ({
        field: { value, onChange, onBlur, ref },
        fieldState: { error }
      }) => /* @__PURE__ */ jsxs(
        FormControl,
        {
          variant: "filled",
          sx: { m: 1 },
          className: "w-full",
          color: "secondary",
          children: [
            /* @__PURE__ */ jsx(InputLabel, { id: label == null ? void 0 : label.toString(), children: placeholder }),
            /* @__PURE__ */ jsxs(
              Select,
              {
                labelId: label == null ? void 0 : label.toString(),
                id,
                value,
                ref,
                onChange: (event) => {
                  onChange(event);
                  selectChanged && selectChanged(event);
                },
                color: "secondary",
                error: Boolean(error),
                ...props,
                children: [
                  withNone && /* @__PURE__ */ jsx(MenuItem, { value: -1, children: /* @__PURE__ */ jsx("em", { children: "None" }) }),
                  items.map((item, key) => /* @__PURE__ */ jsx(MenuItem, { value: item.id, children: item.name }, key))
                ]
              }
            ),
            /* @__PURE__ */ jsx(
              FormHelperText,
              {
                sx: {
                  color: "error.main",
                  marginLeft: "8px",
                  marginRight: "8px"
                },
                children: (error == null ? void 0 : error.message) ?? ""
              }
            )
          ]
        }
      )
    }
  );
};
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
  BasicTitleTranslation as B,
  ValidatedSelect as V
};
