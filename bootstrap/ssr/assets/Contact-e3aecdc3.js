import { jsxs, jsx } from "react/jsx-runtime";
import { Box, Stack, Button, Typography } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";
import { S as SectionTitle } from "./SectionTitle-76ecd5f3.js";
import { u as useSnackbarHook, C as CustomSnackbar } from "./CustomSnackbar-a775827f.js";
import { z } from "zod";
import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Container } from "typedi";
import "reflect-metadata";
import { E as EmailService, u as useRecaptcha } from "./useRecaptcha-74637499.js";
import { V as ValidatedInput } from "./ValidatedInput-4e590f68.js";
import { u as useAppDispatch, s as setSpinner } from "../app.js";
import { usePage, Link } from "@inertiajs/react";
import SendIcon from "@mui/icons-material/Send.js";
import ReCAPTCHA from "react-google-recaptcha";
import "@mui/material/Alert/index.js";
import "axios";
import "@mui/material/InputAdornment/index.js";
import "react-dom/client";
import "react-redux";
import "@reduxjs/toolkit";
import "localstorage-slim";
import "crypto-js";
import "crypto-js/enc-utf8.js";
import "@mui/x-date-pickers";
import "@mui/x-date-pickers/AdapterDateFns/index.js";
import "i18next";
import "@syncfusion/ej2-base";
const Contact$1 = () => {
  const { t } = useTranslation();
  const emailService = Container.get(EmailService);
  const dispatch = useAppDispatch();
  const [disable, setDisable] = React.useState(false);
  const lang = usePage().props.lang;
  const { capchaToken, recaptchaRef, handleRecaptcha } = useRecaptcha();
  const { snackbar, setSnackbar, handleClose } = useSnackbarHook();
  const contactSchema = z.object({
    name: z.string({ required_error: "The name is required" }).min(3, { message: t("name-is-required") }),
    subject: z.string(),
    email: z.string().email({ message: t("invalid-email") }),
    message: z.string().min(10, { message: t("minimum-length", { length: 10 }) }).max(500, { message: t("maximum-length", { length: 500 }) })
  });
  const methods = useForm({
    mode: "onBlur",
    reValidateMode: "onBlur",
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      subject: "",
      email: "",
      message: ""
    }
  });
  const onSubmit = () => {
    if (!capchaToken)
      return;
    const formData = new FormData();
    formData.append("name", methods.getValues("name"));
    formData.append("subject", methods.getValues("subject"));
    formData.append("email", methods.getValues("email"));
    formData.append("message", methods.getValues("message"));
    setDisable(true);
    emailService.sendEmail(formData).then((response) => {
      setDisable(false);
      setSnackbar(
        (snackbarState) => ({ ...snackbarState, open: true, message: "Your Message has been sent", severity: "success" })
      );
    }).catch((error) => {
      dispatch(setSpinner(false));
      setDisable(false);
      setSnackbar(
        (snackbarState) => ({ ...snackbarState, open: true, message: "Error while sending your message", severity: "error" })
      );
    });
  };
  return /* @__PURE__ */ jsxs(Box, { className: "p-[16px]", children: [
    /* @__PURE__ */ jsx(Link, { href: `/${lang}/block/contact-us`, children: /* @__PURE__ */ jsx(SectionTitle, { title: t("contact-us") }) }),
    /* @__PURE__ */ jsxs(Box, { sx: { maxWidth: "700px", margin: "auto" }, children: [
      /* @__PURE__ */ jsx(FormProvider, { ...methods, children: /* @__PURE__ */ jsxs(
        Box,
        {
          component: "form",
          sx: {
            "& .MuiTextField-root": { m: 1, width: "100%" }
          },
          noValidate: true,
          autoComplete: "off",
          onSubmit: methods.handleSubmit(onSubmit),
          children: [
            /* @__PURE__ */ jsx(
              ValidatedInput,
              {
                controlName: "name",
                name: `name`,
                id: "name",
                label: t("name"),
                placeholder: `John Doe`,
                control: methods.control
              }
            ),
            /* @__PURE__ */ jsx(
              ValidatedInput,
              {
                controlName: "subject",
                name: `subject`,
                id: "subject",
                label: t("subject"),
                placeholder: ``,
                control: methods.control
              }
            ),
            /* @__PURE__ */ jsx(
              ValidatedInput,
              {
                controlName: "email",
                name: `email`,
                id: "email",
                label: t("email"),
                placeholder: "john@email.com",
                control: methods.control
              }
            ),
            /* @__PURE__ */ jsx(
              ValidatedInput,
              {
                controlName: "message",
                name: "message",
                id: "message",
                label: t("message"),
                placeholder: `Your Message`,
                control: methods.control,
                multiline: true,
                rows: 8
              }
            ),
            /* @__PURE__ */ jsx(
              ReCAPTCHA,
              {
                ref: recaptchaRef,
                sitekey: "6Leje_giAAAAAMio7HlckkPmbSjnsO3YQxbu16D2",
                onChange: handleRecaptcha
              }
            ),
            /* @__PURE__ */ jsx(
              Stack,
              {
                direction: "row",
                justifyContent: "flex-start",
                alignItems: "center",
                spacing: 2,
                className: "m-[8px]",
                children: /* @__PURE__ */ jsx(
                  Button,
                  {
                    type: "submit",
                    size: "small",
                    variant: "contained",
                    color: "secondary",
                    disabled: disable,
                    startIcon: /* @__PURE__ */ jsx(SendIcon, {}),
                    children: /* @__PURE__ */ jsxs(Typography, { variant: "body2", className: "px-[5px]", children: [
                      t("send"),
                      " ",
                      t("your-message")
                    ] })
                  }
                )
              }
            )
          ]
        }
      ) }),
      /* @__PURE__ */ jsx(
        CustomSnackbar,
        {
          open: snackbar.open,
          message: snackbar.message,
          onClose: handleClose,
          severity: snackbar.severity
        }
      )
    ] }),
    /* @__PURE__ */ jsx("div", { className: "my-[32px]", children: /* @__PURE__ */ jsx(
      "iframe",
      {
        src: "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3606.8001551806415!2d55.369926275385495!3d25.310917577637888!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjXCsDE4JzM5LjMiTiA1NcKwMjInMjEuMCJF!5e0!3m2!1sen!2sae!4v1721477313942!5m2!1sen!2sae",
        width: "100%",
        height: "450",
        loading: "lazy",
        referrerPolicy: "no-referrer-when-downgrade"
      }
    ) })
  ] });
};
const Contact = ({ contact }) => {
  return /* @__PURE__ */ jsx(Box, { sx: { maxWidth: 700, margin: "auto" }, children: /* @__PURE__ */ jsx(Contact$1, {}) });
};
export {
  Contact as default
};
