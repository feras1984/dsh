import { jsx } from "react/jsx-runtime";
import { Box, FormControlLabel, Switch } from "@mui/material";
import { Controller } from "react-hook-form";
const ValidatedSwitch = ({
  controlName = "",
  name = "",
  id = "",
  color = "secondary",
  // // control,
  label = "",
  // required = false,
  sendSwitchState = null,
  methods,
  ...props
}) => {
  const onSwitchChange = (event) => {
    if (sendSwitchState)
      sendSwitchState(event.target.checked);
  };
  return /* @__PURE__ */ jsx(
    Controller,
    {
      name: controlName,
      control: methods == null ? void 0 : methods.control,
      render: ({
        field: { value, onChange, onBlur, ref },
        fieldState: { error }
      }) => /* @__PURE__ */ jsx(Box, { sx: { display: "flex", alignItems: "flex-end", mt: 0 }, children: /* @__PURE__ */ jsx(
        FormControlLabel,
        {
          control: /* @__PURE__ */ jsx(
            Switch,
            {
              name,
              id,
              color,
              inputRef: ref,
              checked: value,
              onChange: (event, checked) => {
                onChange(event);
                onSwitchChange(event);
              },
              onBlur,
              ...props
            }
          ),
          label
        }
      ) })
    }
  );
};
export {
  ValidatedSwitch as V
};
