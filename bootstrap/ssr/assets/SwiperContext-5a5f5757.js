import { jsx } from "react/jsx-runtime";
import React from "react";
const initialState = {
  categories: [],
  handleProduct: (product) => {
  }
};
const SwiperContext = React.createContext(initialState);
const SwiperProvider = ({ value, children }) => {
  return /* @__PURE__ */ jsx(SwiperContext.Provider, { value, children });
};
const useSwiperContext = () => {
  const context = React.useContext(SwiperContext);
  if (context === void 0) {
    throw new Error("The context must be used inside the ");
  }
  return context;
};
export {
  SwiperProvider,
  useSwiperContext
};
