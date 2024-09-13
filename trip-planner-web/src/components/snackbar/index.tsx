import { Alert, Snackbar } from "@mui/material";
import { useState } from "react";

interface SnackbarAlertProps {
  message: string;
  severity: "success" | "info" | "warning" | "error";
}

export function SnackbarAlert(props: SnackbarAlertProps) {
  const [open, setOpen] = useState(true);

  function handleClose() {
    setOpen(!open);
  }

  return (
    <Snackbar
      open={open}
      autoHideDuration={4000}
      onClose={handleClose}
      anchorOrigin={{ horizontal: "center", vertical: "top" }}
    >
      <Alert
        onClose={handleClose}
        severity={props.severity}
        variant="filled"
        sx={{ width: "100%" }}
      >
        {props.message}
      </Alert>
    </Snackbar>
  );
}
