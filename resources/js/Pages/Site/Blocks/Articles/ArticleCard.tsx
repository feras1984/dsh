import React from 'react';
import BlockProps from "@/Interfaces/Site/BlockProps";
import {Box, Typography} from "@mui/material";
import styles from "./styles.module.scss";
import {usePage} from "@inertiajs/react";

const ArticleCard: React.FC<{service: BlockProps}> = ({service}) => {
    const lang = usePage().props.lang;
    return (
        <Box>
            <Box className={styles.serviceCard}>
                <Box className="m-[32px]">
                    <Box className={`m-auto p-[16px] ${styles.imgAria}`}>
                        <img src={`/file/blocks/${service.images[0].url}`} alt=""/>
                    </Box>
                </Box>

                <Box className="p-[16px]">
                    <Box className={styles.boxContainer}>
                        <Typography variant="h3" component="h3" align="center" sx={{fontWeight: 'bold'}}>{service.title}</Typography>
                        <Typography
                            variant="body2"
                            component="p"
                            align={lang === 'ar' ? 'right' : 'left'}
                            noWrap
                            className={`px-[16px]`}
                        >{service.startDate}</Typography>
                        <Box className={`mt-[16px] p-[16px] ${styles.enableList}`} dangerouslySetInnerHTML={{__html: service.description}}>
                        </Box>
                    </Box>
                </Box>


            </Box>
        </Box>

    );
};

export default ArticleCard;
