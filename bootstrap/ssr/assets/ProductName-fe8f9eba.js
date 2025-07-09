import { jsx } from "react/jsx-runtime";
import { s as styles } from "./styles.module-29668287.js";
import { Box } from "@mui/material";
const ProductName = ({ product }) => {
  return /* @__PURE__ */ jsx(Box, { children: /* @__PURE__ */ jsx(
    "p",
    {
      className: `${styles.productName} product-title sm:text-xl md:text-xl text-start font-bold uppercase`,
      children: product.name
    }
  ) });
};
export {
  ProductName as default
};
