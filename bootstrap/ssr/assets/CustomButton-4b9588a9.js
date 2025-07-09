import { jsx, jsxs } from "react/jsx-runtime";
import { Button, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add.js";
import SendIcon from "@mui/icons-material/Send.js";
import ChangeCircleOutlinedIcon from "@mui/icons-material/ChangeCircleOutlined.js";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined.js";
import SmartDisplayOutlinedIcon from "@mui/icons-material/SmartDisplayOutlined.js";
import AutoFixNormalIcon from "@mui/icons-material/AutoFixNormal.js";
import ReorderIcon from "@mui/icons-material/Reorder.js";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos.js";
import { useTranslation } from "react-i18next";
const CustomButton = ({
  task,
  text = "",
  disabled = false,
  type = "submit",
  ...props
}) => {
  const { t } = useTranslation();
  switch (task) {
    case "add": {
      return /* @__PURE__ */ jsx(
        Button,
        {
          ...props,
          type,
          size: "small",
          variant: "contained",
          color: "secondary",
          disabled,
          startIcon: /* @__PURE__ */ jsx(AddIcon, {}),
          children: /* @__PURE__ */ jsxs(Typography, { variant: "body2", children: [
            "Add ",
            text
          ] })
        }
      );
    }
    case "send": {
      return /* @__PURE__ */ jsx(
        Button,
        {
          ...props,
          type,
          size: "small",
          variant: "contained",
          color: "primary",
          disabled,
          startIcon: /* @__PURE__ */ jsx(SendIcon, {}),
          children: /* @__PURE__ */ jsxs(Typography, { variant: "body2", className: "px-[5px]", children: [
            t("send"),
            " ",
            text
          ] })
        }
      );
    }
    case "update": {
      return /* @__PURE__ */ jsx(
        Button,
        {
          ...props,
          type,
          size: "small",
          variant: "contained",
          color: "secondary",
          disabled,
          startIcon: /* @__PURE__ */ jsx(ChangeCircleOutlinedIcon, {}),
          children: /* @__PURE__ */ jsxs(Typography, { variant: "body2", children: [
            "Update ",
            text
          ] })
        }
      );
    }
    case "display": {
      return /* @__PURE__ */ jsx(
        Button,
        {
          ...props,
          size: "small",
          variant: "contained",
          color: "info",
          startIcon: /* @__PURE__ */ jsx(SmartDisplayOutlinedIcon, {}),
          children: /* @__PURE__ */ jsxs(Typography, { variant: "body2", children: [
            "View ",
            text
          ] })
        }
      );
    }
    case "delete": {
      return /* @__PURE__ */ jsx(
        Button,
        {
          ...props,
          type: "button",
          size: "small",
          variant: "contained",
          color: "error",
          disabled,
          startIcon: /* @__PURE__ */ jsx(DeleteOutlineOutlinedIcon, {}),
          children: /* @__PURE__ */ jsxs(Typography, { variant: "body2", children: [
            "Delete ",
            text
          ] })
        }
      );
    }
    case "generate": {
      return /* @__PURE__ */ jsx(
        Button,
        {
          ...props,
          type: "button",
          size: "small",
          variant: "contained",
          color: "primary",
          disabled,
          startIcon: /* @__PURE__ */ jsx(AutoFixNormalIcon, {}),
          children: /* @__PURE__ */ jsxs(Typography, { variant: "body2", children: [
            "Generate ",
            text
          ] })
        }
      );
    }
    case "reorder": {
      return /* @__PURE__ */ jsx(
        Button,
        {
          ...props,
          type: "button",
          size: "small",
          variant: "contained",
          color: "secondary",
          disabled,
          startIcon: /* @__PURE__ */ jsx(ReorderIcon, {}),
          children: /* @__PURE__ */ jsxs(Typography, { variant: "body2", children: [
            "Reorder ",
            text
          ] })
        }
      );
    }
    case "back": {
      return /* @__PURE__ */ jsx(
        Button,
        {
          ...props,
          type: "button",
          size: "small",
          variant: "contained",
          color: "error",
          disabled,
          startIcon: /* @__PURE__ */ jsx(ArrowBackIosIcon, {}),
          children: /* @__PURE__ */ jsxs(Typography, { variant: "body2", children: [
            "Back ",
            text
          ] })
        }
      );
    }
    case "fetch": {
      return /* @__PURE__ */ jsx(
        Button,
        {
          ...props,
          size: "small",
          variant: "contained",
          color: "info",
          type,
          startIcon: /* @__PURE__ */ jsx(SmartDisplayOutlinedIcon, {}),
          children: /* @__PURE__ */ jsxs(Typography, { variant: "body2", children: [
            "View ",
            text
          ] })
        }
      );
    }
    default: {
      return /* @__PURE__ */ jsx(
        Button,
        {
          ...props,
          variant: "contained",
          color: "primary",
          startIcon: /* @__PURE__ */ jsx(AddIcon, {}),
          children: /* @__PURE__ */ jsxs(Typography, { children: [
            "Add ",
            text
          ] })
        }
      );
    }
  }
};
export {
  CustomButton as C
};
