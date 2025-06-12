import React from 'react';
import LocaleProduct from "@/models/product/LocaleProduct";
import {Link} from "@inertiajs/react";
import {Button, CardActions, IconButton, Tooltip} from "@mui/material";
import Icon from "@/Components/Icon/Icon";
import {addToCart} from "@/Redux/Reducers/CartSlice/CartSlice";
import {Container as ServiceContainer} from "typedi";
import ProductService from "@/Services/ProductService/ProductService";
import {useAppDispatch} from "@/Redux/Store/hook";

const ProductAction: React.FC<{product: LocaleProduct}> = ({product}) => {
    const productService = ServiceContainer.get(ProductService);
    const dispatch = useAppDispatch();
    const handleAddToCart = () => {
        dispatch(addToCart({quantity: 1, product, price: productService.getPrice(product)}));
    }
    return (
        <CardActions>
            <Link href={`product/${product.id}`}>
                <Button
                    size="small"
                    color="secondary"
                >More Details</Button>
            </Link>
            <Tooltip title="Add to Cart">
                <IconButton
                    size="small"
                    color="secondary"
                    onClick={() => handleAddToCart()}
                >
                    <Icon name="shopping-cart"/>
                </IconButton>
            </Tooltip>
        </CardActions>
    );
};

export default ProductAction;
