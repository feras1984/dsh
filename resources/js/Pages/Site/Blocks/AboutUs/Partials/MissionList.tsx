import React from 'react';
import styles from "./styles.module.scss";
import {
    Box,
} from "@mui/material";
import BlockProps from "@/Interfaces/Site/BlockProps";
import MissionDetails from "@/Pages/Site/Blocks/AboutUs/Partials/MissionDetails";

const MissionList: React.FC<{blocks: BlockProps []}> = ({blocks}) => {
    return (
        <Box>
            {blocks.map((block, key) => (
                <MissionDetails block={block} key={key} order={key}/>
            ))}
        </Box>
    );
};

export default MissionList;
