import { jsxs, jsx } from "react/jsx-runtime";
import React from "react";
import { Container } from "typedi";
import "reflect-metadata";
import { P as ProductService } from "../app.js";
import { Box, Typography, Grid, Card, CardContent } from "@mui/material";
import ListItemIcon from "@mui/material/ListItemIcon/index.js";
import FavoriteIcon from "@mui/icons-material/Favorite.js";
import BookmarkIcon from "@mui/icons-material/Bookmark.js";
import StarsIcon from "@mui/icons-material/Stars.js";
import PreviewIcon from "@mui/icons-material/Preview.js";
import "axios";
import "react-dom/client";
import "@inertiajs/react";
import "react-redux";
import "@reduxjs/toolkit";
import "localstorage-slim";
import "crypto-js";
import "crypto-js/enc-utf8.js";
import "@mui/x-date-pickers";
import "@mui/x-date-pickers/AdapterDateFns/index.js";
import "i18next";
import "react-i18next";
import "@syncfusion/ej2-base";
const ProductActivities = () => {
  const productService = Container.get(ProductService);
  const [likes, setLikes] = React.useState(0);
  const [favorites, setFavorites] = React.useState(0);
  const [ratings, setRatings] = React.useState(0);
  const [reviews, setReviews] = React.useState(0);
  React.useEffect(() => {
    Promise.all([
      productService.allLikes(),
      productService.allFavorites(),
      productService.allRatings(),
      productService.allReviews()
    ]).then(([
      likes2,
      favorites2,
      ratings2,
      reviews2
    ]) => {
      setLikes(likes2.data);
      setFavorites(favorites2.data);
      setRatings(ratings2.data);
      setReviews(reviews2.data);
    });
  }, []);
  return /* @__PURE__ */ jsxs(Box, { className: "p-[16px]", children: [
    /* @__PURE__ */ jsx(Typography, { component: "h5", variant: "h5", sx: { fontWeight: 500, marginBottom: "16px" }, children: "Products Activities" }),
    /* @__PURE__ */ jsxs(
      Grid,
      {
        container: true,
        spacing: 3,
        justifyContent: "space-between",
        alignItems: "center",
        children: [
          /* @__PURE__ */ jsx(Grid, { item: true, xs: 12, sm: 6, md: 3, children: /* @__PURE__ */ jsx(Card, { sx: { height: 150, bgcolor: "#6261cc" }, children: /* @__PURE__ */ jsxs(CardContent, { children: [
            /* @__PURE__ */ jsx(ListItemIcon, { children: /* @__PURE__ */ jsx(FavoriteIcon, { sx: { fontSize: 40 } }) }),
            /* @__PURE__ */ jsxs(Box, { className: "flex justify-center items-center gap-2", children: [
              /* @__PURE__ */ jsx(Typography, { variant: "h3", component: "h3", align: "center", sx: { fontWeight: 700 }, children: likes }),
              /* @__PURE__ */ jsx(Typography, { variant: "body2", component: "h5", children: likes === 1 ? "like" : "likes" })
            ] })
          ] }) }) }),
          /* @__PURE__ */ jsx(Grid, { item: true, xs: 12, sm: 6, md: 3, children: /* @__PURE__ */ jsx(Card, { sx: { height: 150, bgcolor: "#3d99f5" }, children: /* @__PURE__ */ jsxs(CardContent, { children: [
            /* @__PURE__ */ jsx(ListItemIcon, { children: /* @__PURE__ */ jsx(BookmarkIcon, { sx: { fontSize: 40 } }) }),
            /* @__PURE__ */ jsxs(Box, { className: "flex justify-center items-center gap-2", children: [
              /* @__PURE__ */ jsx(Typography, { variant: "h3", component: "h3", align: "center", sx: { fontWeight: 700 }, children: favorites }),
              /* @__PURE__ */ jsx(Typography, { variant: "body2", component: "h5", children: favorites === 1 ? "favorite" : "favorites" })
            ] })
          ] }) }) }),
          /* @__PURE__ */ jsx(Grid, { item: true, xs: 12, sm: 6, md: 3, children: /* @__PURE__ */ jsx(Card, { sx: { height: 150, bgcolor: "#edad21" }, children: /* @__PURE__ */ jsxs(CardContent, { children: [
            /* @__PURE__ */ jsx(ListItemIcon, { children: /* @__PURE__ */ jsx(StarsIcon, { sx: { fontSize: 40 } }) }),
            /* @__PURE__ */ jsxs(Box, { className: "flex justify-center items-center gap-2", children: [
              /* @__PURE__ */ jsx(Typography, { variant: "h3", component: "h3", align: "center", sx: { fontWeight: 700 }, children: ratings }),
              /* @__PURE__ */ jsx(Typography, { variant: "body2", component: "h5", children: ratings === 1 ? "rating" : "ratings" })
            ] })
          ] }) }) }),
          /* @__PURE__ */ jsx(Grid, { item: true, xs: 12, sm: 6, md: 3, children: /* @__PURE__ */ jsx(Card, { sx: { height: 150, bgcolor: "#db5d5d" }, children: /* @__PURE__ */ jsxs(CardContent, { children: [
            /* @__PURE__ */ jsx(ListItemIcon, { children: /* @__PURE__ */ jsx(PreviewIcon, { sx: { fontSize: 40 } }) }),
            /* @__PURE__ */ jsxs(Box, { className: "flex justify-center items-center gap-2", children: [
              /* @__PURE__ */ jsx(Typography, { variant: "h3", component: "h3", align: "center", sx: { fontWeight: 700 }, children: reviews }),
              /* @__PURE__ */ jsx(Typography, { variant: "body2", component: "h5", children: reviews === 1 ? "review" : "reviews" })
            ] })
          ] }) }) })
        ]
      }
    )
  ] });
};
export {
  ProductActivities as default
};
