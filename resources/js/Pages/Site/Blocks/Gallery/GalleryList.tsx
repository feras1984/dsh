import React from 'react';
import BlockProps from "@/Interfaces/Site/BlockProps";
import PhotoGalleryContainer from "@/Components/Site/GalleryViewer/PhotoGalleryContainer";
import {
    Box,
    Grid,
    Typography,
    Container,
    Stack,
} from "@mui/material";
import {Link, usePage} from "@inertiajs/react";

const GalleryList: React.FC<{galleries: BlockProps []}> = ({galleries}) => {
    const lang = usePage().props.lang;
    return (
        <Box className="py-[16px]">
            <Typography
                variant="h3"
                component="h3"
                className="p-[16px] uppercase"
                sx={{fontWeight: 'bold'}}
            >
                Galleries
            </Typography>
            <Stack
                direction="row"
                justifyContent="center"
                alignItems="center"
                spacing={5}
                useFlexGap flexWrap="wrap"
            >
                {
                    galleries.map((gallery, key) => (
                        <Box
                            key={'block-' +key}
                        >
                            {/*<Typography variant="h5">{gallery.title}</Typography>*/}
                            <Box className="relative flex justify-center">
                                <Link href={`/${lang}/block/details/gallery/${gallery.id}`}>
                                    <PhotoGalleryContainer album={gallery.images} title={gallery.title} key={key}></PhotoGalleryContainer>
                                </Link>
                            </Box>
                        </Box>
                    ))
                }
            </Stack>

        </Box>

    );
};

export default GalleryList;
