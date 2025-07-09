import { jsx, jsxs } from "react/jsx-runtime";
import React from "react";
import { useGSAP } from "@gsap/react";
import { styled } from "@mui/material/styles/index.js";
import { Box, Typography } from "@mui/material";
import { s as styles } from "./styles.module-18fc343b.js";
const NewsDetails = ({ service }) => {
  const containerRef = React.useRef(null);
  React.useRef(null);
  React.useRef(null);
  const { contextSafe } = useGSAP({ scope: containerRef });
  const [width, setWidth] = React.useState(window.innerWidth);
  const [shadowWidth, setShadowWidth] = React.useState("0");
  const [margin, setMargin] = React.useState("0");
  const ImageStyle = styled(Box)({
    cursor: "pointer",
    position: "relative",
    width: "325px",
    height: "421px",
    borderRadius: "15px",
    minHeight: "190px",
    overflow: "hidden",
    "&:before": {
      position: "absolute",
      content: '""',
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      borderRadius: "15px",
      backgroundImage: `url(/file/blocks/${service.images[0].url})`,
      backgroundPosition: "center center",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      filter: "grayscale(0.9)",
      transform: "scale(1)",
      transition: "all 0.3s ease-in-out"
    },
    "&:hover": {
      "&:before": {
        transform: "scale(1.05)"
      }
    }
  });
  const handleResize = () => {
    setWidth(window.innerWidth);
    if (window.innerWidth <= 350) {
      setShadowWidth("350px");
      setMargin("0%");
    }
    if (window.innerWidth > 350 && window.innerWidth <= 500) {
      setShadowWidth("90%");
      setMargin("5%");
    }
    if (window.innerWidth > 500 && window.innerWidth <= 1e3) {
      setShadowWidth("60%");
      setMargin("20%");
    }
    if (window.innerWidth > 1e3) {
      setShadowWidth("40%");
      setMargin("30%");
    }
  };
  React.useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [shadowWidth]);
  contextSafe(() => {
    var _a;
    document.getElementById(`service-${service.id}`);
    (_a = containerRef.current) == null ? void 0 : _a.classList.remove("relative");
  });
  contextSafe(() => {
    var _a;
    document.getElementById(`service-${service.id}`);
    (_a = containerRef.current) == null ? void 0 : _a.classList.add("relative");
  });
  return /* @__PURE__ */ jsx(
    Box,
    {
      className: "relative",
      ref: containerRef,
      children: /* @__PURE__ */ jsxs(Box, { className: "relative m-0 p-0 w-[325px]", children: [
        /* @__PURE__ */ jsx(ImageStyle, {}),
        /* @__PURE__ */ jsx(Box, { className: `absolute bottom-0 left-0 right-0 flex items-center ${styles.titleAria}`, children: /* @__PURE__ */ jsx(Typography, { color: "white", variant: "h5", align: "center", sx: { fontWeight: "bold", flexBasis: "100%" }, children: service.title }) })
      ] })
    }
  );
};
export {
  NewsDetails as default
};
