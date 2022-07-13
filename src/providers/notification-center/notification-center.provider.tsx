import { useState } from "react";
import { Snackbar, Alert } from "@mui/material";
import React, { PropsWithChildren } from "react";
import { Notification, NotificationCenterContext } from "./notification-center.context";

export const NotificationCenterProvider = ({ children }: PropsWithChildren) => {
  const [notification, setNotification] = useState<Notification | undefined>(undefined);
  const [open, setOpen] = useState(false);
  const show = (notification: Notification) => {
    setNotification(notification);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <NotificationCenterContext.Provider
      value={{
        show,
      }}
    >
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <Alert onClose={handleClose} severity={notification?.severity} sx={{ width: "100%" }}>
          {notification?.message}
        </Alert>
      </Snackbar>
      {children}
    </NotificationCenterContext.Provider>
  );
};
