import { jsx, jsxs } from "react/jsx-runtime";
import { Modal, Box, Typography, Stack } from "@mui/material";
import { C as CustomButton } from "./CustomButton-4b9588a9.js";
const modalStyle = "_modalStyle_1bxe6_1";
const styles = {
  modalStyle
};
const DeleteModal = ({
  open,
  onClose,
  message = "",
  confirmDelete
}) => {
  return /* @__PURE__ */ jsx(
    Modal,
    {
      open,
      onClose,
      "aria-labelledby": "modal-modal-title",
      "aria-describedby": "modal-modal-description",
      children: /* @__PURE__ */ jsxs(Box, { className: styles.modalStyle, sx: {
        bgcolor: "background.paper",
        color: "text.primary",
        border: `2px solid`
      }, children: [
        /* @__PURE__ */ jsx(Typography, { id: "modal-modal-title", variant: "h6", component: "h2", children: "Confirm Deletion Message" }),
        /* @__PURE__ */ jsx(Typography, { id: "modal-modal-description", sx: { mt: 2 }, children: message }),
        /* @__PURE__ */ jsx(
          Stack,
          {
            direction: "row",
            justifyContent: "flex-start",
            alignItems: "center",
            spacing: 2,
            className: "m-[8px]",
            children: /* @__PURE__ */ jsx(CustomButton, { task: "delete", text: "", onClick: confirmDelete })
          }
        )
      ] })
    }
  );
};
export {
  DeleteModal as D
};
