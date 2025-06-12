import { jsx, jsxs } from "react/jsx-runtime";
import { Box, Grid } from "@mui/material";
import { useRef } from "react";
import { S as SectionTitle } from "./SectionTitle-76ecd5f3.js";
import { useTranslation } from "react-i18next";
/* empty css                     */import { usePage } from "@inertiajs/react";
import { styled } from "@mui/material/styles/index.js";
import { s as styles } from "./styles.module-528aad3a.js";
import { gsap, Power3 } from "gsap";
import { useGSAP } from "@gsap/react";
const ClientCard = ({ block }) => {
  usePage().props.lang;
  const CardStyle = styled(Box)({
    cursor: "pointer",
    position: "relative",
    height: "150px",
    width: "150px",
    borderRadius: "100%",
    marginBottom: "32px",
    "&:before": {
      borderRadius: "100%",
      position: "absolute",
      content: '""',
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      backgroundImage: `url(/file/blocks/${block.images[0].url})`,
      backgroundPosition: "center",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      filter: "grayscale(0.9)",
      transition: "filter 0.3s ease-in-out"
    }
    //
    // '&:after' : {
    //     borderRadius: '100%',
    //     position: 'absolute',
    //     content: '""',
    //     bottom: 0,
    //     left: 0,
    //     width: '100%',
    //     height: '100%',
    //     backgroundColor: 'rgba(0, 0, 0, 0.5)',
    //     // backgroundImage: `url(/file/blocks/${block.images[0].url})`,
    //     // backgroundImage: 'transparent',
    //     backgroundPosition: 'center',
    //     backgroundSize: 'cover',
    //     backgroundRepeat: 'no-repeat',
    //     filter: 'grayscale(0.9)',
    //     zIndex: 10,
    //     transition: 'height 0.3s ease-in-out',
    // },
    //
    // '&:hover' : {
    //     '&:after' : {
    //         height: '0%',
    //         transition: 'height 0.3s ease-in-out',
    //     },
    //
    //     '&:before' : {
    //         filter: 'grayscale(0.1)',
    //         transition: 'filter 0.3s ease-in-out',
    //     },
    // }
  });
  return /* @__PURE__ */ jsx(Box, { children: /* @__PURE__ */ jsx(CardStyle, { children: /* @__PURE__ */ jsx(Box, { className: `absolute w-full h-[100px] bottom-0 ${styles.cardContainer}`, children: /* @__PURE__ */ jsx(
    "p",
    {
      className: `${styles.textTitle} text-title text-xl font-bold uppercase`,
      children: block.title
    }
  ) }) }) });
};
const Clients = ({ blocks }) => {
  const { t } = useTranslation();
  const containerRef = useRef(null);
  const itemRef = useRef([]);
  itemRef.current = [];
  const addToRefs = (el) => {
    if (el && !itemRef.current.includes(el)) {
      itemRef.current.push(el);
    }
  };
  useGSAP(() => {
    gsap.timeline().from(containerRef.current, {
      opacity: 0,
      duration: 1,
      ease: Power3.easeOut,
      scrollTrigger: {
        trigger: containerRef.current,
        toggleActions: "restart none none none",
        scrub: true
      }
    }).from(itemRef.current, {
      opacity: 0,
      duration: 0.8,
      // scale: 0.5,
      y: 20,
      // x: -100,
      ease: Power3.easeOut,
      stagger: 0.2,
      scrollTrigger: {
        trigger: containerRef.current,
        toggleActions: "restart none none none",
        scrub: true
      }
    }, "+=0.5");
  }, { scope: containerRef });
  return /* @__PURE__ */ jsxs(Box, { className: "m-[16px]  min-h-[350px]", children: [
    /* @__PURE__ */ jsx(SectionTitle, { title: t("our-clients") }),
    /* @__PURE__ */ jsx(
      Grid,
      {
        container: true,
        direction: "row",
        spacing: 2,
        justifyContent: "space-between",
        alignItems: "center",
        ref: containerRef,
        children: blocks.map((slider, key) => /* @__PURE__ */ jsx(
          Grid,
          {
            item: true,
            columns: { xs: 6, sm: 3, md: 3 },
            ref: (el) => addToRefs(el),
            children: /* @__PURE__ */ jsx(ClientCard, { block: slider })
          },
          key + "-" + slider.title
        ))
      }
    )
  ] });
};
const ClientsList = ({ clients }) => {
  return /* @__PURE__ */ jsx(Box, { className: "p-[16px]", children: /* @__PURE__ */ jsx(Clients, { blocks: clients }) });
};
export {
  ClientsList as default
};
