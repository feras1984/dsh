import React from 'react';
import BlockProps from "@/Interfaces/Site/BlockProps";
import {useGSAP} from "@gsap/react";
import {styled} from "@mui/material/styles";
import {Box, BoxProps, Typography} from "@mui/material";
import styles from "./styles.module.scss";

const IndustryDetails: React.FC<{service: BlockProps}> = ({service}) => {
    const minWidth = '270px';
    const containerRef = React.useRef<HTMLDivElement | null>(null);
    const boxRef = React.useRef(null);
    const shadowRef = React.useRef(null);
    const {contextSafe} = useGSAP({scope: containerRef});
    const [width, setWidth] = React.useState<number>(window.innerWidth);
    const [shadowWidth, setShadowWidth] = React.useState<string>('0');
    const [margin, setMargin] = React.useState<string>('0');

    const ImageStyle = styled(Box)<BoxProps>({
        cursor: 'pointer',
        position: 'relative',
        width: '325px',
        height: '421px',
        borderRadius: '15px',
        minHeight: '190px',
        overflow: 'hidden',
        '&:before' : {
            position: 'absolute',
            content: '""',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            borderRadius: '15px',
            backgroundImage: `url(/file/blocks/${service.images[0].url})`,
            backgroundPosition: 'center center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            filter: 'grayscale(0.9)',
            transform: 'scale(1)',
            transition: 'all 0.3s ease-in-out',
        },

        '&:hover': {
            '&:before' : {
                transform: 'scale(1.05)',
            },
        },
    })

    //Get the required width and margin for modal based on viewport size:
    const handleResize = () => {
        setWidth(window.innerWidth);
        if (window.innerWidth <= 350) {
            setShadowWidth('350px');
            setMargin('0%');
        }

        if (window.innerWidth > 350 && window.innerWidth <= 500) {
            setShadowWidth('90%');
            setMargin('5%');
        }

        if (window.innerWidth > 500 && window.innerWidth <= 1000) {
            setShadowWidth('60%');
            setMargin('20%');
        }

        if (window.innerWidth > 1000) {
            setShadowWidth('40%');
            setMargin('30%');
        }
    }

    React.useEffect(() => {
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [shadowWidth]);

    const handleClick = contextSafe(() => {
        const el = document.getElementById(`service-${service.id}`);
        containerRef.current?.classList.remove('relative');
        // gsap.timeline()
        //
        //     .fromTo([shadowRef.current], {
        //         visibility: 'visible',
        //         opacity: 1,
        //         left: el?.getBoundingClientRect().x,
        //         top: el?.getBoundingClientRect().top,
        //         // top: 0,
        //
        //         width: el?.offsetWidth,
        //         ease: Power3.easeOut,
        //         duration: 0.1,
        //         delay: 0,
        //     }, {
        //         css: {
        //             zIndex: 1,
        //             top: '16px',
        //             width: shadowWidth,
        //             minWidth: minWidth,
        //             marginLeft: margin,
        //             left: 0,
        //         },
        //         opacity: 1,
        //         duration: 1,
        //         delay: 0,
        //         ease: Power3.easeIn,
        //     })
        //     .to(boxRef.current, {
        //         visibility: 'hidden',
        //         ease: Power3.easeIn,
        //         duration: 0.01,
        //         delay: -0.01,
        //     })
    });

    const handleClose = contextSafe(() => {
        const el = document.getElementById(`service-${service.id}`);
        containerRef.current?.classList.add('relative');
        // gsap.timeline()
        //     .fromTo(shadowRef.current, {
        //         zIndex: 1,
        //         top: '16px',
        //         width: shadowWidth,
        //         minWidth: minWidth,
        //         marginLeft: margin,
        //         // left: 0,
        //         opacity: 1,
        //         duration: 1,
        //         delay: 0,
        //         ease: Power3.easeOut,
        //     }, {
        //         visibility: 'hidden',
        //         opacity: 0,
        //         // left: 0,
        //         top: 0,
        //         marginLeft: 0,
        //         width: minWidth,
        //         ease: Power3.easeIn,
        //         zIndex: -1,
        //         duration: 0.1,
        //         delay: 0,
        //     })
        //     .to(boxRef.current, {
        //         visibility: 'visible',
        //         ease: Power3.easeIn,
        //         duration: 0.01,
        //         delay: 0,
        //     })

    })
    return (
        <Box
            className="relative"
            ref={containerRef}>
            {/*<Box*/}
            {/*    onClick={() => handleClick()}*/}
            {/*>*/}
            {/*    <Card*/}
            {/*        sx={{ maxWidth: 270, cursor: 'pointer' }}*/}
            {/*        ref={boxRef}*/}
            {/*        id={`service-${service.id}`}*/}
            {/*    >*/}
            {/*        <CardHeader*/}
            {/*            avatar={*/}
            {/*                <Avatar*/}
            {/*                    variant="square"*/}
            {/*                    aria-label="recipe"*/}
            {/*                    src="/file/logo"*/}
            {/*                    sx={{ width: 56, height: 56}}*/}
            {/*                >*/}

            {/*                </Avatar>*/}
            {/*            }*/}

            {/*            title={service.title}*/}
            {/*            // subheader="September 14, 2016"*/}
            {/*        />*/}
            {/*        <CardMedia*/}
            {/*            classes={{*/}
            {/*                img: styles.imgStyle,*/}
            {/*            }}*/}
            {/*            component="img"*/}
            {/*            height="194"*/}
            {/*            width="270"*/}
            {/*            image={`/file/blocks/${service.images[0].url}`}*/}
            {/*            alt="Paella dish"*/}
            {/*        />*/}
            {/*    </Card>*/}
            {/*</Box>*/}


            {/*<Box*/}
            {/*    className={`${styles.shadowBox}`}*/}
            {/*    ref={shadowRef}*/}
            {/*>*/}
            {/*    <Card*/}
            {/*        sx={{ maxWidth: '100%', cursor: 'pointer' }}*/}
            {/*    >*/}
            {/*        <CardHeader*/}
            {/*            avatar={*/}
            {/*                <Avatar*/}
            {/*                    variant="square"*/}
            {/*                    aria-label="recipe"*/}
            {/*                    src="/file/logo"*/}
            {/*                    sx={{ width: 56, height: 56}}*/}
            {/*                >*/}

            {/*                </Avatar>*/}
            {/*            }*/}

            {/*            action={*/}
            {/*                <IconButton onClick={() => handleClose()}>*/}
            {/*                    <CustomIcon name="close"></CustomIcon>*/}
            {/*                </IconButton>*/}
            {/*            }*/}

            {/*            title={service.title}*/}
            {/*            // subheader="September 14, 2016"*/}
            {/*        />*/}
            {/*        <CardMedia*/}
            {/*            // className={styles.imgStyle}*/}
            {/*            classes={{*/}
            {/*                img: styles.shadowImgStyle,*/}
            {/*            }}*/}
            {/*            component="img"*/}
            {/*            image={`/file/blocks/${service.images[0].url}`}*/}
            {/*            alt="Paella dish"*/}
            {/*        />*/}
            {/*        <CardContent>*/}
            {/*            {service.description}*/}
            {/*        </CardContent>*/}
            {/*    </Card>*/}
            {/*</Box>*/}

            {/*    ========================2=====================*/}
            <Box className="relative m-0 p-0 w-[325px]">
                <ImageStyle />
                <Box className={`absolute bottom-0 left-0 right-0 flex items-center ${styles.titleAria}`}>
                    <Typography color="white" variant="h5" align="center" sx={{fontWeight: 'bold', flexBasis: '100%'}}>{service.title}</Typography>
                </Box>
            </Box>

        </Box>
    );
};

export default IndustryDetails;
