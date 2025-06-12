import React from 'react';
import {Container as ServiceContainer} from "typedi";
import "reflect-metadata";
import OrderService from "@/Services/OrderService/OrderService";
import { LineChart } from '@mui/x-charts/LineChart';
import moment from "moment";
import {
    Box,
    Typography,
} from "@mui/material";

const OrderTimeline = () => {
    const orderService = ServiceContainer.get(OrderService);
    const [orderTime, setOrderTime] =
        React.useState<{totalRevenue: number, month: string} []>([]);
    const [loading, setLoading] = React.useState<boolean>(false);

    React.useEffect(() => {
        setLoading(true);
        orderService.getTimeline()
            .then(response => {
                setLoading(false);
                setOrderTime(response.data);
            })
            .catch(error => {
                setLoading(false);
            })
    }, []);
    return (
        <Box className="p-[16px]">
            <Typography component="h5" variant="h5" sx={{fontWeight: 500, marginBottom: '16px'}}>Total Revenue</Typography>
            <Box className="flex">
                <LineChart
                    dataset={orderTime}
                    xAxis={[{
                        data: orderTime.map(ord => moment(ord.month).month() ),
                        // dataKey: 'month',
                        valueFormatter: (date: number) => moment().month(date).format('MMM/YYYY'),
                    }]}
                    series={[
                        {
                            data: orderTime.map(ord => ord.totalRevenue),
                            label: 'Total Revenue',
                            // dataKey: 'totalRevenue',
                            area: true,
                            color: '#009688',

                        },
                    ]}
                    width={500}
                    className="m-auto"
                    height={300}
                    sx={{
                        margin: 'auto',
                    }}
                />
            </Box>

        </Box>
    );
};

export default OrderTimeline;
