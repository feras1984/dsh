import { jsxs, jsx } from "react/jsx-runtime";
import { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { gsap } from "gsap";
import { useTranslation } from "react-i18next";
import { usePage } from "@inertiajs/react";
const HeroSlider = ({ slides }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideRefs = useRef([]);
  const contentRefs = useRef([]);
  const fileURL = `/file/blocks`;
  useTranslation();
  usePage().props;
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5e3);
    return () => clearInterval(timer);
  }, [slides.length]);
  useEffect(() => {
    slideRefs.current.forEach((slide, index) => {
      if (slide) {
        gsap.to(slide, {
          opacity: index === currentSlide ? 1 : 0,
          duration: 1,
          ease: "power2.inOut"
        });
      }
    });
    const currentContent = contentRefs.current[currentSlide];
    if (currentContent) {
      const tl = gsap.timeline();
      const elements = currentContent.querySelectorAll("h1, h2, p, button");
      tl.fromTo(
        elements,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: "power2.out",
          delay: 0.3
        }
      );
    }
  }, [currentSlide]);
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };
  return /* @__PURE__ */ jsxs("div", { className: "relative h-[900px] overflow-hidden", children: [
    slides.map((slide, index) => /* @__PURE__ */ jsx(
      "div",
      {
        ref: (el) => slideRefs.current[index] = el,
        className: "absolute inset-0 opacity-0",
        children: /* @__PURE__ */ jsxs(
          "div",
          {
            className: "h-full bg-cover bg-center bg-no-repeat",
            style: { backgroundImage: `url(${fileURL}/${slide.images[0].url})` },
            children: [
              /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-black bg-opacity-50" }),
              /* @__PURE__ */ jsx("div", { className: "relative h-full flex items-center justify-center", children: /* @__PURE__ */ jsxs(
                "div",
                {
                  ref: (el) => contentRefs.current[index] = el,
                  className: "text-center text-white max-w-4xl px-4",
                  children: [
                    /* @__PURE__ */ jsx("h1", { className: "text-5xl md:text-7xl font-bold mb-4", children: slide.title }),
                    /* @__PURE__ */ jsx("h2", { className: "text-2xl md:text-3xl font-light mb-6", dangerouslySetInnerHTML: { __html: slide.brief } }),
                    /* @__PURE__ */ jsx("p", { className: "text-lg md:text-xl mb-8 max-w-2xl mx-auto", dangerouslySetInnerHTML: { __html: slide.description } })
                  ]
                }
              ) })
            ]
          }
        )
      },
      index
    )),
    /* @__PURE__ */ jsx(
      "button",
      {
        onClick: prevSlide,
        className: "absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300",
        children: /* @__PURE__ */ jsx(ChevronLeft, { className: "h-6 w-6" })
      }
    ),
    /* @__PURE__ */ jsx(
      "button",
      {
        onClick: nextSlide,
        className: "absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300",
        children: /* @__PURE__ */ jsx(ChevronRight, { className: "h-6 w-6" })
      }
    ),
    /* @__PURE__ */ jsx("div", { className: "absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3", children: slides.map((_, index) => /* @__PURE__ */ jsx(
      "button",
      {
        onClick: () => setCurrentSlide(index),
        className: `w-3 h-3 rounded-full transition-all duration-300 ${index === currentSlide ? "bg-white" : "bg-white/50"}`
      },
      index
    )) })
  ] });
};
export {
  HeroSlider as default
};
