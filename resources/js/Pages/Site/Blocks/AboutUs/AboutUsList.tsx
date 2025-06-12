import React from 'react';
import BlockProps from "@/Interfaces/Site/BlockProps";
import {Box} from "@mui/material";
import About from "@/Components/Site/About/About";
import MissionList from "@/Pages/Site/Blocks/AboutUs/Partials/MissionList";
import AboutPage from "@/Pages/Site/Blocks/AboutUs/Partials/AboutPage";

const AboutUsList: React.FC<{about: BlockProps []}> = ({about}) => {
    const missions = about.filter((b, index) => index !== 0);
    return (
        <Box>
            {/*<About blocks={about}></About>*/}
            <AboutPage about={about[0]}/>
            <MissionList blocks={missions}></MissionList>
        </Box>

        // <About blocks={about}></About>
    );
};

export default AboutUsList;
