import { jsxs, jsx } from "react/jsx-runtime";
import React from "react";
import { s as styles$1, P as ProductRateAverage, a as ProductPrice } from "./ProductRateAverage-e82ed81e.js";
import { P as ProductService, C as CommonService, b as File, u as useAppDispatch, a as addToCart } from "../app.js";
import { usePage, Link } from "@inertiajs/react";
import { Box, Rating, Tooltip, IconButton, Card, CardMedia, CardContent, Typography, CardActions, Button, Backdrop } from "@mui/material";
import { Container } from "typedi";
import "reflect-metadata";
import { u as useSnackbarHook, C as CustomSnackbar } from "./CustomSnackbar-a775827f.js";
import FavoriteIcon from "@mui/icons-material/Favorite.js";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder.js";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder.js";
import BookmarkIcon from "@mui/icons-material/Bookmark.js";
import { s as styles } from "./styles.module-3979ac5e.js";
import { useSwiperContext } from "./SwiperContext-5a5f5757.js";
import { I as Icon } from "./Icon-cd2b22cf.js";
import { grey } from "@mui/material/colors/index.js";
import "@mui/icons-material/StarRate.js";
import "axios";
import "react-dom/client";
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
import "@mui/material/Alert/index.js";
import "react-icons/fa/index.esm.js";
import "react-icons/fa6/index.esm.js";
import "react-icons/gr/index.esm.js";
import "react-icons/ai/index.esm.js";
import "react-icons/hi/index.esm.js";
import "react-icons/io/index.esm.js";
import "react-icons/md/index.esm.js";
import "react-icons/bi/index.esm.js";
import "@mui/icons-material/AccountCircle.js";
import "react-icons";
import "@mui/icons-material/MoveToInbox.js";
import "@mui/icons-material/Drafts.js";
import "@mui/icons-material/Send.js";
import "@mui/icons-material/ExpandLess.js";
import "@mui/icons-material/ExpandMore.js";
import "@mui/icons-material/StarBorder.js";
import "@mui/icons-material/ArrowForwardIos.js";
import "@mui/icons-material/Category.js";
import "@mui/icons-material/Person.js";
import "@mui/icons-material/ListAlt.js";
import "@mui/icons-material/Settings.js";
import "@mui/icons-material/Language.js";
import "@mui/icons-material/Email.js";
import "@mui/icons-material/DarkMode.js";
import "@mui/icons-material/LightMode.js";
import "@mui/icons-material/Edit.js";
import "@mui/icons-material/DeleteRounded.js";
import "@mui/icons-material/Web.js";
import "@mui/icons-material/Slideshow.js";
import "@mui/icons-material/DesignServices.js";
import "@mui/icons-material/Business.js";
import "@mui/icons-material/List.js";
import "@mui/icons-material/Link.js";
import "@mui/icons-material/ConnectWithoutContact.js";
import "@mui/icons-material/Contacts.js";
import "@mui/icons-material/LocalPhone.js";
import "@mui/icons-material/WhatsApp.js";
import "@mui/icons-material/Fax.js";
import "@mui/icons-material/LocalPostOffice.js";
import "@mui/icons-material/PlayCircle.js";
import "@mui/icons-material/ZoomIn.js";
import "@mui/icons-material/ZoomOut.js";
import "@mui/icons-material/ZoomInMap.js";
import "@mui/icons-material/ZoomOutMap.js";
import "@mui/icons-material/StopCircle.js";
import "@mui/icons-material/KeyboardArrowLeft.js";
import "@mui/icons-material/KeyboardDoubleArrowLeft.js";
import "@mui/icons-material/KeyboardArrowRight.js";
import "@mui/icons-material/KeyboardDoubleArrowRight.js";
import "@mui/icons-material/ShoppingCart.js";
import "@mui/icons-material/Menu.js";
import "@mui/icons-material/MonetizationOn.js";
import "@mui/icons-material/GppGood.js";
import "@mui/icons-material/Login.js";
import "@mui/icons-material/HowToReg.js";
import "@mui/icons-material/Logout.js";
import "@mui/icons-material";
import "@mui/icons-material/Notifications.js";
import "@mui/icons-material/MoreVert.js";
import "@mui/icons-material/Close.js";
import "@mui/icons-material/AccountTree.js";
const ProductRating = ({ product }) => {
  var _a;
  const productService = Container.get(ProductService);
  const user = usePage().props.auth.user;
  const [ratingValue, setRatingValue] = React.useState(
    // (user &&
    //     user.ratings &&
    //     user.ratings.find(rat => rat.productId === productId)?.rate || 0
    // ) || 0
    user && ((_a = product.ratings.find((rate) => rate.userId === user.id)) == null ? void 0 : _a.rate) || 0
  );
  const { snackbar, setSnackbar, handleClose } = useSnackbarHook();
  const handleRatingChange = (event, newValue) => {
    setRatingValue(newValue);
    if (user && user.id > 0) {
      const formData = new FormData();
      formData.append("user_id", String(user.id));
      formData.append("product_id", String(product.id));
      formData.append("rate", String(newValue));
      productService.rate(formData).then((response) => {
        setSnackbar(
          (snackbarState) => ({ ...snackbarState, open: true, message: "Your rate has been stored!", severity: "success" })
        );
        setRatingValue(newValue);
      }).catch((error) => {
        setSnackbar(
          (snackbarState) => ({ ...snackbarState, open: true, message: "Error Happened while storing your rate!", severity: "error" })
        );
      });
    }
  };
  return /* @__PURE__ */ jsxs(Box, { children: [
    /* @__PURE__ */ jsx(
      Rating,
      {
        name: "simple-controlled",
        value: ratingValue,
        onChange: handleRatingChange,
        precision: 0.5
      }
    ),
    /* @__PURE__ */ jsx(
      CustomSnackbar,
      {
        open: snackbar.open,
        message: snackbar.message,
        onClose: handleClose,
        severity: snackbar.severity
      }
    )
  ] });
};
const ProductLike = ({ product }) => {
  const user = usePage().props.auth.user;
  const [likeValue, setLikeValue] = React.useState(
    // (user &&
    //     user.likes &&
    //     user.likes
    //         .filter(like => like.like)
    //         .map(like => like.productId)
    //         .includes(productId) || false)
    user && product.likes.filter((like) => like.like).map((like) => like.userId).includes(user.id) || false
  );
  const productService = Container.get(ProductService);
  const { snackbar, setSnackbar, handleClose } = useSnackbarHook();
  const handleLike = async () => {
    if (user && user.id > 0) {
      const formData = new FormData();
      formData.append("user_id", String(user.id));
      formData.append("product_id", String(product.id));
      formData.append("like", likeValue ? "0" : "1");
      productService.like(formData).then((response) => {
        if (!likeValue) {
          setSnackbar(
            (snackbarState) => ({ ...snackbarState, open: true, message: "You liked this product!", severity: "success" })
          );
        }
        setLikeValue((prevState) => !prevState);
      }).catch((error) => {
        setSnackbar(
          (snackbarState) => ({ ...snackbarState, open: true, message: "Error Happened while storing reaction!", severity: "error" })
        );
      });
    }
  };
  return /* @__PURE__ */ jsxs(Box, { children: [
    /* @__PURE__ */ jsx(Tooltip, { title: "Like it?", children: /* @__PURE__ */ jsx(IconButton, { onClick: handleLike, children: likeValue ? /* @__PURE__ */ jsx(FavoriteIcon, { sx: { color: "#DC0002" } }) : /* @__PURE__ */ jsx(FavoriteBorderIcon, {}) }) }),
    /* @__PURE__ */ jsx(
      CustomSnackbar,
      {
        open: snackbar.open,
        message: snackbar.message,
        onClose: handleClose,
        severity: snackbar.severity
      }
    )
  ] });
};
const ProductBookmark = ({ product }) => {
  const productService = Container.get(ProductService);
  const user = usePage().props.auth.user;
  const [bookmarkValue, setBookmarkValue] = React.useState(
    // (user &&
    //     user.favorites &&
    //     user.favorites
    //         .filter(fav => fav.favorite)
    //         .map(fav => fav.productId)
    //         .includes(productId) || false)
    user && product.favorites.filter((fav) => fav.favorite).map((fav) => fav.userId).includes(user.id) || false
  );
  const { snackbar, setSnackbar, handleClose } = useSnackbarHook();
  const handleBookmark = () => {
    if (user && user.id > 0) {
      const formData = new FormData();
      formData.append("user_id", String(user.id));
      formData.append("product_id", String(product.id));
      formData.append("favorite", bookmarkValue ? "0" : "1");
      productService.favorite(formData).then((response) => {
        const message = bookmarkValue ? "The product removed from your bookmark!" : "The product added to your bookmark!";
        setSnackbar(
          (snackbarState) => ({
            ...snackbarState,
            open: true,
            message,
            severity: "success"
          })
        );
        setBookmarkValue((prevState) => !prevState);
      }).catch((error) => {
        setSnackbar(
          (snackbarState) => ({ ...snackbarState, open: true, message: "Error Happened while storing reaction!", severity: "error" })
        );
      });
    }
  };
  return /* @__PURE__ */ jsxs(Box, { children: [
    /* @__PURE__ */ jsx(Tooltip, { title: "Add to Favorite?", children: /* @__PURE__ */ jsx(IconButton, { onClick: handleBookmark, children: bookmarkValue ? /* @__PURE__ */ jsx(BookmarkIcon, { sx: { color: "#00796b" } }) : /* @__PURE__ */ jsx(BookmarkBorderIcon, {}) }) }),
    /* @__PURE__ */ jsx(
      CustomSnackbar,
      {
        open: snackbar.open,
        message: snackbar.message,
        onClose: handleClose,
        severity: snackbar.severity
      }
    )
  ] });
};
const OfferBadge = ({ offer }) => {
  const commonService = Container.get(CommonService);
  const calculateOffer = () => {
    if (offer.isPercent)
      return offer.amount + "%";
    else
      return commonService.currencyFormat(offer.amount);
  };
  const offerName = () => {
    if (offer.type === "category")
      return offer.name;
    else
      return "";
  };
  return /* @__PURE__ */ jsx("div", { className: styles.badgeOverlay, children: /* @__PURE__ */ jsxs("span", { className: `${styles.topRight} ${styles.badge} ${styles.red}`, children: [
    offerName(),
    " ",
    calculateOffer(),
    " Off"
  ] }) });
};
const ProductCard = ({ product }) => {
  Container.get(CommonService);
  const productService = Container.get(ProductService);
  const [coverImage, setCoverImage] = React.useState(new File({}));
  const dispatch = useAppDispatch();
  usePage().props;
  useSwiperContext();
  React.useMemo(() => {
    setCoverImage(product.images.find((img) => img.isCover = true) || new File({}));
  }, [product]);
  const handleAddToCart = React.useCallback(() => {
    dispatch(addToCart({ quantity: 1, product, price: productService.getPrice(product) }));
  }, []);
  return /* @__PURE__ */ jsx(Box, { className: "p-[16px]", children: /* @__PURE__ */ jsxs(Card, { sx: { maxWidth: 300 }, className: styles$1.cardBoxShadow, children: [
    /* @__PURE__ */ jsxs(Box, { className: "relative", children: [
      /* @__PURE__ */ jsx(
        CardMedia,
        {
          sx: { width: 300, height: 194 },
          image: `/file/products/${coverImage.url}`,
          title: "green iguana"
        }
      ),
      product.offer && /* @__PURE__ */ jsx(OfferBadge, { offer: product.offer }),
      product.average > 2 && /* @__PURE__ */ jsx(Box, { className: "p-0 m-0 absolute left-0 bottom-0", children: /* @__PURE__ */ jsx(ProductRateAverage, { product }) })
    ] }),
    /* @__PURE__ */ jsxs(CardContent, { children: [
      /* @__PURE__ */ jsx(Typography, { gutterBottom: true, variant: "h6", component: "div", noWrap: true, className: styles$1.fontWeightBold, children: product.name }),
      /* @__PURE__ */ jsx(ProductPrice, { product }),
      /* @__PURE__ */ jsxs(Box, { className: "flex justify-start items-center", children: [
        /* @__PURE__ */ jsx(Box, { className: "basis-full", children: /* @__PURE__ */ jsx(Box, { className: "my-[16px]", children: /* @__PURE__ */ jsx(ProductRating, { product }) }) }),
        /* @__PURE__ */ jsx(Box, { children: /* @__PURE__ */ jsx(ProductLike, { product }) }),
        /* @__PURE__ */ jsx(Box, { children: /* @__PURE__ */ jsx(ProductBookmark, { product }) })
      ] })
    ] }),
    /* @__PURE__ */ jsxs(CardActions, { children: [
      /* @__PURE__ */ jsx(Link, { href: `/product/${product.id}`, children: /* @__PURE__ */ jsx(
        Button,
        {
          size: "small",
          color: "secondary",
          children: "More Details"
        }
      ) }),
      /* @__PURE__ */ jsx(
        Button,
        {
          size: "small",
          color: "secondary",
          onClick: handleAddToCart,
          children: "Add To Cart"
        }
      )
    ] })
  ] }) });
};
const ProductModal = ({ product }) => {
  const [open, setOpen] = React.useState(false);
  const { handleProduct } = useSwiperContext();
  const handleClose = () => {
    handleProduct(null);
    setOpen(false);
  };
  return /* @__PURE__ */ jsx(
    Backdrop,
    {
      sx: { color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 },
      open: !!product,
      children: product && // <ProductCard product={product}/>
      /* @__PURE__ */ jsxs(Box, { className: "relative", children: [
        /* @__PURE__ */ jsx(ProductCard, { product }),
        /* @__PURE__ */ jsx(IconButton, { sx: { position: "absolute", top: 8, right: 8, bgcolor: grey[200] }, onClick: handleClose, children: /* @__PURE__ */ jsx(Icon, { name: "close" }) })
      ] })
    }
  );
};
export {
  ProductModal as default
};
