import { jsxs, jsx } from "react/jsx-runtime";
import React from "react";
import { useTranslation } from "react-i18next";
import { Container } from "typedi";
import { E as EmailService, u as useRecaptcha } from "./useRecaptcha-74637499.js";
import "reflect-metadata";
import { u as useAppDispatch, s as setSpinner } from "../app.js";
import { usePage } from "@inertiajs/react";
import { u as useSnackbarHook, C as CustomSnackbar } from "./CustomSnackbar-a775827f.js";
import { z } from "zod";
import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Box, Stack, Button, Typography } from "@mui/material";
import { V as ValidatedInput } from "./ValidatedInput-4e590f68.js";
import SendIcon from "@mui/icons-material/Send.js";
import ReCAPTCHA from "react-google-recaptcha";
import { V as ValidatedSelect } from "./ValidatedSelect-8a375c57.js";
import { B as BlockService } from "./BlockService-2a2353d4.js";
const ContactFormV2 = ({ industries }) => {
  const { t } = useTranslation();
  const emailService = Container.get(EmailService);
  Container.get(BlockService);
  const dispatch = useAppDispatch();
  const [disable, setDisable] = React.useState(false);
  usePage().props.lang;
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
      message: "",
      mobile: "",
      company: "",
      industry: industries[0].title
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
    formData.append("mobile", methods.getValues("mobile"));
    formData.append("company", methods.getValues("company"));
    formData.append("industry", methods.getValues("industry"));
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
  return /* @__PURE__ */ jsxs(Box, { className: "mx-[32px]", children: [
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
          /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center gap-2", children: [
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
                controlName: "email",
                name: `email`,
                id: "email",
                label: t("email"),
                placeholder: "john@email.com",
                control: methods.control
              }
            )
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center gap-2", children: [
            /* @__PURE__ */ jsx(
              ValidatedInput,
              {
                required: false,
                controlName: "mobile",
                name: `mobile`,
                id: "mobile",
                label: t("mobile"),
                placeholder: "+1 (555) 123-4567",
                control: methods.control
              }
            ),
            /* @__PURE__ */ jsx(
              ValidatedInput,
              {
                required: false,
                controlName: "company",
                name: `company`,
                id: "company",
                label: t("company"),
                placeholder: "",
                control: methods.control
              }
            )
          ] }),
          /* @__PURE__ */ jsx(
            ValidatedInput,
            {
              required: false,
              controlName: "subject",
              name: `subject`,
              id: "subject",
              label: t("subject"),
              placeholder: ``,
              control: methods.control
            }
          ),
          industries.length > 0 && /* @__PURE__ */ jsx(
            ValidatedSelect,
            {
              control: methods.control,
              controlName: "industry",
              id: "industry",
              label: t("industry"),
              placeholder: t("industry"),
              withNone: false,
              items: industries.map(
                (industry) => ({
                  id: industry.title,
                  name: industry.title
                })
              )
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
                  children: /* @__PURE__ */ jsxs(
                    Typography,
                    {
                      variant: "body2",
                      className: "px-[5px]",
                      children: [
                        t("send"),
                        " ",
                        t("your-message")
                      ]
                    }
                  )
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
  ] });
};
export {
  ContactFormV2 as C
};
