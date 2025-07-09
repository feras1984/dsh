import { jsx, jsxs } from "react/jsx-runtime";
import { Controller } from "react-hook-form";
import { I as Icon } from "./Icon-2105584c.js";
import { FormControl, InputLabel, Select, MenuItem, Stack, FormHelperText } from "@mui/material";
import ListItemText from "@mui/material/ListItemText/index.js";
const ValidatedSelectWithIcon = ({
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
                  items.map((item, key) => /* @__PURE__ */ jsx(MenuItem, { value: item.id, children: /* @__PURE__ */ jsxs(
                    Stack,
                    {
                      direction: "row",
                      justifyContent: "flex-start",
                      alignItems: "center",
                      spacing: 2,
                      className: "m-[8px]",
                      children: [
                        /* @__PURE__ */ jsx(Icon, { name: item.id }),
                        /* @__PURE__ */ jsx(ListItemText, { children: item.name })
                      ]
                    }
                  ) }, key))
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
export {
  ValidatedSelectWithIcon as V
};
