import React from "react";
import LocaleCategory from "@/models/category/LocaleCategory";
import LocaleProduct from "@/models/product/LocaleProduct";

const initialState = {
    categories: [] as LocaleCategory [],
    handleProduct: (product: LocaleProduct | null) => {},
}

const SwiperContext = React.createContext(initialState);

const SwiperProvider:React.FC<React.PropsWithChildren<{value: typeof initialState}>> = ({value, children}) => {
    return <SwiperContext.Provider value={value}>{children}</SwiperContext.Provider>
}

const useSwiperContext = () => {
    const context = React.useContext(SwiperContext);
    if (context === undefined) {
        throw new Error('The context must be used inside the ');
    }

    return context;
}

export {useSwiperContext, SwiperProvider};
