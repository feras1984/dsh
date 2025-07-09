import React from 'react';
import BlockProps from "@/Interfaces/Site/BlockProps";
import {GalleryContextProvider} from "@/Components/Site/GalleryViewer/Context/GalleryContext";
import FlatAlbum from "@/Components/Site/GalleryViewer/GalleryComponents/SliderComponents/FlatAlbum";
import SliderContainer from "@/Components/Site/GalleryViewer/GalleryComponents/SliderContainer";
import {
    Box,
} from "@mui/material";

const GalleryDetails: React.FC<{gallery: BlockProps}> = ({gallery}) => {
    const album = gallery.images;
    const title = gallery.title;
    const uri = '/file/blocks/';

    const [open, setOpen] = React.useState<boolean>(false);

    const openViewer = () => setOpen(true);
    const closeViewer = () => setOpen(false);
    return (
        <Box className="relative">
            <GalleryContextProvider
                value={{open,
                    openViewer,
                    closeViewer,
                    album, uri,
                    title
                }}>
                <FlatAlbum />
                <SliderContainer></SliderContainer>
            </GalleryContextProvider>
        </Box>
    );
};

export default GalleryDetails;
