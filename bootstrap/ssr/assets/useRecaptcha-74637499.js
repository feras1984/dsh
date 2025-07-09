import { Service } from "typedi";
import axios from "axios";
import { useState, useRef, useCallback, useEffect } from "react";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __decorateClass = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result)
    __defProp(target, key, result);
  return result;
};
let EmailService = class {
  constructor() {
    this.sendEmail = (formData) => {
      return axios.post(
        "/notification/send-email",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data"
          }
        }
      );
    };
  }
};
EmailService = __decorateClass([
  Service()
], EmailService);
const EmailService$1 = EmailService;
const useRecaptcha = () => {
  const [capchaToken, setCapchaToken] = useState("");
  const recaptchaRef = useRef(null);
  const handleRecaptcha = useCallback((token) => {
    setCapchaToken(token || "");
  }, []);
  useEffect(() => {
    const refreshCaptcha = () => {
      if (recaptchaRef.current && capchaToken) {
        recaptchaRef.current.reset();
        setCapchaToken("");
      }
    };
    let tokenRefreshTimeout = null;
    if (capchaToken) {
      tokenRefreshTimeout = setTimeout(refreshCaptcha, 11e4);
    }
    return () => {
      if (tokenRefreshTimeout) {
        clearTimeout(tokenRefreshTimeout);
      }
    };
  }, [capchaToken]);
  return { capchaToken, setCapchaToken, recaptchaRef, handleRecaptcha };
};
export {
  EmailService$1 as E,
  useRecaptcha as u
};
