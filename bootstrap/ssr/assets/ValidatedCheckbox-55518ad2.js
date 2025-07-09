import { jsx } from "react/jsx-runtime";
import { Box, FormControlLabel, Checkbox } from "@mui/material";
import { Controller } from "react-hook-form";
const ValidatedCheckbox = ({
  name = "",
  id = "",
  color = "secondary",
  control,
  label = "",
  required = false
}) => {
  return /* @__PURE__ */ jsx(
    Controller,
    {
      name,
      control,
      render: ({
        field: { value, onChange, onBlur, ref },
        fieldState: { error }
      }) => /* @__PURE__ */ jsx(Box, { sx: { display: "flex", alignItems: "flex-end", mt: 1 }, children: /* @__PURE__ */ jsx(
        FormControlLabel,
        {
          required,
          control: /* @__PURE__ */ jsx(
            Checkbox,
            {
              name,
              id,
              color,
              inputRef: ref,
              checked: value,
              onChange,
              onBlur
            }
          ),
          label
        }
      ) })
    }
  );
};
export {
  ValidatedCheckbox as V
};
