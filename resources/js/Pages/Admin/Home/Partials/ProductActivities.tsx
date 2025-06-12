import React from 'react';
import {Container as ServiceContainer} from "typedi";
import "reflect-metadata";
import ProductService from "@/Services/ProductService/ProductService";
import {Box, Card, CardContent, Grid, Typography} from "@mui/material";
import {LocalGroceryStore} from "@mui/icons-material";
import ListItemIcon from "@mui/material/ListItemIcon";
import FavoriteIcon from "@mui/icons-material/Favorite";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import Brightness1Icon from "@mui/icons-material/Brightness1";
import StarsIcon from '@mui/icons-material/Stars';
import PreviewIcon from '@mui/icons-material/Preview';

const ProductActivities = () => {
    const productService = ServiceContainer.get(ProductService);
    const [likes, setLikes] = React.useState<number>(0);
    const [favorites, setFavorites] = React.useState<number>(0);
    const [ratings, setRatings] = React.useState<number>(0);
    const [reviews, setReviews] = React.useState<number>(0);

    React.useEffect(() => {
        Promise.all([
            productService.allLikes(),
            productService.allFavorites(),
            productService.allRatings(),
            productService.allReviews(),
        ]).then(([
            likes,
            favorites,
            ratings,
            reviews
        ]) => {
            setLikes(likes.data);
            setFavorites(favorites.data);
            setRatings(ratings.data);
            setReviews(reviews.data);
        })
    }, []);

    return (
        <Box className="p-[16px]">
            <Typography component="h5" variant="h5" sx={{fontWeight: 500, marginBottom: '16px'}}>Products Activities</Typography>
            <Grid container
                  spacing={3}
                  justifyContent="space-between"
                  alignItems="center">
                <Grid item xs={12} sm={6} md={3}>
                    <Card sx={{height: 150, bgcolor: '#6261cc'}}>
                        <CardContent>
                            <ListItemIcon>
                                <FavoriteIcon sx={{fontSize: 40}}></FavoriteIcon>
                            </ListItemIcon>
                            <Box className="flex justify-center items-center gap-2">
                                <Typography variant="h3" component="h3" align="center" sx={{fontWeight: 700}}>
                                    {likes}
                                </Typography>
                                <Typography variant="body2" component="h5">
                                    {likes === 1 ? 'like' : 'likes'}
                                </Typography>
                            </Box>

                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <Card sx={{height: 150, bgcolor: '#3d99f5'}}>
                        <CardContent>
                            <ListItemIcon>
                                <BookmarkIcon sx={{fontSize: 40}}></BookmarkIcon>
                            </ListItemIcon>
                            <Box className="flex justify-center items-center gap-2">
                                <Typography variant="h3" component="h3" align="center" sx={{fontWeight: 700}}>
                                    {favorites}
                                </Typography>
                                <Typography variant="body2" component="h5">
                                    {favorites === 1 ? 'favorite' : 'favorites'}
                                </Typography>
                            </Box>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <Card sx={{height: 150, bgcolor: '#edad21'}}>
                        <CardContent>
                            <ListItemIcon>
                                <StarsIcon sx={{fontSize: 40}}></StarsIcon>
                            </ListItemIcon>
                            <Box className="flex justify-center items-center gap-2">
                                <Typography variant="h3" component="h3" align="center" sx={{fontWeight: 700}}>
                                    {ratings}
                                </Typography>
                                <Typography variant="body2" component="h5">
                                    {ratings === 1 ? 'rating' : 'ratings'}
                                </Typography>
                            </Box>

                        </CardContent>
                    </Card>

                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <Card sx={{height: 150, bgcolor: '#db5d5d'}}>
                        <CardContent>
                            <ListItemIcon>
                                <PreviewIcon sx={{fontSize: 40}}></PreviewIcon>
                            </ListItemIcon>
                            <Box className="flex justify-center items-center gap-2">
                                <Typography variant="h3" component="h3" align="center" sx={{fontWeight: 700}}>
                                    {reviews}
                                </Typography>
                                <Typography variant="body2" component="h5">
                                    {reviews === 1 ? 'review' : 'reviews'}
                                </Typography>
                            </Box>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Box>
    );
};

export default ProductActivities;
