import React, { useState } from "react";
import { jsx } from "react/jsx-runtime";
import { Snackbar } from "@mui/material";
import MuiAlert from "@mui/material/Alert/index.js";
const useSnackbarHook = (status) => {
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success"
  });
  const handleClose = (event, reason) => {
    if (reason === "clickaway" || reason === "timeout" || reason === "escapeKeyDown") {
      setSnackbar(
        (snackbarState) => ({ ...snackbarState, open: false, message: "" })
      );
      return;
    }
    setSnackbar(
      (snackbarState) => ({ ...snackbarState, open: false, message: "" })
    );
  };
  return { snackbar, setSnackbar, handleClose };
};
const CustomSnackbar = ({
  message,
  open,
  onClose,
  severity
}) => {
  React.forwardRef(function Alert2(props, ref) {
    return /* @__PURE__ */ jsx(MuiAlert, { elevation: 6, ref, variant: "filled", ...props });
  });
  return /* @__PURE__ */ jsx(
    Snackbar,
    {
      open,
      autoHideDuration: 2e3,
      anchorOrigin: { vertical: "bottom", horizontal: "center" },
      onClose,
      message
    }
  );
};
export {
  CustomSnackbar as C,
  useSnackbarHook as u
};
