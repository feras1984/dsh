import { jsx, jsxs } from "react/jsx-runtime";
import { Box, TextField, FormHelperText } from "@mui/material";
import { Controller } from "react-hook-form";
import InputAdornment from "@mui/material/InputAdornment/index.js";
const ValidatedInput = ({
  name = "",
  controlName = "",
  control,
  id = "",
  label = "",
  placeholder = "",
  multiline = false,
  rows = 1,
  adornment = "",
  methods = void 0,
  errors = "",
  ...props
}) => {
  return /* @__PURE__ */ jsx(
    Controller,
    {
      name: controlName,
      control: (methods == null ? void 0 : methods.control) || control,
      render: ({
        field: { value, onChange, onBlur, ref },
        fieldState: { error }
      }) => /* @__PURE__ */ jsxs(Box, { className: "basis-[100%]", children: [
        /* @__PURE__ */ jsx(
          TextField,
          {
            variant: "filled",
            color: "secondary",
            fullWidth: true,
            label,
            id,
            placeholder,
            name,
            multiline,
            rows,
            InputProps: {
              startAdornment: /* @__PURE__ */ jsx(InputAdornment, { position: "start", children: adornment })
            },
            inputProps: {
              form: {
                autocomplete: "off"
              }
            },
            required: true,
            inputRef: ref,
            value,
            onChange,
            onBlur,
            error: Boolean(error),
            ...props
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
            children: (error == null ? void 0 : error.message) ?? errors
          }
        )
      ] })
    }
  );
};
export {
  ValidatedInput as V
};
