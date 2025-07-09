import React from 'react';
import {Box} from "@mui/material";
import BlockProps from "@/Interfaces/Site/BlockProps";

const ClientDetails: React.FC<{client: BlockProps}> = ({client}) => {
    return (
        <Box>
            Client Details
        </Box>
    );
};

export default ClientDetails;
