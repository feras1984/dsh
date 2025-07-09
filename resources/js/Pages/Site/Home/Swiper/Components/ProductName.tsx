import React from 'react';
import LocaleProduct from "@/models/product/LocaleProduct";
import styles from "@/Pages/Site/Home/Swiper/styles.module.scss";
import {Box} from "@mui/material";

const ProductName: React.FC<{product: LocaleProduct}> = ({product}) => {
    return (
        <Box>
            <p
                className={`${styles.productName} product-title sm:text-xl md:text-xl text-start font-bold uppercase`}
            >
                {product.name}
            </p>
        </Box>
    );
};

export default ProductName;
