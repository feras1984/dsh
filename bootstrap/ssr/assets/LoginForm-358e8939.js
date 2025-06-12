import { jsx, jsxs } from "react/jsx-runtime";
import { useEffect } from "react";
import { Box, Button } from "@mui/material";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm as useForm$1, FormProvider } from "react-hook-form";
import { useForm } from "@inertiajs/react";
import "reflect-metadata";
import { V as ValidatedInput } from "./ValidatedInput-d372d269.js";
import "@mui/material/InputAdornment/index.js";
const LoginForm = ({ status, canResetPassword }) => {
  const { data, setData, post, processing, errors, reset } = useForm({
    email: "",
    password: "",
    remember: false
  });
  const emailInput = document.getElementById("email");
  if (emailInput) {
    emailInput.addEventListener("change", (e) => {
      errors.email = "";
      setData("email", e.target.value);
    });
  }
  const passwordInput = document.getElementById("password");
  if (passwordInput) {
    errors.password = "";
    passwordInput.addEventListener("change", (e) => {
      setData("password", e.target.value);
    });
  }
  const rememberInput = document.getElementById("remember");
  if (rememberInput) {
    rememberInput.addEventListener("change", (e) => {
      setData("remember", e.target.value);
    });
  }
  const loginSchema = z.object({
    email: z.string().email(),
    password: z.string().min(8, "Password must be at least 8 characters")
    // remember: z.boolean(),
  });
  const methods = useForm$1({
    mode: "onBlur",
    reValidateMode: "onBlur",
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: ""
      // remember: false,
    }
  });
  const onSubmit = async (formData) => {
    await post(route("admin.login"));
  };
  useEffect(() => {
    return () => {
      reset("password");
      methods.reset({
        password: ""
      });
    };
  }, [emailInput, passwordInput, rememberInput]);
  return /* @__PURE__ */ jsx(FormProvider, { ...methods, children: /* @__PURE__ */ jsxs(
    Box,
    {
      component: "form",
      sx: {
        "& .MuiTextField-root": { m: 1 }
      },
      noValidate: true,
      autoComplete: "off",
      onSubmit: methods.handleSubmit(onSubmit),
      children: [
        status && /* @__PURE__ */ jsx("div", { className: "mb-4 font-medium text-sm text-green-600", children: status }),
        /* @__PURE__ */ jsx(
          ValidatedInput,
          {
            name: "email",
            id: "email",
            type: "email",
            controlName: "email",
            methods,
            label: "Email",
            placeholder: "example@email.com",
            errors: errors.email
          }
        ),
        /* @__PURE__ */ jsx(
          ValidatedInput,
          {
            name: "password",
            id: "password",
            type: "password",
            controlName: "password",
            methods,
            label: "Password",
            errors: errors.password
          }
        ),
        /* @__PURE__ */ jsx("div", { className: "flex justify-between items-center mt-3", children: /* @__PURE__ */ jsx(Button, { type: "submit", variant: "outlined", disabled: processing, children: "Login" }) })
      ]
    }
  ) });
};
export {
  LoginForm as default
};
