import React from 'react';
import styles from "./styles.module.scss";
import {useImageContext} from "@/Components/images/ImagesWithInput/Context/UseImageContext";
import {CardMedia} from "@mui/material";
import {Container as ServiceContainer} from "typedi";
import "reflect-metadata";
import FileService from "@/Services/FileService/FileService";

const Layout = () => {
    const fileService = ServiceContainer.get(FileService);
    const {image, classes, className} = useImageContext();
    return (
        <CardMedia
            classes={{
                img: classes,
            }}
            component="img"
            // src={(assertImage && imageProp) ? URL.createObjectURL(imageProp) : (image || fileService.DefaultImage)}
            src={image || '/file/users/default.png'}
            alt="photo"
            className={className}
        />
    );
};

export default Layout;
