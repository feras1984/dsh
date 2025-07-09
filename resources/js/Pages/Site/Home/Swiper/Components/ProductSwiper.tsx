import React, {useMemo} from 'react';
import {
    Box, Container,
} from "@mui/material";
import "swiper/css";
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import {Container as ServiceContainer} from "typedi";
import ProductService from "@/Services/ProductService/ProductService";
import LocaleProduct from "@/models/product/LocaleProduct";
import {Link, usePage} from "@inertiajs/react";
import styles from "../styles.module.scss";
import {Swiper, SwiperSlide} from 'swiper/react';
import {A11y, Autoplay, Navigation, Pagination} from 'swiper/modules';
import ProductPrice from "@/Components/Site/Products/ProductPrice";
import ProductName from "@/Pages/Site/Home/Swiper/Components/ProductName";
import ProductAction from "@/Pages/Site/Home/Swiper/Components/ProductAction";
import ProductImage from "@/Pages/Site/Home/Swiper/Components/ProductImage";
import ProductRateAverage from "@/Components/Site/Products/ProductRateAverage";

const ProductSwiper: React.FC<{categoryId?: number, item?: "offer" | "top" | "new" | "all"}> = ({categoryId, item = "all"}) => {
    const limit = 7;
    const [fetch, setFetch] = React.useState<boolean>(true);
    const productService = ServiceContainer.get(ProductService);
    const [products, setProducts] = React.useState<LocaleProduct []>([]);
    const [offset, setOffset] = React.useState<number>(0);
    const [screen, setScreen] = React.useState<{x: number, y: number}>({x: 0, y: 0});
    const lang = usePage().props.lang;
    const [args, setArgs] = React.useState<{key: string, value: any} []>(
        [{
            key: 'limit', value: limit,
        },
            {
                key: 'offset', value: offset,
            }]
    );

    useMemo(() => {
        if (categoryId) {
            setArgs([...args, {key: 'categoryId', value: categoryId}]);
        }
    }, [categoryId])

    const fetchProducts = () => {
        if (fetch) {
            switch (item) {
                case "offer":
                    productService.localeOffers(lang, ...args
                    ).then(response => {
                        if (response.data.length < limit) setFetch(false);
                        setOffset(offset + 3);
                        setArgs([...args, {key: 'offset', value: offset + limit}])
                        setProducts([...products, ...response.data]);
                    });
                    break;
                case "top":
                    productService.localeTopProducts(lang, ...args
                    ).then(response => {
                        if (response.data.length < limit) setFetch(false);
                        setOffset(offset + 3);
                        setArgs([...args, {key: 'offset', value: offset + limit}])
                        setProducts([...products, ...response.data]);
                    });
                    break;
                case "new":
                    productService.getLocaleProducts(lang, ...args
                    ).then(response => {
                        if (response.data.length < limit) setFetch(false);
                        setOffset(offset + 3);
                        setArgs([...args, {key: 'offset', value: offset + limit}])
                        setProducts([...products, ...response.data]);
                    });
                    break;

                default:
                    console.log('args: ', args);
                    productService.getLocaleProducts(lang, ...args
                    ).then(response => {
                        if (response.data.length < limit) setFetch(false);
                        setOffset(offset + 3);
                        setArgs([...args, {key: 'offset', value: offset + limit}])
                        setProducts([...products, ...response.data]);
                    });
            }
        }
    }

    const handleSliderChange = (index: number) => {
        fetchProducts();
    }

    React.useEffect(() => {
        setTimeout(() => {
            fetchProducts();
        })
    }, []);

    return (
        <Box>
            <Swiper
                modules={[Navigation, Pagination, Autoplay, A11y]}
                className={styles.swiper}
                navigation={true}
                spaceBetween={30}
                slidesPerView='auto'
                centeredSlides={false}
                onSlideChange={(swiper) => handleSliderChange(swiper.activeIndex)}
            >
                {products.map((product, key) => (
                    <Box
                        maxWidth="xl"
                        component="div"
                        sx={{position: 'relative'}}
                        key={`slider-${Math.random()*10000}-${key}`}
                    >
                        <SwiperSlide className={styles.swiperSlide}>
                            <Box className="h-[123px] relative">
                                <ProductImage product={product}/>
                                {product.average > 2 && <Box className="p-0 m-0 absolute left-0 bottom-0">
                                    <ProductRateAverage product={product}/>
                                </Box>}
                            </Box>
                            <ProductName product={product} />
                            <ProductPrice product={product}/>
                            <ProductAction product={product}/>

                        </SwiperSlide>
                    </Box>
                ))}
            </Swiper>
        </Box>
    );
};

export default ProductSwiper;
