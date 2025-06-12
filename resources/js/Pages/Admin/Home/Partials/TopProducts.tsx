import React from 'react';
import {Container as ServiceContainer} from "typedi";
import "reflect-metadata";
import ProductService from "@/Services/ProductService/ProductService";
import CommonService from "@/Services/CommonService/CommonService";
import {
    Box, Card, CardContent, Grid, Typography,
    List, ListItem, Avatar, CardHeader, ListItemText,
} from "@mui/material";
import Product from "@/models/product/Product";
import styles from "@/Components/Site/Products/Cart/styles.module.scss";
import {grey} from "@mui/material/colors";
import ImageTemplate from "@/Components/Site/Products/ImageTemplate";

const TopProducts: React.FC = () => {
    const productService = ServiceContainer.get(ProductService);
    const [products, setProducts] = React.useState<Product []>([]);
    React.useEffect(() => {
        productService.topProducts().then(response => {
            setProducts(response.data);
        })
    }, [])
    return (
        <Box className="p-[16px]">
            <Typography component="h5" variant="h5" sx={{fontWeight: 500, marginBottom: '16px'}}>Top Products</Typography>
            <List>
                {products.map((product, index) => (
                    <ListItem key={index}>
                        <ImageTemplate product={product}></ImageTemplate>
                        <ListItemText
                            primary={product.totalSales + ' Purchases'}
                            primaryTypographyProps={{
                                fontWeight: 500,
                                fontSize: 20,
                            }}
                            // secondary={secondary ? 'Secondary text' : null}
                        />
                    </ListItem>
                ))}
            </List>
        </Box>
    );
};

export default TopProducts;
