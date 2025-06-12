import React from 'react';
import BlockProps from "@/Interfaces/Site/BlockProps";
import {Box} from "@mui/material";
import Clients from "@/Components/Site/Clients/Clients";


const ClientsList: React.FC<{clients: BlockProps []}> = ({clients}) => {
    return (
        <Box className="p-[16px]">
            <Clients blocks={clients}></Clients>
        </Box>
    );
};

export default ClientsList;
