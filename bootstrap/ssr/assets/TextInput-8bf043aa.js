import { jsx } from "react/jsx-runtime";
import { forwardRef, useRef, useImperativeHandle, useEffect } from "react";
function InputError({ message, className = "", ...props }) {
  return message ? /* @__PURE__ */ jsx("p", { ...props, className: "text-sm text-red-600 " + className, children: message }) : null;
}
function InputLabel({ value, className = "", children, ...props }) {
  return /* @__PURE__ */ jsx("label", { ...props, className: `block font-medium text-sm text-gray-700 ` + className, children: value ? value : children });
}
const TextInput = forwardRef(function TextInput2({ type = "text", className = "", isFocused = false, ...props }, ref) {
  const localRef = useRef(null);
  useImperativeHandle(ref, () => ({
    focus: () => {
      var _a;
      return (_a = localRef.current) == null ? void 0 : _a.focus();
    }
  }));
  useEffect(() => {
    var _a;
    if (isFocused) {
      (_a = localRef.current) == null ? void 0 : _a.focus();
    }
  }, []);
  return /* @__PURE__ */ jsx(
    "input",
    {
      ...props,
      type,
      className: "border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm " + className,
      ref: localRef
    }
  );
});
export {
  InputLabel as I,
  TextInput as T,
  InputError as a
};
