import React, {useState} from 'react';
import {Block} from "@/models/block/Block";
import {Container} from "typedi";
import FormService from "@/Services/FormService/FormService";
import BlockService from "@/Services/BlockService/BlockService";
import CommonService from "@/Services/CommonService/CommonService";
import {Link, router, usePage} from "@inertiajs/react";
import useSnackbarHook from "@/Hooks/SnackbarHook";
import {z} from "zod";
import {FormProvider, useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {Box, Divider, Stack, Typography, Breadcrumbs} from "@mui/material";
import ValidatedImage from "@/Components/ValidatedComponents/ValidatedImage";
import ValidatedSwitch from "@/Components/ValidatedComponents/ValidatedSwitch";
import BasicTranslation from "@/Components/Translations/BasicTranslation";
import CustomButton from "@/Components/Button/CustomButton";
import CustomSnackbar from "@/Components/Snackbar/CustomSnackbar";
import DeleteModal from "@/Components/DeleteModal/DeleteModal";
import Album from "@/Components/Album/Album";
import Image from "@/models/files/File";

const GalleryUpdate: React.FC<{category: string, block: Block}> = ({category, block}) => {
    const formService = Container.get(FormService);
    const blockService = Container.get(BlockService);
    const commonService = Container.get(CommonService);
    const [selectedBlock, setSelectedBlock] = useState<Block>({...block});
    const [selectedImages, setSelectedImages] = useState<Image []>(block.images.filter(image => !image.isCover));
    const languages = usePage().props.settings.languages;
    // =========================================================================================
    // Snackbar configuration section:

    const {snackbar, setSnackbar, handleClose} =
        useSnackbarHook({open: false, message: '', severity: "success"});

    // =========================================================================================
    // Handle Modal for Delete:
    const [openModal, setOpenModal] = useState<boolean>(false);
    const handleCloseModal = () => {
        setOpenModal(false);
    }

    const handleOpenModal = () => {
        setOpenModal(true);
    }

    // =========================================================================================

    const blockSchema = z.object({
        isActive: z.boolean().default(true),
        // Record key is "ar" or "en" of length 2:
        translations: z.record(z.string().length(2),z.object({
            name: z.string().min(3, {message: 'Title should be at least 3 characters!'}),
            // description: z.string().max(100, {message: " Description shouldn't exceed 100 characters!"})
        })),
    });

    type blockSchemaType = z.infer<typeof blockSchema>;

    //TODO: comply methods with z.infer type:
    const methods = useForm({
        mode: "onBlur",
        reValidateMode: "onBlur",
        resolver: zodResolver(blockSchema),
        defaultValues: {
            isActive: selectedBlock.isActive,
            image: (selectedBlock.images[0].url as (File | string)),
            translations: blockService.getTranslationsDetails(selectedBlock.translations),
        }
    });

    // =========================================================================================
    // Handle image upload:

    const onUpload = () => {
        const imageId = selectedBlock.images.find(img => img.isCover)?.id || -1;
        const formData = new FormData();
        formData.append('image', (methods.getValues('image') as Blob));
        formData.append('imageId', String(imageId));
        blockService.uploadImage(formData, block.id).then(response => {
            setSelectedBlock(response.data);
            setSnackbar(snackbarState =>
                ({ ...snackbarState, open: true, message: 'Image has been updated!', severity: "success" })
            );
        }).catch(error => {
            setSnackbar(snackbarState =>
                ({ ...snackbarState, open: true, message: 'Error Happened while uploading image!', severity: "error" })
            );
        })
    }

    // =========================================================================================
    // Handle delete block

    const deleteBlock = () => {
        setOpenModal(false);
        blockService.deleteBlock(block.id)
            .then(response => {
                setSnackbar(snackbarState =>
                    ({ ...snackbarState, open: true, message: 'Block has been deleted!', severity: "success" })
                );
                router.get('/admin/website/get-block/' + block.category);
            })
            .catch(error => {
                setSnackbar(snackbarState =>
                    ({ ...snackbarState, open: true, message: 'Error Happened while deleting block!', severity: "error" })
                );
            })
    }

    // =========================================================================================
    // Handle Switch button:

    const receiveSwitchState = (value: boolean) => {
        const formData = new FormData();
        formData.append('isActive', String(value));

        blockService.blockActivation(formData, block.id).then(response => {
            setSelectedBlock(response.data);
            setSnackbar(snackbarState =>
                ({ ...snackbarState, open: true, message: 'Block status has been successfully updated!', severity: "success" })
            );
        }).catch(error => {
            setSnackbar(snackbarState =>
                ({ ...snackbarState, open: true, message: 'Error Happened while updating block status!', severity: "error" })
            );
        })
    }

    const onSubmit =  () => {
        const formData = new FormData();
        formData.append('isActive', String(methods.getValues('isActive')));
        formData.append('translations', JSON.stringify(methods.getValues('translations')));
        formData.append('blockId', String(block.id));

        blockService.updateBlock(formData, block.id).then(response => {
            setSelectedBlock(response.data);
            setSnackbar(snackbarState =>
                ({ ...snackbarState, open: true, message: 'The block has been updated', severity: "success" })
            );
        }).catch(error => {
            setSnackbar(snackbarState =>
                ({ ...snackbarState, open: true, message: 'Error Happened while updating block', severity: "error" })
            );
        })
    }

    // =========================================================================================
    // Handle Adding image to album:
    const addAlbumImage = (file: File | null) => {
        const formData = new FormData();
        formData.append('image', (file as Blob));
        formData.append('isCover', 'false');
        blockService.addImage(formData, selectedBlock.id).then(response => {
            setSelectedBlock(response.data);
            setSelectedImages(response.data.images.filter(image => !image.isCover));
            setSnackbar(snackbarState =>
                ({ ...snackbarState, open: true, message: 'Image has been added!', severity: "success" })
            );
        }).catch(error => {
            setSnackbar(snackbarState =>
                ({ ...snackbarState, open: true, message: 'Error Happened while adding image!', severity: "error" })
            );
        })
    }

    // =========================================================================================
    // Handle updating image to album:
    const updateAlbumImage = (file: File | null, id: number) => {
        const formData = new FormData();
        formData.append('image', (file as Blob));
        formData.append('imageId', String(id));
        blockService.uploadImage(formData, block.id).then(response => {
            setSelectedBlock(response.data);
            setSelectedImages(response.data.images.filter(image => !image.isCover));
            setSnackbar(snackbarState =>
                ({ ...snackbarState, open: true, message: 'Image has been updated!', severity: "success" })
            );
        }).catch(error => {
            setSnackbar(snackbarState =>
                ({ ...snackbarState, open: true, message: 'Error Happened while uploading image!', severity: "error" })
            );
        })
    }

    // =========================================================================================
    // Handle deleting image from album:
    const deleteAlbumImage = (id: number) => {
        const formData = new FormData();
        formData.append('imageId', String(id));
        blockService.deleteImage(formData, block.id).then(response => {
            setSelectedBlock(response.data);
            setSelectedImages(response.data.images.filter(image => !image.isCover));
            setSnackbar(snackbarState =>
                ({ ...snackbarState, open: true, message: 'Image has been deleted!', severity: "success" })
            );
        }).catch(error => {
            setSnackbar(snackbarState =>
                ({ ...snackbarState, open: true, message: 'Error Happened while deleting image!', severity: "error" })
            );
        })
    }

    // =========================================================================================

    React.useEffect(() => {
        methods.getValues('image');
    }, [methods]);
    return (
        <Box>
            <Breadcrumbs>
                <Link href={`/admin/website/get-block/` + block.category}>Back to {block.category}</Link>
                <Typography>Update {blockService.getBlockName(selectedBlock)}</Typography>
            </Breadcrumbs>
            <Box className="p-[16px]">
                <Typography variant="h5">Update {blockService.getBlockName(selectedBlock)}</Typography>
            </Box>

            <FormProvider {...methods}>
                <Box
                    component="form"
                    sx={{
                        '& .MuiTextField-root': { m: 1, width: '100%' },
                    }}
                    noValidate
                    autoComplete="off"
                    onSubmit={methods.handleSubmit(onSubmit)}
                >
                    <ValidatedImage
                        controllerName="image"
                        methods={methods}
                        image={blockService.getBlockImage(block)}
                        onUpload={onUpload}
                    />

                    <ValidatedSwitch
                        controlName="isActive"
                        name="isActive"
                        id="isActive"
                        color="secondary"
                        methods={methods}
                        label="Is Active"
                        sendSwitchState={(value) => receiveSwitchState(value)}
                    />

                    {/*<ValidatedSelect*/}
                    {/*    control={methods.control}*/}
                    {/*    controlName='parent'*/}
                    {/*    id="parent"*/}
                    {/*    label="Parent Category"*/}
                    {/*    placeholder="Parent Category"*/}
                    {/*    items={categoryService.getAllTranslations(selectedCategories)}*/}
                    {/*/>*/}

                    <BasicTranslation
                        methods={methods}
                        category={commonService.toTitleCase(category)}
                    />
                    <Stack
                        direction="row"
                        justifyContent="flex-start"
                        alignItems="center"
                        spacing={2}
                        className="m-[8px]"
                    >
                        <CustomButton task="update" text={commonService.toTitleCase(category)}></CustomButton>
                        <CustomButton task="delete" text={commonService.toTitleCase(category)} onClick={handleOpenModal}></CustomButton>
                    </Stack>
                </Box>
            </FormProvider>

            <Divider />

            <Box className="p-[16px]">
                <Typography variant="h5">Album for {blockService.getBlockName(selectedBlock)}</Typography>
            </Box>

            <Album
                images={selectedImages}
                callbackImageUrl={blockService.getImageUrl}
                addImage={(file) => addAlbumImage(file)}
                updateImage={(file, id) => updateAlbumImage(file, id)}
                deleteImage={(id) => deleteAlbumImage(id)}
                text="Gallery"
            />

            <CustomSnackbar
                open={snackbar.open}
                message={snackbar.message}
                onClose={handleClose}
                severity={snackbar.severity}
            />

            <DeleteModal
                open={openModal}
                onClose={handleCloseModal}
                message={`Are you sure that you want to delete ${blockService.getBlockName(selectedBlock)}`}
                confirmDelete={deleteBlock}
            ></DeleteModal>
        </Box>
    );
};

export default GalleryUpdate;
