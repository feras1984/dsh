import { jsx, jsxs } from "react/jsx-runtime";
import React from "react";
import { gsap } from "gsap";
const AboutUs = ({ aboutUs }) => {
  const aboutSectionRef = React.useRef(null);
  const aboutTextRef = React.useRef(null);
  const aboutImageRef = React.useRef(null);
  const aboutBadgeRef = React.useRef(null);
  React.useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: aboutSectionRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      });
      tl.fromTo(
        aboutSectionRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }
      ).fromTo(
        aboutTextRef.current,
        { opacity: 0, x: -50 },
        { opacity: 1, x: 0, duration: 0.8, ease: "power2.out" },
        "-=0.4"
      ).fromTo(
        aboutImageRef.current,
        { opacity: 0, x: 50 },
        { opacity: 1, x: 0, duration: 0.8, ease: "power2.out" },
        "-=0.6"
      ).fromTo(
        aboutBadgeRef.current,
        { opacity: 0, scale: 0 },
        { opacity: 1, scale: 1, duration: 0.6, ease: "back.out(1.7)" },
        "-=0.2"
      );
    });
    return () => ctx.revert();
  }, []);
  return /* @__PURE__ */ jsx(
    "section",
    {
      ref: aboutSectionRef,
      className: "py-20 bg-secondary/50",
      children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-12 items-center", children: [
        /* @__PURE__ */ jsxs("div", { ref: aboutTextRef, children: [
          /* @__PURE__ */ jsx("h2", { className: "text-4xl font-bold mb-6 text-foreground", children: aboutUs.title }),
          /* @__PURE__ */ jsx(
            "p",
            {
              className: "text-lg text-muted-foreground mb-6 leading-relaxed",
              dangerouslySetInnerHTML: { __html: aboutUs.description }
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("div", { ref: aboutImageRef, className: "relative", children: [
          /* @__PURE__ */ jsx(
            "img",
            {
              src: `/file/blocks/${aboutUs.images[0].url}`,
              alt: "D S H Team",
              className: "rounded-lg shadow-2xl w-full h-96 object-cover transition-transform duration-300 hover:scale-105"
            }
          ),
          /* @__PURE__ */ jsxs(
            "div",
            {
              ref: aboutBadgeRef,
              className: "absolute -bottom-6 -left-6 bg-primary text-primary-foreground p-6 rounded-lg shadow-xl",
              children: [
                /* @__PURE__ */ jsx("div", { className: "text-3xl font-bold", children: "25+" }),
                /* @__PURE__ */ jsx("div", { className: "text-sm", children: "Years of Excellence" })
              ]
            }
          )
        ] })
      ] }) })
    }
  );
};
export {
  AboutUs as default
};
