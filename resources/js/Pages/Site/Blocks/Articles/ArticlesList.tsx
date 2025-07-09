import React from 'react';
import {Link, usePage} from "@inertiajs/react";
import {Box, Grid, Typography} from "@mui/material";
import ArticleDetails from "./ArticleDetails";
import BlockProps from "@/Interfaces/Site/BlockProps";
import {useTranslation} from "react-i18next";

const ArticlesList: React.FC<{services: BlockProps [], category: string}> = ({ services, category}) => {
    const lang = usePage().props.lang;
    const { t } = useTranslation();
    return (
        <Box className="py-[16px]">
            <Typography
                variant="h3"
                component="h3"
                className="p-[16px] uppercase"
                sx={{fontWeight: 'bold'}}
            >
                {t('articles')}
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
                                <ArticleDetails service={service}></ArticleDetails>
                            </Link>
                        </Grid>
                    ))
                }
            </Grid>
        </Box>

    );
};

export default ArticlesList;
