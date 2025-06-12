import { jsx } from "react/jsx-runtime";
import { Box, Typography } from "@mui/material";
const SectionTitle = ({ title, ...props }) => {
  return /* @__PURE__ */ jsx(
    Box,
    {
      className: "p-[16px]",
      children: /* @__PURE__ */ jsx(
        Typography,
        {
          ...props,
          variant: "h3",
          align: "center",
          sx: { fontWeight: "bold", color: "#E02027", fontSize: { xs: "1.5rem", md: "3rem" } },
          children: title
        }
      )
    }
  );
};
export {
  SectionTitle as S
};
