import React from 'react';
import BlockProps from "@/Interfaces/Site/BlockProps";
import {Box, Grid, Card, CardMedia, CardHeader, Avatar, Typography} from "@mui/material";
import {red} from "@mui/material/colors";
import ServiceCard from "@/Components/Site/Services/ServiceCard";
import styles from "./styles.module.scss";
import ServiceDetails from "./ServicesDetails";
import {Link, usePage} from "@inertiajs/react";

const ServicesList: React.FC<{services: BlockProps [], category: string}> = ({ services, category}) => {
    const lang = usePage().props.lang;
    return (
        <Box className="py-[16px]">
            <Typography
                variant="h3"
                component="h3"
                className="p-[16px] uppercase"
                sx={{fontWeight: 'bold'}}
            >
                Services
            </Typography>
            <Grid
                container
                spacing={5}
                justifyContent="center"
                alignItems="start"
                className="py-[16px]"
            >
                {
                    services.map((service, key) => (
                        <Grid
                            item
                            columns={3}
                            key={key}
                        >
                            <Link href={`/${lang}/block/details/${category}/${service.id}`}>
                                <ServiceDetails service={service}></ServiceDetails>
                            </Link>
                        </Grid>
                    ))
                }
            </Grid>
        </Box>

    );
};

export default ServicesList;
