import { jsxs, jsx } from "react/jsx-runtime";
import { useRef } from "react";
import { C as CustomButton } from "./CustomButton-4b9588a9.js";
import { F as FileService } from "./FileService-5953256c.js";
import { Container } from "typedi";
import "reflect-metadata";
import { Box } from "@mui/material";
const AddFileButton = ({ fileChanged, text = "Product", ...props }) => {
  Container.get(FileService);
  const inputRef = useRef(null);
  const handleClick = () => {
    var _a;
    (_a = inputRef.current) == null ? void 0 : _a.click();
  };
  const handleChange = (event) => {
    var _a, _b;
    if (event && event.target) {
      fileChanged((_b = (_a = event.target) == null ? void 0 : _a.files) == null ? void 0 : _b[0]);
    }
  };
  return /* @__PURE__ */ jsxs(Box, { children: [
    /* @__PURE__ */ jsx(CustomButton, { task: "add", text: `${text} File`, onClick: handleClick, ...props }),
    /* @__PURE__ */ jsx(
      "input",
      {
        type: "file",
        id: "hidden-input",
        className: "hidden",
        ref: inputRef,
        onChange: handleChange
      }
    )
  ] });
};
export {
  AddFileButton as A
};
