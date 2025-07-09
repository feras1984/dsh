import { jsxs, jsx } from "react/jsx-runtime";
import { usePage } from "@inertiajs/react";
import { InputLabel, Box, FormHelperText } from "@mui/material";
import { V as ValidatedInput } from "./ValidatedInput-4e590f68.js";
import { ToolbarType, RichTextEditorComponent, Inject, HtmlEditor, Image, Link, QuickToolbar, Toolbar, Count } from "@syncfusion/ej2-react-richtexteditor";
import React, { useRef } from "react";
import { Controller } from "react-hook-form";
import { Container } from "typedi";
import { F as FormService } from "../app.js";
const styles = "";
const items = [
  "Bold",
  "Italic",
  "Underline",
  "StrikeThrough",
  "FontName",
  "FontSize",
  "FontColor",
  "BackgroundColor",
  "LowerCase",
  "UpperCase",
  "|",
  "Formats",
  "Alignments",
  "OrderedList",
  "UnorderedList",
  "Outdent",
  "Indent",
  "|",
  "CreateLink",
  "Image",
  "|",
  "ClearFormat",
  "Print",
  "SourceCode",
  "FullScreen",
  "|",
  "Undo",
  "Redo"
];
const quickToolbarSettings = {
  image: [
    "Replace",
    "Align",
    "Caption",
    "Remove",
    "InsertLink",
    "OpenImageLink",
    "-",
    "EditImageLink",
    "RemoveImageLink",
    "Display",
    "AltText",
    "Dimension"
  ]
};
const pasteCleanupSettings = {
  allowedStyleProps: [
    "background",
    "background-color",
    "border",
    "border-bottom",
    "border-left",
    "border-radius",
    "border-right",
    "border-style",
    "border-top",
    "border-width",
    "clear",
    "color",
    "cursor",
    "direction",
    "display",
    "float",
    "font",
    "font-family",
    "font-size",
    "font-weight",
    "font-style",
    "text-align",
    "text-decoration",
    "text-indent",
    "height",
    "left",
    "line-height",
    "top",
    "width",
    "margin",
    "margin-top",
    "margin-left",
    "margin-right",
    "margin-bottom",
    "max-height",
    "max-width",
    "min-height",
    "min-width",
    "overflow",
    "overflow-x",
    "overflow-y",
    "padding",
    "padding-bottom",
    "padding-left",
    "padding-right",
    "padding-top",
    "position",
    "right",
    "table-layout",
    "vertical-align",
    "visibility",
    "white-space"
  ],
  deniedAttrs: ["class", "title", "id"],
  deniedTags: ["a"],
  keepFormat: false,
  plainText: false,
  prompt: true
};
const iframeSetting = { enable: true };
const rtlCodeArray = ["ar"];
const enableRtl = (code) => rtlCodeArray.includes(code);
const MySyncfusionEditor = ({
  id,
  name,
  value,
  onBlur,
  label,
  error,
  languageCode = "en",
  maxLength = 100
}) => {
  var _a;
  const richTextRef = useRef(null);
  const toolbarSettings = {
    type: ToolbarType.MultiRow,
    items,
    enableFloating: false
  };
  React.useEffect(() => {
    var _a2;
    const onRTBlur = (event) => {
      var _a3;
      onBlur(((_a3 = richTextRef.current) == null ? void 0 : _a3.value) || "");
    };
    (_a2 = richTextRef.current) == null ? void 0 : _a2.addEventListener("blur", onRTBlur);
  }, [(_a = richTextRef.current) == null ? void 0 : _a.value]);
  return /* @__PURE__ */ jsxs("div", { className: "py-[16px]", children: [
    /* @__PURE__ */ jsx(InputLabel, { children: label }),
    /* @__PURE__ */ jsx(
      RichTextEditorComponent,
      {
        className: "cke-box-shadow",
        height: 450,
        id,
        name,
        toolbarSettings,
        quickToolbarSettings,
        enableRtl: enableRtl(languageCode),
        value,
        ref: richTextRef,
        iframeSettings: iframeSetting,
        pasteCleanupSettings,
        showCharCount: true,
        maxLength,
        children: /* @__PURE__ */ jsx(Inject, { services: [HtmlEditor, Image, Link, QuickToolbar, Toolbar, Count] })
      }
    )
  ] });
};
const ValidatedTextEditor = ({
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
  languageCode = "",
  maxLength = 100,
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
      }) => {
        const onTextEditorChanged = (event) => {
          methods == null ? void 0 : methods.setValue(controlName, event);
        };
        return /* @__PURE__ */ jsxs(Box, { children: [
          /* @__PURE__ */ jsx(
            MySyncfusionEditor,
            {
              id,
              name,
              value,
              onBlur: onTextEditorChanged,
              placeholder,
              label,
              inputRef: ref,
              error,
              languageCode,
              maxLength
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
        ] });
      }
    }
  );
};
const BasicTranslation = ({
  methods,
  category,
  maxLength = 2e3
}) => {
  const { languages } = usePage().props.settings;
  const formService = Container.get(FormService);
  return /* @__PURE__ */ jsx(Box, { children: languages.map(
    (language, index) => /* @__PURE__ */ jsxs(Box, { children: [
      /* @__PURE__ */ jsx(
        ValidatedInput,
        {
          controlName: formService.generateControllerName("translations") + language.code + ".name",
          name: language.code + "-name",
          id: language.code + "-name",
          label: `${language.name} ${category} Name`,
          placeholder: `${language.name} ${category} Name`,
          control: methods.control
        }
      ),
      /* @__PURE__ */ jsx(
        ValidatedTextEditor,
        {
          controlName: formService.generateControllerName("translations") + language.code + ".brief",
          methods,
          name: language.code + "-brief",
          id: language.code + "-brief",
          label: `${language.name} ${category} Brief`,
          placeholder: `${language.name} ${category} Brief`,
          control: methods.control,
          multiline: true,
          rows: 4,
          languageCode: language.code,
          maxLength
        }
      ),
      /* @__PURE__ */ jsx(
        ValidatedTextEditor,
        {
          controlName: formService.generateControllerName("translations") + language.code + ".description",
          methods,
          name: language.code + "-description",
          id: language.code + "-description",
          label: `${language.name} ${category} Description`,
          placeholder: `${language.name} ${category} Description`,
          control: methods.control,
          multiline: true,
          rows: 4,
          languageCode: language.code,
          maxLength
        }
      )
    ] }, index)
  ) });
};
export {
  BasicTranslation as B
};
