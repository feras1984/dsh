import {SnackbarProps} from "@mui/material/Snackbar/Snackbar";

interface CustomSnackbarProps extends SnackbarProps {
    message: string;
    severity: "success" | "error";
}

export default CustomSnackbarProps;
