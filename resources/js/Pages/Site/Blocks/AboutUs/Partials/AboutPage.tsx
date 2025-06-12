import React from 'react';
import {Box, Typography} from "@mui/material";
import styles from "@/Pages/Site/Blocks/Services/styles.module.scss";
import BlockProps from "@/Interfaces/Site/BlockProps";

const AboutPage: React.FC<{about: BlockProps}> = ({about}) => {
    return (
        <Box>
            <Box className={styles.serviceCard}>
                <Box className={styles.boxContainer}>
                    <Typography
                        variant="h3"
                        component="h3"
                        align="center"
                        sx={{fontWeight: 'bold', bgcolor: 'transparent !important'}}
                    >{about.title}</Typography>
                    <Box className="mt-[16px] p-[16px]" dangerouslySetInnerHTML={{__html: about.description}}>
                    </Box>
                </Box>
                <Box className={`m-[8px] p-[16px] ${styles.imgAria}`}>
                    <img src={`/file/blocks/${about.images[0].url}`} alt=""/>
                </Box>
            </Box>
        </Box>
    );
};

export default AboutPage;
