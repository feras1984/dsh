import React from 'react';
import LocaleProduct from "@/models/product/LocaleProduct";
import {addToCart} from "@/Redux/Reducers/CartSlice/CartSlice";
import {useSwiperContext} from "@/Pages/Site/Home/Swiper/SwiperContext";
import styles from "@/Pages/Site/Home/Swiper/styles.module.scss";
import OfferBadgeHorizontal from "@/Components/Site/Products/OfferBadge/OfferBadgeHorizontal";
import {Box} from "@mui/material";

const ProductImage: React.FC<{product: LocaleProduct}> = ({product}) => {
    const [timeId, setTimeId] = React.useState<NodeJS.Timeout | null>(null);
    const {handleProduct} = useSwiperContext();

    const handleHover = async (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        setTimeId(setTimeout(() => {
            // setProduct(currentProduct);
            handleProduct(product);
        }, 1000));
    }
    const handleMouseLeave = () => {
        // setProduct(null);
        if (timeId) clearTimeout(timeId);
        setTimeId(null);
    }
    return (
        <Box
            className= {`${styles.imgContainer} cursor-pointer`}
            onMouseEnter={(e) => handleHover(e)}
            onMouseLeave={handleMouseLeave}
        >
            <img src={`/file/products/${product.images[0].url}`} alt={product.name}/>
            {product.offer && <OfferBadgeHorizontal offer={product.offer}></OfferBadgeHorizontal>}
        </Box>
    );
};

export default ProductImage;
