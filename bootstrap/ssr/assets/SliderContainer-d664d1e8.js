import { Service } from "typedi";
import { jsx, jsxs } from "react/jsx-runtime";
import React from "react";
import { Box, Stack, IconButton, Container, Backdrop } from "@mui/material";
import { gsap, Power3 } from "gsap";
import { I as Icon } from "./Icon-cd2b22cf.js";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode, Navigation, Pagination, Thumbs } from "swiper/modules";
/* empty css                     */import SwiperCore from "swiper";
import { useGSAP } from "@gsap/react";
const defaultValue = {
  open: false,
  openViewer: () => {
  },
  closeViewer: () => {
  },
  album: [],
  uri: "",
  title: ""
};
const GalleryContext = React.createContext(defaultValue);
const GalleryContextProvider = ({ children, value }) => /* @__PURE__ */ jsx(GalleryContext.Provider, { value, children });
const useGalleryContext = () => {
  const data = React.useContext(GalleryContext);
  if (data === void 0) {
    throw new Error("Context must be inside the provider!");
  }
  return data;
};
const titleAria = "_titleAria_1k474_1";
const serviceCard = "_serviceCard_1k474_12";
const boxContainer = "_boxContainer_1k474_20";
const imgFlex = "_imgFlex_1k474_25";
const imgCard = "_imgCard_1k474_32";
const coverAria = "_coverAria_1k474_45";
const styles$1 = {
  titleAria,
  serviceCard,
  boxContainer,
  imgFlex,
  imgCard,
  coverAria
};
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __decorateClass = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result)
    __defProp(target, key, result);
  return result;
};
let AlbumService = class {
  constructor() {
    this.getAlbumUrls = (files, uri) => {
      return files.map((file) => {
        return {
          src: uri + file.url,
          title: file.name
        };
      });
    };
  }
};
AlbumService = __decorateClass([
  Service()
], AlbumService);
const AlbumService$1 = AlbumService;
const layout = "_layout_1jiby_1";
const swiperSlide2 = "_swiperSlide2_1jiby_18";
const swiper = "_swiper_1jiby_18";
const swiperSlide = "_swiperSlide_1jiby_18";
const mySwiper2 = "_mySwiper2_1jiby_87";
const mySwiper = "_mySwiper_1jiby_87";
const styles = {
  layout,
  swiperSlide2,
  swiper,
  swiperSlide,
  mySwiper2,
  mySwiper,
  "swiper-slide-thumb-active": "_swiper-slide-thumb-active_1jiby_105"
};
const defaultValues = {
  controls: {
    autoplay: false,
    zoom: 1,
    mapIn: false
  },
  setControls: null,
  changeAutoPlay: () => {
  },
  // changeZoom: () => {},
  zoomIn: () => {
  },
  zoomOut: () => {
  },
  changeMap: (value) => {
  }
};
const SliderContext = React.createContext(defaultValues);
const SliderProvider = ({ children, value }) => /* @__PURE__ */ jsx(SliderContext.Provider, { value, children });
const useSliderContext = () => {
  const data = React.useContext(SliderContext);
  if (data === void 0) {
    throw Error("Component should be inside the corresponding provider!");
  }
  return data;
};
const HeaderComponent = () => {
  const { closeViewer } = useGalleryContext();
  const { controls, setControls, changeAutoPlay, zoomIn, zoomOut, changeMap } = useSliderContext();
  React.useEffect(() => {
  }, [console, setControls]);
  return /* @__PURE__ */ jsx(Box, { className: "p-[16px]", children: /* @__PURE__ */ jsxs(
    Stack,
    {
      direction: "row",
      alignItems: "ceneter",
      justifyContent: "flex-end",
      spacing: 1,
      children: [
        /* @__PURE__ */ jsx(IconButton, { title: "Zoom In", onClick: () => zoomIn(), children: /* @__PURE__ */ jsx(Icon, { name: "zoom-in" }) }),
        /* @__PURE__ */ jsx(IconButton, { title: "Zoom Out", onClick: () => zoomOut(), children: /* @__PURE__ */ jsx(Icon, { name: "zoom-out" }) }),
        /* @__PURE__ */ jsx(IconButton, { title: "Full Screen", onClick: () => changeMap(true), children: /* @__PURE__ */ jsx(Icon, { name: "map-out" }) }),
        /* @__PURE__ */ jsx(IconButton, { title: "Normal Screen", onClick: () => changeMap(false), children: /* @__PURE__ */ jsx(Icon, { name: "map-in" }) }),
        /* @__PURE__ */ jsx(IconButton, { title: "Auto Play", onClick: () => changeAutoPlay(), children: controls.autoplay ? /* @__PURE__ */ jsx(Icon, { name: "stop" }) : /* @__PURE__ */ jsx(Icon, { name: "play" }) }),
        /* @__PURE__ */ jsx(IconButton, { onClick: closeViewer, children: /* @__PURE__ */ jsx(Icon, { name: "close" }) })
      ]
    }
  ) });
};
const thumbs = "";
const zoom = "";
const Slider = () => {
  SwiperCore.use([Autoplay]);
  const { album, uri } = useGalleryContext();
  const [thumbsSwiper, setThumbsSwiper] = React.useState(null);
  const swiperRef = React.useRef(null);
  const containerRef = React.useRef(null);
  const zoomImg = () => {
    gsap.timeline().to(".zoom-img", {
      transform: `scale(${controls.zoom})`,
      duration: 0.1,
      ease: Power3.easeInOut
    });
  };
  useGSAP({ scope: containerRef });
  const { controls, setControls } = useSliderContext();
  React.useEffect(() => {
    var _a;
    if (swiperRef && controls.autoplay)
      (_a = swiperRef.current) == null ? void 0 : _a.swiper.autoplay.start();
    zoomImg();
  }, [controls, setControls]);
  return /* @__PURE__ */ jsx(Box, { ref: containerRef, children: /* @__PURE__ */ jsx(
    Swiper,
    {
      ref: swiperRef,
      modules: [FreeMode, Navigation, Pagination, Thumbs, Autoplay],
      className: styles.mySwiper2,
      spaceBetween: 10,
      navigation: true,
      pagination: {
        type: "fraction"
      },
      thumbs: { swiper: thumbsSwiper },
      centeredSlides: true,
      autoplay: controls.autoplay ? {
        delay: 2500,
        disableOnInteraction: false
      } : false,
      loop: true,
      children: album.map((slider, key) => /* @__PURE__ */ jsx(
        Container,
        {
          maxWidth: "xl",
          component: "div",
          sx: { position: "relative" },
          children: /* @__PURE__ */ jsx(SwiperSlide, { className: styles.swiperSlide2, children: /* @__PURE__ */ jsxs(Box, { className: styles.imgContainer, children: [
            /* @__PURE__ */ jsx("img", { className: "zoom-img", src: `${uri + slider.url}`, alt: slider.name }),
            /* @__PURE__ */ jsx(
              Box,
              {
                component: "div"
              }
            )
          ] }) }, slider.id + "-main-partial-" + key)
        },
        slider.id + "-" + key
      ))
    }
  ) });
};
const SliderContainer = () => {
  const { open, closeViewer } = useGalleryContext();
  const containerRef = React.useRef(null);
  const layoutRef = React.useRef(null);
  const [controls, setControls] = React.useState({
    autoplay: false,
    zoom: 1,
    mapIn: false
  });
  const changeAutoPlay = () => {
    setControls((controls2) => {
      return { ...controls2, autoplay: !controls2.autoplay };
    });
  };
  const zoomIn = () => {
    if (controls.zoom < 1.5) {
      setControls((controls2) => {
        return { ...controls2, zoom: controls2.zoom + 0.1 };
      });
    }
  };
  const zoomOut = () => {
    if (controls.zoom > 1) {
      setControls((controls2) => {
        return { ...controls2, zoom: controls2.zoom - 0.1 };
      });
    }
  };
  const changeMap = (value) => {
    setControls((controls2) => {
      return { ...controls2, mapIn: value };
    });
  };
  const closing = React.useCallback(() => {
    gsap.timeline().to(layoutRef.current, {
      duration: 0.7,
      height: 0,
      opacity: 0,
      ease: Power3.easeInOut
    }).to(layoutRef.current, {
      visibility: "hidden"
    });
  }, [open]);
  const opening = React.useCallback(() => {
    gsap.timeline().to(layoutRef.current, {
      visibility: "visible",
      duration: 0.5,
      height: "fit-content",
      opacity: 1,
      ease: Power3.easeInOut
    });
  }, [open]);
  const expand = React.useCallback(() => {
    gsap.timeline().to(layoutRef.current, {
      position: "fixed",
      width: "100vw",
      ease: Power3.easeInOut,
      duration: 0.2
    }).to(layoutRef.current, {
      height: "100vh",
      zIndex: 10001,
      ease: Power3.easeInOut,
      duration: 0.2
    });
  }, [controls]);
  const shrink = React.useCallback(() => {
    gsap.timeline().to(layoutRef.current, {
      position: "absolute",
      width: "100%",
      ease: Power3.easeInOut,
      duration: 0.2
    }).to(layoutRef.current, {
      height: "100%",
      ease: Power3.easeInOut,
      duration: 0.2
    });
  }, [controls]);
  React.useMemo(() => {
    if (!open) {
      closing();
      setControls((controls2) => {
        return { ...controls2, autoplay: false, mapIn: false, zoom: 1 };
      });
    } else {
      opening();
    }
  }, [open]);
  React.useMemo(() => {
    if (controls.mapIn)
      expand();
    if (!controls.mapIn)
      shrink();
  }, [controls]);
  return /* @__PURE__ */ jsx(
    Backdrop,
    {
      open,
      className: "z-[2100]",
      children: /* @__PURE__ */ jsx(Box, { ref: containerRef, children: /* @__PURE__ */ jsx(Box, { className: styles.layout, ref: layoutRef, children: /* @__PURE__ */ jsxs(SliderProvider, { value: { controls, setControls, changeAutoPlay, zoomIn, zoomOut, changeMap }, children: [
        /* @__PURE__ */ jsx(HeaderComponent, {}),
        /* @__PURE__ */ jsx(Slider, {})
      ] }) }) })
    }
  );
};
export {
  AlbumService$1 as A,
  GalleryContextProvider as G,
  SliderContainer as S,
  styles$1 as s,
  useGalleryContext as u
};
