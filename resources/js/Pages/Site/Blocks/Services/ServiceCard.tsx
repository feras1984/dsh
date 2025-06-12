import React from 'react';
import styles from "./styles.module.scss";
import {
    Box,
    Typography,
} from "@mui/material";
import BlockProps from "@/Interfaces/Site/BlockProps";

const ServiceCard: React.FC<{service: BlockProps}> = ({service})  => {
    return (
        <Box>
            <Box className={styles.serviceCard}>
                <Box className={styles.boxContainer}>
                    <Typography variant="h3" component="h3" align="center" sx={{fontWeight: 'bold'}}>{service.title}</Typography>
                    <Box className={`mt-[16px] p-[16px] ${styles.enableList}`} dangerouslySetInnerHTML={{__html: service.description}}>
                    </Box>
                </Box>
                <Box className={`m-[32px] p-[16px] ${styles.imgAria}`}>
                    <img src={`/file/blocks/${service.images[0].url}`} alt=""/>
                </Box>
            </Box>
        </Box>

    );
};

export default ServiceCard;
