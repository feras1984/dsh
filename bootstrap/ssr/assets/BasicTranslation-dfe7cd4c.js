import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import React, { useState, useRef } from "react";
import { CardMedia, Box, IconButton, FormHelperText, InputLabel } from "@mui/material";
import { Controller } from "react-hook-form";
import { Container } from "typedi";
import "reflect-metadata";
import { F as FileService } from "./FileService-769645e4.js";
import { I as Icon } from "./Icon-2105584c.js";
import { usePage } from "@inertiajs/react";
import { V as ValidatedInput } from "./ValidatedInput-d372d269.js";
import { ToolbarType, RichTextEditorComponent, Inject, HtmlEditor, Image, Link, QuickToolbar, Toolbar, Count } from "@syncfusion/ej2-react-richtexteditor";
import { F as FormService } from "../app.js";
const initialValue = {
  image: "",
  classes: "",
  className: "",
  callback: () => {
  },
  imageChanged: () => {
  },
  inputRef: React.createRef(),
  error: "",
  iconClasses: ""
};
const ImageContext = React.createContext(initialValue);
const ImageProvider = ({ value, children }) => {
  return /* @__PURE__ */ jsx(ImageContext.Provider, { value, children });
};
const useImageContext = () => {
  const context = React.useContext(ImageContext);
  if (context === void 0) {
    throw new Error("The context must be inside the provider");
  }
  return context;
};
const ImageInput = () => {
  const { inputRef, callback } = useImageContext();
  const handleChange = (event) => {
    var _a, _b;
    callback(((_b = (_a = event == null ? void 0 : event.target) == null ? void 0 : _a.files) == null ? void 0 : _b[0]) || null);
  };
  return /* @__PURE__ */ jsx(
    "input",
    {
      type: "file",
      id: "hidden-input",
      className: "hidden",
      ref: inputRef,
      onChange: handleChange
    }
  );
};
const Layout = () => {
  Container.get(FileService);
  const { image, classes, className } = useImageContext();
  return /* @__PURE__ */ jsx(
    CardMedia,
    {
      classes: {
        img: classes
      },
      component: "img",
      src: image || "/file/users/default.png",
      alt: "photo",
      className
    }
  );
};
const UploadIcon = () => {
  const { inputRef, iconClasses } = useImageContext();
  const handleClick = () => {
    var _a;
    (_a = inputRef == null ? void 0 : inputRef.current) == null ? void 0 : _a.click();
  };
  return /* @__PURE__ */ jsx(Box, { className: `absolute bg-white rounded-full ${iconClasses ? iconClasses : "right-[16px] bottom-[16px]"}`, children: /* @__PURE__ */ jsx(IconButton, { onClick: handleClick, className: "", children: /* @__PURE__ */ jsx(Icon, { name: "edit", size: 24 }) }) });
};
const ErrorMessage = () => {
  const { error } = useImageContext();
  return error && /* @__PURE__ */ jsx(
    FormHelperText,
    {
      sx: {
        color: "error.main",
        marginLeft: "8px",
        marginRight: "8px",
        textWrap: "nowrap"
      },
      children: error
    }
  );
};
const ImageContainer = ({ image, onChange, iconClasses = "", classes }) => {
  const fileService = Container.get(FileService);
  const [currentImage, setImage] = React.useState(image);
  const [error, setError] = React.useState("");
  const inputRef = React.useRef(null);
  const callback = (image2) => {
    if (image2) {
      if (!fileService.assertSize(image2)) {
        setError(`Image Size must be less than ${FileService.MAX_FILE_SIZE}KB!`);
      } else if (!fileService.assertImage(image2)) {
        setError("Please upload an image!");
      } else {
        setError("");
        setImage(URL.createObjectURL(image2));
        onChange(image2);
      }
    }
  };
  const imageChanged = () => {
  };
  return /* @__PURE__ */ jsx(ImageProvider, { value: { image: currentImage, callback, imageChanged, inputRef, error, iconClasses, classes }, children: /* @__PURE__ */ jsxs(Box, { children: [
    /* @__PURE__ */ jsxs(Box, { className: "relative", children: [
      /* @__PURE__ */ jsx(Layout, {}),
      /* @__PURE__ */ jsx(UploadIcon, {})
    ] }),
    /* @__PURE__ */ jsx(ImageInput, {}),
    /* @__PURE__ */ jsx(ErrorMessage, {})
  ] }) });
};
const ValidatedImage = ({
  controllerName = "",
  methods,
  image = null,
  onUpload = null
}) => {
  const fileService = Container.get(FileService);
  const [imageDirty, setImageDirty] = useState(false);
  useState(false);
  const getImageInfo = (data) => {
    setImageDirty(true);
    methods.setValue("image", data);
    if (data)
      methods.clearErrors("image");
    else
      methods.setError("image", { message: "image is required" });
    if (!data && imageDirty) {
      methods.setError("image", { message: "Select a valid image" });
    } else {
      methods.clearErrors("image");
      if (onUpload !== null) {
        onUpload();
      }
    }
  };
  return /* @__PURE__ */ jsx(
    Controller,
    {
      name: controllerName,
      control: methods.control,
      render: ({
        field: { value, onChange, onBlur, ref },
        fieldState: { error }
      }) => /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx(Box, { className: "w-[250px] relative", children: /* @__PURE__ */ jsx(
        ImageContainer,
        {
          image: image || fileService.DefaultImage,
          iconClasses: "right-[16px] bottom-[16px]",
          classes: "bg-center bg-cover object-cover relative h-[195px] rounded-lg border-2 border-state-500",
          onChange: getImageInfo
        }
      ) }) })
    }
  );
};
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
  BasicTranslation as B,
  ValidatedImage as V
};
