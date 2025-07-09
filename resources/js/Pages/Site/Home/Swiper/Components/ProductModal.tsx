import React from 'react';
import LocaleProduct from "@/models/product/LocaleProduct";
import ProductCard from "@/Components/Site/Products/ProductCard";
import {useSwiperContext} from "../SwiperContext";
import {
    Backdrop,
    Box,
    IconButton,
} from '@mui/material';

import Icon from "@/Components/Icon/Icon";
import {grey} from "@mui/material/colors";

const ProductModal: React.FC<{product: LocaleProduct | null}> = ({product}) => {
    const [open, setOpen] = React.useState(false);
    const {handleProduct} = useSwiperContext();
    const handleClose = () => {
        handleProduct(null);
        setOpen(false);
    };
    const handleOpen = () => {
        setOpen(true);
    };

    return (
        <Backdrop
            sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open={!!product}
            // onClick={handleClose}
        >
            {product &&
                // <ProductCard product={product}/>
                <Box className="relative">
                    <ProductCard product={product}/>
                    <IconButton sx={{position: 'absolute', top: 8, right: 8, bgcolor: grey[200]}} onClick={handleClose}>
                        <Icon name="close"/>
                    </IconButton>
                </Box>
            }
        </Backdrop>
    );
};

export default ProductModal;
