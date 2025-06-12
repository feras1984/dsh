import React from 'react';
import styles from "./styles.module.scss";
import {
    Box,
    Container,
    Typography,
} from "@mui/material";
import BlockProps from "@/Interfaces/Site/BlockProps";

const MissionDetails: React.FC<{block: BlockProps, order: number}> = ({block, order}) => {
    const image = block.images[0].url;
    console.log('block: ', block);
    return (
        <Box className="m-[16px] relative">
            <Box className={`m-[32px] p-[16px] ${styles.imgBorder} ${order % 2 === 0 ? styles.left : styles.right}`}>
                <img src={`/file/blocks/${image}`} alt=""/>
            </Box>
            <Container >
                <Box className={`${styles.descriptionAria} p-[16px] ${order % 2 === 0 ? styles.descLeft : styles.descRight}`}>
                    <Typography
                        variant="h3"
                        component="h3"
                        className="p-[16px] uppercase"
                        sx={{fontWeight: 'bold'}}
                    >
                        {block.title}
                    </Typography>
                    <Box className="styled-list" dangerouslySetInnerHTML={{__html: block.description}}></Box>
                </Box>
            </Container>
        </Box>
    );
};

export default MissionDetails;
