import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import React, { useState } from "react";
import { CardMedia, Box, IconButton, FormHelperText } from "@mui/material";
import { Controller } from "react-hook-form";
import { Container } from "typedi";
import "reflect-metadata";
import { F as FileService } from "./FileService-5953256c.js";
import { I as Icon } from "./Icon-2105584c.js";
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
  const isSVGUrl = (url) => {
    return url.toLowerCase().endsWith(".svg");
  };
  return isSVGUrl(image || "") ? /* @__PURE__ */ jsx("object", { className: classes, data: image || "", type: "image/svg+xml", width: "100%", height: "100%", children: /* @__PURE__ */ jsx("img", { src: image || "", width: "160px", height: "160px", alt: "svg fallback" }) }) : /* @__PURE__ */ jsx(
    CardMedia,
    {
      classes: {
        img: classes
      },
      component: "img",
      image: image || "/file/users/default.png",
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
export {
  ValidatedImage as V
};
