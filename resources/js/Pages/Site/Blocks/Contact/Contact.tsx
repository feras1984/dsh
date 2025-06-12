import React from 'react';
import BlockProps from "@/Interfaces/Site/BlockProps";
import {Box} from "@mui/material";
import ContactPage from "@/Components/Site/Contact/Contact";

const Contact: React.FC<{contact: BlockProps []}> = ({ contact}) => {
    return (
        <Box sx={{maxWidth: 700, margin: 'auto'}}>
            <ContactPage></ContactPage>
        </Box>
    );
};

export default Contact;
