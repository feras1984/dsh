import React from 'react';
import {
    Box,
    Stack,
    Paper,
    Card,
    CardContent,
    Typography,
    Grid,
} from "@mui/material";
import {Container as ServiceContainer} from "typedi";
import "reflect-metadata";
import OrderService from "@/Services/OrderService/OrderService";
import ProductService from "@/Services/ProductService/ProductService";
import CustomerService from "@/Services/CustomerService/CustomerService";
import CommonService from "@/Services/CommonService/CommonService";
import Icon from "@/Components/Icon/Icon";
import ListItemIcon from "@mui/material/ListItemIcon";
import GppGoodIcon from "@mui/icons-material/GppGood";
import PersonIcon from "@mui/icons-material/Person";
import {LocalGroceryStore} from "@mui/icons-material";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";

const Statistics = () => {
    const customerService = ServiceContainer.get(CustomerService);
    const productService = ServiceContainer.get(ProductService);
    const orderService = ServiceContainer.get(OrderService);
    const commonService = ServiceContainer.get(CommonService);

    const [usersCount, setUsersCount] = React.useState<number>(0);
    const [productsCount, setProductsCount] = React.useState<number>(0);
    const [ordersCount, setOrdersCount] = React.useState<number>(0);
    const [totalRevenue, setTotalRevenue] = React.useState<number>(0);

    React.useEffect(() => {
        Promise.all([
            customerService.getCount(),
            productService.getCount(),
            orderService.getCount(),
            orderService.getPrice(),
        ]).then(([usersCount, productsCount, ordersCount, totalRevenue]) => {
            setUsersCount(usersCount.data);
            setProductsCount(productsCount.data);
            setOrdersCount(ordersCount.data);
            setTotalRevenue(totalRevenue.data);

        })
    }, [])

    return (
        <Box className="p-[16px]">
            <Typography component="h5" variant="h5" sx={{fontWeight: 500, marginBottom: '16px'}}>Statistics</Typography>
            <Grid container
                  spacing={3}
                  justifyContent="space-between"
                  alignItems="center">
                <Grid item xs={12} sm={6} md={3}>
                    <Card sx={{height: 150, bgcolor: '#6261cc'}}>
                        <CardContent>
                            <ListItemIcon>
                                <PersonIcon sx={{fontSize: 40}}></PersonIcon>
                            </ListItemIcon>
                            {/*<Typography variant="body2" component="h5">Users</Typography>*/}
                            <Box className="flex justify-center items-center gap-2">
                                <Typography variant="h3" component="h3" align="center" sx={{fontWeight: 700}}>
                                    {usersCount}
                                </Typography>
                                <Typography variant="body2" component="h5">
                                    {productsCount === 1 ? 'user' : 'users'}
                                </Typography>
                            </Box>

                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <Card sx={{height: 150, bgcolor: '#3d99f5'}}>
                        <CardContent>
                            {/*<Typography variant="body2" component="h5">Products</Typography>*/}
                            <ListItemIcon>
                                <GppGoodIcon sx={{ fontSize: 40 }}></GppGoodIcon>
                            </ListItemIcon>
                            <Box className="flex justify-center items-center gap-2">
                                <Typography variant="h3" component="h3" align="center" sx={{fontWeight: 700}}>
                                    {productsCount}
                                </Typography>
                                <Typography variant="body2" component="h5">
                                    {productsCount === 1 ? 'product' : 'products'}
                                </Typography>
                            </Box>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <Card sx={{height: 150, bgcolor: '#edad21'}}>
                        <CardContent>
                            <ListItemIcon>
                                <LocalGroceryStore sx={{fontSize: 40}}></LocalGroceryStore>
                            </ListItemIcon>
                            <Box className="flex justify-center items-center gap-2">
                                <Typography variant="h3" component="h3" align="center" sx={{fontWeight: 700}}>
                                    {ordersCount}
                                </Typography>
                                <Typography variant="body2" component="h5">
                                    {productsCount === 1 ? 'order' : 'orders'}
                                </Typography>
                            </Box>

                        </CardContent>
                    </Card>

                </Grid>
                <Grid item xs={12}>
                    <Card sx={{height: 150, bgcolor: '#db5d5d'}}>
                        <CardContent>
                            <ListItemIcon>
                                <MonetizationOnIcon sx={{fontSize: 40}}></MonetizationOnIcon>
                            </ListItemIcon>
                            <Box className="flex justify-center items-center gap-2">
                                <Typography variant="h3" component="h3" align="center" sx={{fontWeight: 700}}>
                                    {commonService.currencyFormatWithoutUnit(totalRevenue)}
                                </Typography>
                                <Typography variant="body2" component="h5">
                                    AED
                                </Typography>
                            </Box>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
            {/*<Stack*/}
            {/*    direction="row"*/}
            {/*    justifyContent="space-around"*/}
            {/*    alignItems="center"*/}
            {/*    flexWrap="wrap"*/}
            {/*    spacing={{ xs: 1, sm: 2 }}*/}
            {/*>*/}
            {/*    <Card sx={{minWidth: 250, height: 194}}>*/}
            {/*        <CardContent>*/}
            {/*            <Typography variant="body2" component="h5">Users</Typography>*/}
            {/*        </CardContent>*/}
            {/*    </Card>*/}

            {/*    <Card sx={{minWidth: 250, height: 194}}>*/}
            {/*        <CardContent>*/}
            {/*            <Typography variant="body2" component="h5">Products</Typography>*/}
            {/*        </CardContent>*/}
            {/*    </Card>*/}

            {/*    <Card sx={{minWidth: 250, height: 194}}>*/}
            {/*        <CardContent>*/}
            {/*            <Typography variant="body2" component="h5">Orders</Typography>*/}
            {/*        </CardContent>*/}
            {/*    </Card>*/}

            {/*    <Card sx={{minWidth: 250, height: 194}}>*/}
            {/*        <CardContent>*/}
            {/*            <Typography variant="body2" component="h5">RevenueFilter</Typography>*/}
            {/*        </CardContent>*/}
            {/*    </Card>*/}



            {/*</Stack>*/}
        </Box>
    );
};

export default Statistics;
