import React from "react";

import AdminLayout from "@/Layouts/Admin/AdminLayout";
import {Typography} from "@mui/material";
import {Head, usePage} from "@inertiajs/react";
import Statistics from "@/Pages/Admin/Home/Partials/Statistics";
import OrderTimeline from "@/Pages/Admin/Home/Partials/OrderTimeline";
import ProductActivities from "@/Pages/Admin/Home/Partials/ProductActivities";
import {
    Divider,
} from "@mui/material";
import TopProducts from "@/Pages/Admin/Home/Partials/TopProducts";

const Home = () => {
    const user = usePage().props.auth.user;
    return (
        <AdminLayout>
            <Head title="Home"></Head>
            <Statistics />
            <Divider variant="middle"></Divider>
            <OrderTimeline />
            <Divider variant="middle"></Divider>
            <ProductActivities />
            <Divider variant="middle"></Divider>
            <TopProducts />
        </AdminLayout>
    );
}

export default Home;
