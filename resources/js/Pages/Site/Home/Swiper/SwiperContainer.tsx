import React from "react";
import LocaleCategory from "@/models/category/LocaleCategory";
import {SwiperProvider} from "./SwiperContext";
import LocaleProduct from "@/models/product/LocaleProduct";
import {Box, Typography} from "@mui/material";
import ProductSwiper from "@/Pages/Site/Home/Swiper/Components/ProductSwiper";
import ProductModal from "@/Pages/Site/Home/Swiper/Components/ProductModal";
import {Container as ServiceContainer} from "typedi";
import "reflect-metadata";
import ProductService from "@/Services/ProductService/ProductService";
import {usePage} from "@inertiajs/react";

const SwiperContainer: React.FC<{categories: LocaleCategory []}> = ({categories}) => {
    const productService = ServiceContainer.get(ProductService);
    const lang = usePage().props.lang;
    const [product, setProduct] = React.useState<LocaleProduct | null>(null);

    const handleProduct = React.useCallback((product: LocaleProduct | null) => {
        if (product) {
            productService.getLocaleProduct(lang, product.id).then((response) => {
                setProduct(response.data);
            });
        } else {
            setProduct(null);
        }
    }, [product]);

    return (
        <SwiperProvider value={{categories, handleProduct}}>
            <Box className="my-[32px]">
                <Box className="px-[16px]">
                    <Typography component="h5" variant="h5" className="uppercase" sx={{fontWeight: 600, marginBottom: '16px'}}>Top Products</Typography>
                </Box>
                <ProductSwiper item="top"></ProductSwiper>
            </Box>

            {/*<Box className="my-[32px]">*/}
            {/*    <Box className="px-[16px]">*/}
            {/*        <Typography component="h5" variant="h5" className="uppercase" sx={{fontWeight: 600, marginBottom: '16px'}}>{cat.name}</Typography>*/}
            {/*    </Box>*/}
            {/*    <ProductSwiper item="all" categoryId={cat.id}></ProductSwiper>*/}
            {/*</Box>*/}

            <Box className="my-[32px]">
                <Box className="px-[16px]">
                    <Typography component="h5" variant="h5" className="uppercase" sx={{fontWeight: 600, marginBottom: '16px'}}>Offers</Typography>
                </Box>
                <ProductSwiper item="offer"></ProductSwiper>
            </Box>

            <Box className="my-[32px]">
                <Box className="px-[16px]">
                    <Typography component="h5" variant="h5" className="uppercase" sx={{fontWeight: 600, marginBottom: '16px'}}>New Products</Typography>
                </Box>
                <ProductSwiper item="new"></ProductSwiper>
            </Box>
            <ProductModal product={product}/>
        </SwiperProvider>
    );
}

export default SwiperContainer;
