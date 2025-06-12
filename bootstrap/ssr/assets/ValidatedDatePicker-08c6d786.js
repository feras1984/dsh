import { jsx, jsxs } from "react/jsx-runtime";
import { DatePicker } from "@mui/x-date-pickers/DatePicker/index.js";
import { Box, FormHelperText } from "@mui/material";
import { Controller } from "react-hook-form";
const ValidatedDatePicker = ({
  methods,
  label,
  controlName,
  color = "secondary",
  slotProps,
  ...props
}) => {
  return /* @__PURE__ */ jsx(
    Controller,
    {
      name: controlName,
      control: methods.control,
      render: ({
        field: { value, onChange, onBlur, ref },
        fieldState: { error }
      }) => /* @__PURE__ */ jsxs(Box, { children: [
        /* @__PURE__ */ jsx(
          DatePicker,
          {
            label,
            inputRef: ref,
            value,
            onChange,
            slotProps: {
              textField: {
                color: "secondary",
                fullWidth: true,
                variant: "filled",
                onBlur
              }
            },
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
            children: (error == null ? void 0 : error.message) ?? ""
          }
        )
      ] })
    }
  );
};
export {
  ValidatedDatePicker as V
};
