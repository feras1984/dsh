import React from 'react';
import {
    Box,
} from "@mui/material";
import BlockProps from "@/Interfaces/Site/BlockProps";

const GalleryCard: React.FC<{gallery: BlockProps}> = ({gallery}) => {
    console.log('gallery: ', gallery);
    return (
        <Box>
            Gallery Card
        </Box>
    );
};

export default GalleryCard;
