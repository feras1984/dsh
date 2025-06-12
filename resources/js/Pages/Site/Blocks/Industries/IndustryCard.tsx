import React from 'react';
import BlockProps from "@/Interfaces/Site/BlockProps";
import {Box, Typography} from "@mui/material";
import styles from "./styles.module.scss";

const IndustryCard: React.FC<{service: BlockProps}> = ({service}) => {
    return (
        <Box className="p-[32px]">
            <Box className={styles.serviceCard}>
                <Box className={styles.boxContainer}>
                    <Typography variant="h3" component="h3" align="center" sx={{fontWeight: 'bold'}}>{service.title}</Typography>
                    {/*<Box className={`m-[32px] p-[16px] ${styles.imgAria}`}>*/}
                    {/*    <img src={`/file/blocks/${service.images[0].url}`} alt=""/>*/}
                    {/*</Box>*/}
                    <Box className={`mt-[16px] p-[16px] ${styles.enableList}`} dangerouslySetInnerHTML={{__html: service.description}}>
                    </Box>
                </Box>

            </Box>
        </Box>
    );
};

export default IndustryCard;
