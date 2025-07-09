import React from 'react';
import {Container} from "typedi";
import FormService from "@/Services/FormService/FormService";
import BlockService from "@/Services/BlockService/BlockService";
import CommonService from "@/Services/CommonService/CommonService";
import {Link, usePage} from "@inertiajs/react";
import useSnackbarHook from "@/Hooks/SnackbarHook";
import {z} from "zod";
import {FormProvider, useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {Box, Stack, Typography, Breadcrumbs} from "@mui/material";
import ValidatedImage from "@/Components/ValidatedComponents/ValidatedImage";
import ValidatedCheckbox from "@/Components/ValidatedComponents/ValidatedCheckbox";
import BasicTranslation from "@/Components/Translations/BasicTranslation";
import CustomButton from "@/Components/Button/CustomButton";
import CustomSnackbar from "@/Components/Snackbar/CustomSnackbar";
import ValidatedInput from "@/Components/ValidatedComponents/ValidatedInput";
import ValidatedDatePicker from "@/Components/ValidatedComponents/ValidatedDatePicker";
import {Block} from "@/models/block/Block";
import BlockCategories from "@/Enums/BlockCategories";
import ValidatedSelect from "@/Components/ValidatedComponents/ValidatedSelect";
import ValidatedSwitch from "@/Components/ValidatedComponents/ValidatedSwitch";

const ProjectsAdd: React.FC<{category: string}> = ({category}) => {
    const formService = Container.get(FormService);
    const blockService = Container.get(BlockService);
    const commonService = Container.get(CommonService);
    const languages = usePage().props.settings.languages;
    const [clients, setClients] = React.useState<Block []>([]);
    const [showProgression, setShowProgression] = React.useState<boolean>(false);

    //==========================================================================================
    // Get the clients:
    React.useEffect(() => {
        blockService
            .getActiveBlocks(commonService.toSnakeCase(BlockCategories.CLIENTS))
            .then(response => {
                setClients(response.data);
            })
    }, [])
    // =========================================================================================
    // Snackbar configuration section:

    const {snackbar, setSnackbar, handleClose} =
        useSnackbarHook({open: false, message: '', severity: "success"});

    // =========================================================================================

    const blockSchema = z.object({
        location: z.string().min(5, {message: 'Location field is required'}),
        completeProject: z.object({
            isCompleted: z.boolean().default(true),
            dateOfCompletion: z.date().min(new Date('2002-07-15'), {message: "Date is Required"}),
        }).refine(({isCompleted, dateOfCompletion}) => {
            return (isCompleted && dateOfCompletion.getTime() < (new Date()).getTime())
                || (!isCompleted && dateOfCompletion.getTime() > (new Date()).getTime());
        }, {
            message:  "Completion date of the project under construction must be in the future!, Completed project must be in the past!",
            path: ["dateOfCompletion"],
        }),

        value: z.string().default('0')
            .refine(formService.isNumeric, {message: 'Estimated value must be a number'})
            .refine(formService.isPositive, {message: 'Estimated value must be a positive number'}),
        progression: z.string().default('100')
            .refine(formService.isNumeric, {message: 'Estimated value must be a number'})
            .refine(formService.isPositive, {message: 'Estimated value must be a positive number'})
            .refine((percent) => (
                parseFloat(percent) <= 100
            ), {
                message: 'maximum number is 100',
            }),
        isActive: z.boolean().default(true),
        // Record key is "ar" or "en" of length 2:
        translations: z.record(z.string().length(2),z.object({
            name: z.string().min(3, {message: 'Title should be at least 3 characters!'}),
            // description: z.string().max(500, {message: " Description shouldn't exceed 500 characters!"})
        })),
    });

    type blockSchemaType = z.infer<typeof blockSchema>;

    //TODO: comply methods with z.infer type:
    const methods = useForm({
        mode: "onBlur",
        reValidateMode: "onBlur",
        resolver: zodResolver(blockSchema),
        defaultValues: {
            parent: -1,
            location: '',
            completeProject: {
                dateOfCompletion: new Date(),
                isCompleted: true,
            },
            value: 0,
            progression: '100',
            isActive: true,
            image: (null as (File | null)),
            translations: formService.generateDefaultValues(languages),
        }
    });

    const onSubmit =  () => {
        // console.log(methods.getValues('image'));
        if (methods.getValues('image') === null) return;
        const formData = new FormData();
        formData.append('category', category);
        formData.append('parentId', String(methods.getValues('parent')));
        formData.append('location', methods.getValues('location'));
        formData.append('dateOfCompletion', new Date(methods.getValues('completeProject.dateOfCompletion')).toDateString());
        formData.append('value', String(methods.getValues('value')));
        formData.append('isCompleted', String(methods.getValues('completeProject.isCompleted')));
        formData.append('progression', String(methods.getValues('progression')));
        formData.append('image', (methods.getValues('image') as Blob));
        formData.append('isActive', String(methods.getValues('isActive')));
        formData.append('translations', JSON.stringify(methods.getValues('translations')));
        formData.append('isImage', 'true');
        formData.append('isCover', 'true');


        blockService.storeBlock(formData).then(response => {
            methods.reset();
            setSnackbar(snackbarState =>
                ({ ...snackbarState, open: true, message: 'A new block has been added', severity: "success" })
            );
        }).catch(error => {
            setSnackbar(snackbarState =>
                ({ ...snackbarState, open: true, message: 'Error Happened while storing block', severity: "error" })
            );
        })
    }

    React.useEffect(() => {
        methods.getValues('image');
    }, [methods]);



    const receiveSwitchState = (value: boolean) => {
        methods.setValue('progression', value ? '100' : methods.getValues('progression'));
        setShowProgression(!value);
    }

    return (
        <Box>
            <Breadcrumbs>
                <Link href={`/admin/website/get-block/` + category}>Back to {category}</Link>
                <Typography>Add New {commonService.toTitleCase(category)}</Typography>
            </Breadcrumbs>
            <Box className="p-[16px]">
                <Typography variant="h5">Add New {commonService.toTitleCase(category)}</Typography>
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
                    />

                    <ValidatedSwitch
                        controlName="isActive"
                        name="isActive"
                        id="isActive"
                        color="secondary"
                        methods={methods}
                        label="Is Active"
                    />

                    <ValidatedSwitch
                        controlName="completeProject.isCompleted"
                        name="isCompleted"
                        id="isCompleted"
                        color="secondary"
                        methods={methods}
                        label="Is Completed"
                        sendSwitchState={(value) => receiveSwitchState(value)}
                    />

                    {clients.length > 0 && <ValidatedSelect
                        control={methods.control}
                        controlName='parent'
                        id="parent"
                        label="Client"
                        placeholder="Client"
                        items={
                            clients.map(
                                client => ({
                                    id: client.id,
                                    name: blockService.getBlockName(client),
                                })
                            )
                        }
                    />}

                    {showProgression && <ValidatedInput
                        controlName="progression"
                        name="progression"
                        id="progression"
                        label="Construction Progress"
                        placeholder="Construction Progress"
                        control={methods.control}
                        adornment="%"
                    />}

                    <ValidatedInput
                        controlName="location"
                        name="location"
                        id="location"
                        label="Location"
                        placeholder="Location"
                        control={methods.control}
                    />

                    <ValidatedInput
                        controlName="value"
                        name="value"
                        id="value"
                        label="Estimated value"
                        placeholder="Estimated value"
                        control={methods.control}
                        adornment="AED"
                    />

                    <ValidatedDatePicker
                        controlName="completeProject.dateOfCompletion"
                        methods={methods}
                        label="Date Of Completion"

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
                        <CustomButton task="add" text={commonService.toTitleCase(category)}></CustomButton>
                    </Stack>
                </Box>
            </FormProvider>
            <CustomSnackbar
                open={snackbar.open}
                message={snackbar.message}
                onClose={handleClose}
                severity={snackbar.severity}
            />
        </Box>
    );
};

export default ProjectsAdd;
