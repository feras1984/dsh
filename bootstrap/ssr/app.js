import { jsx } from "react/jsx-runtime";
import axios from "axios";
import { createRoot } from "react-dom/client";
import { createInertiaApp } from "@inertiajs/react";
import { useDispatch, useSelector, Provider } from "react-redux";
import { createSlice, configureStore } from "@reduxjs/toolkit";
import { Service, Container } from "typedi";
import "reflect-metadata";
import ls from "localstorage-slim";
import { AES } from "crypto-js";
import * as encUTF8 from "crypto-js/enc-utf8.js";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns/index.js";
import i18n from "i18next";
import { initReactI18next, useTranslation } from "react-i18next";
import { registerLicense } from "@syncfusion/ej2-base";
import React from "react";
window.axios = axios;
window.axios.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";
const styles = "";
const dataGridStyles = "";
async function resolvePageComponent(path, pages) {
  const page = pages[path];
  if (typeof page === "undefined") {
    throw new Error(`Page not found: ${path}`);
  }
  return typeof page === "function" ? page() : page;
}
const dummyUser = {
  user: {
    id: -1,
    email: "",
    avatar: "",
    isActive: false,
    type: ""
  }
};
const initialState$a = dummyUser;
const UserSlice = createSlice({
  name: "user",
  initialState: initialState$a,
  reducers: {
    getUser: (state, action) => {
      state.user = { ...action.payload };
    }
  }
});
UserSlice.actions;
const UserReducer = UserSlice.reducer;
const dummyAccounts = {
  accounts: []
};
const initialState$9 = dummyAccounts;
const accountSlice = createSlice({
  name: "accounts",
  initialState: initialState$9,
  reducers: {
    implementedAccounts: (state, action) => {
      state.accounts = [...action.payload];
    },
    addAccount: (state, action) => {
      state.accounts = [...state.accounts, action.payload];
    }
  }
});
accountSlice.actions;
const AccountReducer = accountSlice.reducer;
const dummyLanguages = {
  languages: [],
  language: "en",
  direction: "ltr"
};
const initialState$8 = dummyLanguages;
const languageSlice = createSlice({
  name: "languages",
  initialState: initialState$8,
  reducers: {
    setLanguages: (state, action) => {
      state.languages = [...action.payload];
    },
    setLanguage: (state, action) => {
      state.language = action.payload;
    },
    setDirection: (state, action) => {
      state.direction = action.payload;
    }
  }
});
languageSlice.actions;
const LanguageReducer = languageSlice.reducer;
const initialState$7 = {
  dark: true,
  mode: "dark"
};
const ThemeSlice = createSlice({
  name: "mode",
  initialState: initialState$7,
  reducers: {
    setMode: (state, action) => {
      state.dark = action.payload;
      state.mode = action.payload ? "dark" : "light";
    }
  }
});
const {
  setMode
} = ThemeSlice.actions;
const ThemeReducer = ThemeSlice.reducer;
const initialState$6 = {
  dark: false,
  mode: "light"
};
const SiteThemeSlice = createSlice({
  name: "mode",
  initialState: initialState$6,
  reducers: {
    setSiteMode: (state, action) => {
      state.dark = action.payload;
      state.mode = action.payload ? "dark" : "light";
    }
  }
});
const {
  setSiteMode
} = SiteThemeSlice.actions;
const SiteThemeReducer = SiteThemeSlice.reducer;
const initialState$5 = {
  spinner: false
};
const SpinnerSlice = createSlice({
  name: "spinner",
  initialState: initialState$5,
  reducers: {
    setSpinner: (state, action) => {
      state.spinner = action.payload;
    }
  }
});
const {
  setSpinner
} = SpinnerSlice.actions;
const SpinnerReducer = SpinnerSlice.reducer;
const siteSidebar = {
  open: false
};
const initialState$4 = siteSidebar;
const siteSideSlice = createSlice({
  name: "siteSidebar",
  initialState: initialState$4,
  reducers: {
    setSiteSidebar: (state, action) => {
      state.open = action.payload;
    }
  }
});
siteSideSlice.actions;
const SiteSidebarReducer = siteSideSlice.reducer;
var __defProp$5 = Object.defineProperty;
var __getOwnPropDesc$5 = Object.getOwnPropertyDescriptor;
var __decorateClass$5 = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc$5(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result)
    __defProp$5(target, key, result);
  return result;
};
let CommonService = class {
  constructor() {
    this.currencyFormat = (num, currency = "AED ") => {
      return currency.toUpperCase() + " " + num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
    };
    this.currencyFormatWithoutUnit = (num) => {
      return num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
    };
    this.randomString = (length, chars) => {
      let mask = "";
      if (chars.indexOf("a") > -1)
        mask += "abcdefghijklmnopqrstuvwxyz";
      if (chars.indexOf("A") > -1)
        mask += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      if (chars.indexOf("#") > -1)
        mask += "0123456789";
      if (chars.indexOf("!") > -1)
        mask += "~`!@#$%^&*()_+-={}[]:\";'<>?,./|\\";
      let result = "";
      for (let i = length; i > 0; --i)
        result += mask[Math.floor(Math.random() * mask.length)];
      return result;
    };
    this.toSnakeCase = (str = "") => {
      const strArr = str.split(" ");
      const snakeArr = strArr.reduce((acc, val) => {
        return acc.concat(val.toLowerCase());
      }, []);
      return snakeArr.join("-");
    };
    this.toTitleCase = (str) => {
      return str.replace("-", " ").replace(/(?:^|\s)\w/g, function(match) {
        return match.toUpperCase();
      });
    };
    this.validateURL = (value) => {
      try {
        const newURL = new URL(value);
        return newURL.protocol === "http:" || newURL.protocol === "https:";
      } catch (error) {
        return false;
      }
    };
    this.getAverage = (arr) => {
      if (arr.length === 0)
        return 0;
      return (arr.reduce((acc, num) => acc + num, 0) / arr.length).toFixed(2) || 0;
    };
  }
  getRandomNumber(length) {
    return Math.floor(Math.random() * length);
  }
};
CommonService.ListLimit = 25;
CommonService.PageSizes = ["25", "50", "100", "200", "All"];
CommonService.FetchList = ["25", "50", "100", "200"];
CommonService.BaseDate = new Date(2024, 0, 1);
CommonService = __decorateClass$5([
  Service()
], CommonService);
const CommonService$1 = CommonService;
var __defProp$4 = Object.defineProperty;
var __getOwnPropDesc$4 = Object.getOwnPropertyDescriptor;
var __decorateClass$4 = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc$4(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result)
    __defProp$4(target, key, result);
  return result;
};
ls.config.encrypt = true;
ls.config.secret = {}.VITE_LS_SECRET;
ls.config.ttl = 14 * 24 * 60 * 60;
ls.config.encrypter = (data, secret) => AES.encrypt(JSON.stringify(data), secret).toString();
ls.config.decrypter = (data, secret) => {
  try {
    return JSON.parse(AES.decrypt(data, secret).toString(encUTF8));
  } catch (e) {
    return data;
  }
};
let SecureCartService = class {
  constructor() {
    this.encryptCart = (data) => {
      ls.set(SecureCartService.appName, data);
    };
    this.decryptCart = () => {
      return ls.get(SecureCartService.appName);
    };
    this.removeCart = () => {
      ls.remove(SecureCartService.appName);
    };
  }
};
SecureCartService.appName = Container.get(CommonService$1).toSnakeCase("D S H International Construction") + "-cart";
SecureCartService = __decorateClass$4([
  Service()
], SecureCartService);
const SecureCartService$1 = SecureCartService;
var __defProp$3 = Object.defineProperty;
var __getOwnPropDesc$3 = Object.getOwnPropertyDescriptor;
var __decorateClass$3 = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc$3(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result)
    __defProp$3(target, key, result);
  return result;
};
let CategoryService = class {
  constructor() {
    this.language = "en";
    this.mapCategoryGrid = (categories) => {
      return categories.map((category) => {
        return {
          id: category.id,
          name: this.getCategoryName(category),
          avatar: category.images[0].url,
          isActive: category.isActive,
          parent: this.getParentCategory(category.parentId, categories),
          createdAt: category.createdAt
        };
      });
    };
    this.storeCategory = (formData) => {
      return axios.post(
        "/admin/category",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data"
          }
        }
      );
    };
    this.updateCategory = (formData, id) => {
      return axios.post(
        "/admin/category/" + id + "?_method=PATCH",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data"
          }
        }
      );
    };
    this.uploadImage = (formData, id) => {
      return axios.post(
        "/admin/category/image/" + id + "?_method=PATCH",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data"
          }
        }
      );
    };
    this.activateCategory = (formData, id) => {
      return axios.post(
        "/admin/category/activate/" + id + "?_method=PATCH",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data"
          }
        }
      );
    };
    this.extendCategory = (formData, id) => {
      return axios.post(
        "/admin/category/extend/" + id + "?_method=PATCH",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data"
          }
        }
      );
    };
    this.deleteCategory = (id) => {
      return axios.post(
        "/admin/category/" + id + "?_method=DELETE",
        {},
        {
          headers: {
            "Content-Type": "multipart/form-data"
          }
        }
      );
    };
    this.getParentCategory = (parentId, categories) => {
      var _a;
      let parentName = "";
      if (parentId !== null) {
        const parentCategory = categories.find((cat) => cat.id === parentId) || null;
        if (parentCategory !== null) {
          parentName = ((_a = parentCategory.translations.find((trans) => trans.language === this.language)) == null ? void 0 : _a.name) || "";
        }
      }
      return parentName;
    };
    this.getCategoryName = (category) => {
      var _a;
      return ((_a = category.translations.find((trans) => trans.language === this.language)) == null ? void 0 : _a.name) || "";
    };
    this.getCategoryRows = (categories) => {
      let rows = [];
      categories.map((category) => {
        rows = [...rows, {
          id: category.id,
          name: this.getCategoryName(category),
          parent: this.getParentCategory(category.parentId, categories),
          isActive: category.isActive,
          edit: "Edit",
          delete: "Delete",
          createdAt: category.createdAt,
          image: this.getCategoryImage(category)
        }];
      });
      return rows;
    };
    this.getAllTranslations = (categories) => {
      let translations = [];
      categories.map((category) => category.translations).map((trans) => {
        trans.map((tr) => {
          if (tr.language === this.language) {
            translations = [...translations, {
              id: tr.categoryId,
              name: tr.name
            }];
          }
        });
      });
      return translations;
    };
    this.getCategoryImage = (category) => {
      return `${window.location.origin}/file/categories/${category.images[0].url}`;
    };
    this.getTranslationsDetails = (translations) => {
      const transDetails = {};
      translations.map((trans) => {
        Object.assign(transDetails, {
          [trans.language]: {
            name: trans.name,
            description: trans.description
          }
        });
      });
      return transDetails;
    };
    this.reorder = (formData) => {
      return axios.post(
        "/admin/category/reorder",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data"
          }
        }
      );
    };
    this.flattenCategory = (categories, flatCategories = []) => {
      categories.map((cat) => {
        if (cat.children.length === 0)
          flatCategories = [...flatCategories, cat];
        else {
          flatCategories = flatCategories.concat(this.flattenCategory(cat.children));
        }
      });
      return flatCategories;
    };
  }
};
CategoryService = __decorateClass$3([
  Service()
], CategoryService);
const CategoryService$1 = CategoryService;
var __defProp$2 = Object.defineProperty;
var __getOwnPropDesc$2 = Object.getOwnPropertyDescriptor;
var __decorateClass$2 = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc$2(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result)
    __defProp$2(target, key, result);
  return result;
};
let FormService = class {
  // private languages = usePage().props.settings.languages;
  constructor() {
    this.generateControllerName = (groupName) => {
      return groupName + ".";
    };
    this.generateDefaultValues = (languages) => {
      let translations = {};
      languages.map((language) => language.code).map((code) => {
        Object.assign(translations, {
          [code]: { name: "", description: "", brief: "" }
        });
      });
      return translations;
    };
    this.generateDefaultTitles = (languages) => {
      let translations = {};
      languages.map((language) => language.code).map((code) => {
        Object.assign(translations, {
          [code]: { name: "" }
        });
      });
      return translations;
    };
    this.isNumeric = (val) => {
      return !isNaN(Number(val));
    };
    this.isPositive = (val) => {
      return !isNaN(parseFloat(val)) && parseFloat(val) >= 0;
    };
    this.formQuery = (...args) => {
      let query = "";
      args.forEach((arg) => {
        if (query.length === 0)
          query = query + "?";
        else
          query = query + "&";
        query = query + arg.key + "=" + arg.value;
      });
      return query;
    };
  }
};
FormService = __decorateClass$2([
  Service()
], FormService);
const FormService$1 = FormService;
class File {
  constructor({
    id = -1,
    name = "",
    description = "",
    url = "",
    order = -1,
    isActive = false,
    isCover = false,
    isImage = false
  }) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.url = url;
    this.order = order;
    this.isActive = isActive;
    this.isCover = isCover;
    this.isImage = isImage;
  }
}
var __defProp$1 = Object.defineProperty;
var __getOwnPropDesc$1 = Object.getOwnPropertyDescriptor;
var __decorateClass$1 = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc$1(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result)
    __defProp$1(target, key, result);
  return result;
};
let ProductService = class {
  constructor() {
    this.language = "en";
    this.categoryService = Container.get(CategoryService$1);
    this.formService = Container.get(FormService$1);
    this.getProductName = (product) => {
      var _a;
      return ((_a = product.translations.find((trans) => trans.language === this.language)) == null ? void 0 : _a.name) || "";
    };
    this.mapProductGrid = (products) => {
      return products.map((product) => ({
        id: product.id,
        name: this.getProductName(product),
        avatar: this.getProductImage(product),
        category: this.categoryService.getCategoryName(product.category),
        isActive: product.isActive,
        sellPrice: product.sellPrice,
        originalPrice: product.originalPrice,
        count: product.count,
        sku: product.sku,
        createdAt: product.createdAt,
        totalSales: product.totalSales
      }));
    };
    this.getProductRows = (products) => {
      let rows = [];
      products.map((product) => {
        rows = [...rows, {
          id: product.id,
          name: this.getProductName(product),
          // parent: this.getParentCategory(category.parentId, categories),
          category: this.categoryService.getCategoryName(product.category),
          isActive: product.isActive,
          sellPrice: product.sellPrice,
          originalPrice: product.originalPrice,
          sku: product.sku,
          count: product.count,
          edit: "Edit",
          delete: "Delete",
          createdAt: product.createdAt,
          image: this.getProductImage(product)
        }];
      });
      return rows;
    };
    this.getProducts = (...args) => {
      const query = this.formService.formQuery(...args);
      return axios.get(
        "/admin/product/list" + query,
        {
          headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
          }
        }
      );
    };
    this.getLikes = (id) => {
      return axios.get(
        "/admin/product/likes/" + id,
        {
          headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
          }
        }
      );
    };
    this.getFavorites = (id) => {
      return axios.get(
        "/admin/product/favorites/" + id,
        {
          headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
          }
        }
      );
    };
    this.getRatings = (id) => {
      return axios.get(
        "/admin/product/ratings/" + id,
        {
          headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
          }
        }
      );
    };
    this.getReviews = (id) => {
      return axios.get(
        "/admin/product/reviews/" + id,
        {
          headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
          }
        }
      );
    };
    this.getProductImage = (product) => {
      const img = product.images.find((img2) => img2.isCover) || product.images[0] || new File({});
      return `${window.location.origin}/file/products/${img.url}`;
    };
    this.getImageUrl = (url) => {
      return `${window.location.origin}/file/products/${url}`;
    };
    this.storeProduct = (formData) => {
      return axios.post(
        "/admin/product",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data"
          }
        }
      );
    };
    this.updateProduct = (formData, id) => {
      return axios.post(
        "/admin/product/" + id + "?_method=PATCH",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data"
          }
        }
      );
    };
    this.extendedCategory = (formData, id) => {
      return axios.post(
        "/admin/product/extended/" + id + "?_method=PATCH",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data"
          }
        }
      );
    };
    this.deleteExtendedCategory = (formData, id) => {
      return axios.post(
        "/admin/product/extended/" + id + "?_method=DELETE",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data"
          }
        }
      );
    };
    this.activateProduct = (formData, id) => {
      return axios.post(
        "/admin/product/activate/" + id + "?_method=PATCH",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data"
          }
        }
      );
    };
    this.addImage = (formData, id) => {
      return axios.post(
        "/admin/product/image/" + id,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data"
          }
        }
      );
    };
    this.uploadImage = (formData, id) => {
      return axios.post(
        "/admin/product/image/" + id + "?_method=PATCH",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data"
          }
        }
      );
    };
    this.deleteImage = (formData, id) => {
      return axios.post(
        "/admin/product/image/" + id + "?_method=DELETE",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data"
          }
        }
      );
    };
    this.deleteProduct = (id) => {
      return axios.post(
        "/admin/product/" + id + "?_method=DELETE",
        {},
        {
          headers: {
            "Content-Type": "multipart/form-data"
          }
        }
      );
    };
    this.getTranslationsDetails = (translations) => {
      const transDetails = {};
      translations.map((trans) => {
        Object.assign(transDetails, {
          [trans.language]: {
            name: trans.name,
            description: trans.description
          }
        });
      });
      return transDetails;
    };
    this.uniqueSKU = (sku, id = -1) => {
      return axios.post(
        "/admin/product/sku/" + id,
        { sku },
        {
          headers: {
            "Content-Type": "multipart/form-data"
          }
        }
      );
    };
    this.getCount = () => {
      return axios.get(
        "/admin/product/count",
        {
          headers: {
            "Content-Type": "multipart/form-data"
          }
        }
      );
    };
    this.getLocaleProducts = (lang, ...args) => {
      const query = this.formService.formQuery(...args);
      return axios.get(
        `/${lang}/product/list` + query,
        {
          headers: {
            "Accept": "application/json"
          }
        }
      );
    };
    this.getLocaleProduct = (lang, id) => {
      return axios.get(
        `/${lang}/product/get/${id}`,
        {
          headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
          }
        }
      );
    };
    this.searchProductByName = (name) => {
      return axios.get(
        "/product/search/" + name,
        {
          headers: {
            "Accept": "application/json"
          }
        }
      );
    };
    this.like = (formData) => {
      return axios.post(
        "/product/like",
        formData,
        {
          headers: {
            "Accept": "application/json"
          }
        }
      );
    };
    this.favorite = (formData) => {
      return axios.post(
        "/product/favorite",
        formData,
        {
          headers: {
            "Accept": "application/json"
          }
        }
      );
    };
    this.review = (formData) => {
      return axios.post(
        "/product/review",
        formData,
        {
          headers: {
            "Accept": "application/json"
          }
        }
      );
    };
    this.rate = (formData) => {
      return axios.post(
        "/product/rate",
        formData,
        {
          headers: {
            "Accept": "application/json"
          }
        }
      );
    };
    this.getProductsActivities = () => {
      return axios.get(
        "/product/activities",
        {
          headers: {
            "Accept": "application/json"
          }
        }
      );
    };
    this.getPrice = (product) => {
      if (product.offer === null)
        return product.sellPrice;
      else {
        if (product.offer.isPercent)
          return product.sellPrice * (1 - product.offer.amount / 100);
        else
          return product.sellPrice - product.offer.amount;
      }
    };
    this.allLikes = () => {
      return axios.get(
        "/admin/product/all/likes",
        {
          headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
          }
        }
      );
    };
    this.allFavorites = () => {
      return axios.get(
        "/admin/product/all/favorites",
        {
          headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
          }
        }
      );
    };
    this.allRatings = () => {
      return axios.get(
        "/admin/product/all/ratings",
        {
          headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
          }
        }
      );
    };
    this.allReviews = () => {
      return axios.get(
        "/admin/product/all/reviews",
        {
          headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
          }
        }
      );
    };
    this.topProducts = () => {
      return axios.get(
        "/admin/product/top/sales",
        {
          headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
          }
        }
      );
    };
    this.localeTopProducts = (lang = "en", ...args) => {
      const query = this.formService.formQuery(...args);
      return axios.get(
        `/${lang}/product/top/sales` + query,
        {
          headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
          }
        }
      );
    };
    this.localeOffers = (lang = "en", ...args) => {
      const query = this.formService.formQuery(...args);
      return axios.get(
        `/${lang}/product/offers` + query,
        {
          headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
          }
        }
      );
    };
  }
};
ProductService = __decorateClass$1([
  Service()
], ProductService);
const ProductService$1 = ProductService;
const initialState$3 = {
  openCart: false,
  cart: []
};
const secureCartService = Container.get(SecureCartService$1);
Container.get(ProductService$1);
const cartSlice = createSlice({
  name: "cart",
  initialState: initialState$3,
  reducers: {
    setOpenCart: (state, action) => {
      state.openCart = action.payload;
    },
    addToCart: (state, action) => {
      if (state.cart.map((c) => c.product).map((prod) => prod.id).includes(action.payload.product.id)) {
        state.cart = state.cart.map((c) => {
          if (c.product.id === action.payload.product.id) {
            return { ...c, quantity: c.quantity + action.payload.quantity || 1 };
          } else {
            return c;
          }
        });
        secureCartService.encryptCart(state);
      } else {
        state.cart = [...state.cart, action.payload];
        secureCartService.encryptCart(state);
      }
    },
    replaceQuantity: (state, action) => {
      if (state.cart.map((c) => c.product).map((prod) => prod.id).includes(action.payload.product.id)) {
        state.cart = state.cart.map((c) => {
          if (c.product.id === action.payload.product.id) {
            return { ...c, quantity: action.payload.quantity || 1 };
          } else
            return c;
        });
        secureCartService.encryptCart(state);
      } else {
        state.cart = [...state.cart, action.payload];
        secureCartService.encryptCart(state);
      }
    },
    removeFromCart: (state, action) => {
      state.cart = state.cart.filter((item) => item.product.id !== action.payload);
      secureCartService.encryptCart(state);
    },
    resetCart: (state) => {
      state.cart = [];
      secureCartService.removeCart();
    },
    restoreCart: (state) => {
      const cart = secureCartService.decryptCart();
      if (cart) {
        state.cart = cart.cart;
      }
    }
  }
});
const {
  setOpenCart,
  addToCart,
  replaceQuantity,
  removeFromCart,
  resetCart,
  restoreCart
} = cartSlice.actions;
const CartReducer = cartSlice.reducer;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __decorateClass = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result)
    __defProp(target, key, result);
  return result;
};
let MapService = class {
  constructor() {
    this.getLocationData = (lng, lat) => {
      return axios.get(
        `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${{}.VITE_GOOGLE_MAP}`,
        {
          headers: {
            "Accept": "application/json",
            "With-Credentials": false,
            "x-requested-with": false
          }
        }
      );
    };
  }
};
MapService = __decorateClass([
  Service()
], MapService);
const MapService$1 = MapService;
Container.get(MapService$1);
const initialState$2 = {
  coordinates: null,
  results: [],
  plus_code: {
    compound_code: "",
    global_code: ""
  }
};
const MapSlice = createSlice({
  name: "map",
  initialState: initialState$2,
  reducers: {
    setLocation: (state, action) => {
      return { ...state, results: action.payload.results, plus_code: action.payload.plus_code };
    },
    setCoordinates: (state, action) => {
      state.coordinates = action.payload;
    },
    setAll: (state, action) => {
      return {
        ...state,
        coordinates: action.payload.coordinates,
        results: action.payload.results,
        plus_code: action.payload.plus_code
      };
    }
  }
});
MapSlice.actions;
const MapReducer = MapSlice.reducer;
const initialState$1 = {
  products: [],
  loading: false
};
const localeProductSlice = createSlice({
  name: "localProduct",
  initialState: initialState$1,
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload;
    },
    appendProducts: (state, action) => {
      state.products = [...state.products, ...action.payload];
    },
    resetProducts: (state) => {
      state.products = [];
    },
    setLoading: (state) => {
      state.loading = true;
    },
    stopLoading: (state) => {
      state.loading = false;
    }
  }
});
localeProductSlice.actions;
const LocaleProductReducer = localeProductSlice.reducer;
const initialState = {
  code: "",
  amount: 0,
  isPercent: false,
  valid: false
};
const CouponSlice = createSlice({
  name: "coupon",
  initialState,
  reducers: {
    setCoupon: (state, action) => {
      state.code = action.payload.code;
      state.amount = action.payload.amount;
      state.isPercent = action.payload.isPercent;
      state.valid = action.payload.valid;
    },
    clearCoupon: (state) => {
      state.code = "";
      state.amount = 0;
      state.isPercent = false;
      state.valid = false;
    }
  }
});
CouponSlice.actions;
const CouponReducer = CouponSlice.reducer;
const store = configureStore({
  reducer: {
    user: UserReducer,
    accounts: AccountReducer,
    languages: LanguageReducer,
    theme: ThemeReducer,
    siteTheme: SiteThemeReducer,
    spinner: SpinnerReducer,
    siteSidebar: SiteSidebarReducer,
    cart: CartReducer,
    map: MapReducer,
    products: LocaleProductReducer,
    coupon: CouponReducer
  }
});
const translation$1 = {
  tera: "TERA MEDIA SOLUTION",
  "our-services": "Our Services",
  "our-clients": "Our Clients",
  gallery: "Gallery",
  "our-missions": "Our Mission",
  "about-us": "About Us",
  "contact-us": "Contact Us",
  name: "Name",
  email: "Email",
  message: "Message",
  "your-message": "Your Message",
  send: "Send",
  "name-is-required": "Name is Required",
  "invalid-email": "Invalid Email Form",
  "minimum-length": "Minimum Length is {{length}}",
  "maximum-length": "Maximum Length is {{length}}",
  subject: "Subject",
  "all-rights-reserved": "All Rights Reserved",
  "see-what-we-can-do": "See What We Can Do",
  more: "Read More",
  asas: "ASAS Group for auditing, tax, and accounting consulting",
  industries: "Industries",
  news: "News",
  articles: "Articles"
};
const enJSON = {
  translation: translation$1
};
const translation = {
  tera: "تيرا للدعاية والإعلان",
  "our-services": "خدماتنا",
  "our-clients": "عملاؤنا",
  gallery: "ألبوم الصور",
  "our-missions": "رسالتنا",
  "about-us": "من نحن",
  "contact-us": "تواصل معنا",
  name: "الاسم",
  email: "الايميل",
  message: "الرسالة",
  "your-message": "رسالتك",
  send: "أرسل",
  "name-is-required": "حقل الاسم مطلوب",
  "invalid-email": "صيغة الإيميل غير صالحة",
  "minimum-length": "الطول الأقصر هو {{length}}",
  "maximum-length": "الحجم الأكبر للرسالة {{length}}",
  subject: "الموضوع",
  "all-rights-reserved": "جميع الحقوق محفوظة",
  "see-what-we-can-do": "ماذا يمكننا أن نقدم؟",
  more: "المزيد",
  asas: "مـجـمـوعة اساس للتدقيق والاستشارات الضريبية والمحاسبية",
  industries: "المجالات",
  news: "الأخبار",
  articles: "المقالات"
};
const arJSON = {
  translation
};
i18n.use(initReactI18next).init({
  resources: {
    en: { ...enJSON },
    ar: { ...arJSON }
  },
  // Where we're going to put translations' files
  lng: "en"
  // Set the initial language of the App
});
const LanguageHandlerContext = React.createContext({ lang: "" });
const LanguageHandlerProvider = ({ children, value }) => {
  const { t, i18n: { changeLanguage, language } } = useTranslation();
  React.useMemo(() => {
    changeLanguage(value.lang);
  }, [value.lang]);
  return /* @__PURE__ */ jsx(LanguageHandlerContext.Provider, { value, children });
};
const useAppDispatch = useDispatch;
const useAppSelector = useSelector;
const CartHandlerContext = React.createContext({});
const CartHandlerProvider = ({ children }) => {
  const dispatch = useAppDispatch();
  React.useEffect(() => {
    dispatch(restoreCart());
  }, []);
  return /* @__PURE__ */ jsx(CartHandlerContext.Provider, { value: {}, children });
};
const appName = "D S H International Construction";
createInertiaApp({
  title: (title) => `${title} - ${appName}`,
  resolve: (name) => resolvePageComponent(`./Pages/${name}.tsx`, /* @__PURE__ */ Object.assign({ "./Pages/Admin/Auth/Login.tsx": () => import("./assets/Login-88de06c4.js"), "./Pages/Admin/Auth/Partials/LoginForm.tsx": () => import("./assets/LoginForm-358e8939.js"), "./Pages/Admin/Home/Home.tsx": () => import("./assets/Home-d72cd192.js"), "./Pages/Admin/Home/Partials/OrderTimeline.tsx": () => import("./assets/OrderTimeline-1e361d49.js"), "./Pages/Admin/Home/Partials/ProductActivities.tsx": () => import("./assets/ProductActivities-1a051e60.js"), "./Pages/Admin/Home/Partials/Statistics.tsx": () => import("./assets/Statistics-c2833c90.js"), "./Pages/Admin/Home/Partials/TopProducts.tsx": () => import("./assets/TopProducts-129dea49.js"), "./Pages/Admin/Website/Blocks/About/AboutAdd.tsx": () => import("./assets/AboutAdd-748fea12.js"), "./Pages/Admin/Website/Blocks/About/AboutForm.tsx": () => import("./assets/AboutForm-c14e0d03.js"), "./Pages/Admin/Website/Blocks/About/AboutUpdate.tsx": () => import("./assets/AboutUpdate-76c8e933.js"), "./Pages/Admin/Website/Blocks/Articles/ArticleForm.tsx": () => import("./assets/ArticleForm-4ed993c7.js"), "./Pages/Admin/Website/Blocks/Articles/ArticlesAdd.tsx": () => import("./assets/ArticlesAdd-4de192d9.js"), "./Pages/Admin/Website/Blocks/Articles/ArticlesUpdate.tsx": () => import("./assets/ArticlesUpdate-129ff0d2.js"), "./Pages/Admin/Website/Blocks/BlockContainer.tsx": () => import("./assets/BlockContainer-69a87726.js"), "./Pages/Admin/Website/Blocks/Clients/ClientForm.tsx": () => import("./assets/ClientForm-421e7d72.js"), "./Pages/Admin/Website/Blocks/Clients/ClientsAdd.tsx": () => import("./assets/ClientsAdd-ef897eeb.js"), "./Pages/Admin/Website/Blocks/Clients/ClientsUpdate.tsx": () => import("./assets/ClientsUpdate-a25c0556.js"), "./Pages/Admin/Website/Blocks/CoreValues/CoreValuesAdd.tsx": () => import("./assets/CoreValuesAdd-6d1c43f0.js"), "./Pages/Admin/Website/Blocks/CoreValues/CoreValuesUpdate.tsx": () => import("./assets/CoreValuesUpdate-97dbfe19.js"), "./Pages/Admin/Website/Blocks/Gallery/GalleryAdd.tsx": () => import("./assets/GalleryAdd-42a7e188.js"), "./Pages/Admin/Website/Blocks/Gallery/GalleryUpdate.tsx": () => import("./assets/GalleryUpdate-f610ceaa.js"), "./Pages/Admin/Website/Blocks/GeneralDirectorSpeech/GeneralDirectorAdd.tsx": () => import("./assets/GeneralDirectorAdd-da81f5c8.js"), "./Pages/Admin/Website/Blocks/GeneralDirectorSpeech/GeneralDirectorForm.tsx": () => import("./assets/GeneralDirectorForm-89d01b3e.js"), "./Pages/Admin/Website/Blocks/GeneralDirectorSpeech/GeneralDirectorUpdate.tsx": () => import("./assets/GeneralDirectorUpdate-72529b3b.js"), "./Pages/Admin/Website/Blocks/Industries/IndustriesAdd.tsx": () => import("./assets/IndustriesAdd-a502da79.js"), "./Pages/Admin/Website/Blocks/Industries/IndustriesUpdate.tsx": () => import("./assets/IndustriesUpdate-e6aab2b6.js"), "./Pages/Admin/Website/Blocks/Industries/IndustryForm.tsx": () => import("./assets/IndustryForm-952a0408.js"), "./Pages/Admin/Website/Blocks/LeadershipPhilosophy/LeadershipPhilosophyAdd.tsx": () => import("./assets/LeadershipPhilosophyAdd-e2e74042.js"), "./Pages/Admin/Website/Blocks/LeadershipPhilosophy/LeadershipPhilosophyUpdate.tsx": () => import("./assets/LeadershipPhilosophyUpdate-fdb12b5f.js"), "./Pages/Admin/Website/Blocks/MainSection/MainSectionAdd.tsx": () => import("./assets/MainSectionAdd-95c949ee.js"), "./Pages/Admin/Website/Blocks/MainSection/MainSectionForm.tsx": () => import("./assets/MainSectionForm-ff3e588e.js"), "./Pages/Admin/Website/Blocks/MainSection/MainSectionUpdate.tsx": () => import("./assets/MainSectionUpdate-5e94bb88.js"), "./Pages/Admin/Website/Blocks/ManagerProfile/ManagerProfileAdd.tsx": () => import("./assets/ManagerProfileAdd-bc13270b.js"), "./Pages/Admin/Website/Blocks/ManagerProfile/ManagerProfileUpdate.tsx": () => import("./assets/ManagerProfileUpdate-04228cbe.js"), "./Pages/Admin/Website/Blocks/Mission/MissionAdd.tsx": () => import("./assets/MissionAdd-930b0bdc.js"), "./Pages/Admin/Website/Blocks/Mission/MissionForm.tsx": () => import("./assets/MissionForm-a49595b3.js"), "./Pages/Admin/Website/Blocks/Mission/MissionUpdate.tsx": () => import("./assets/MissionUpdate-bd158b5c.js"), "./Pages/Admin/Website/Blocks/News/NewsAdd.tsx": () => import("./assets/NewsAdd-ef3395c6.js"), "./Pages/Admin/Website/Blocks/News/NewsForm.tsx": () => import("./assets/NewsForm-c0d7d762.js"), "./Pages/Admin/Website/Blocks/News/NewsUpdate.tsx": () => import("./assets/NewsUpdate-8cce3f17.js"), "./Pages/Admin/Website/Blocks/Partials/BlockAdd.tsx": () => import("./assets/BlockAdd-e002c0fb.js"), "./Pages/Admin/Website/Blocks/Partials/BlockList.tsx": () => import("./assets/BlockList-20e7ebf5.js"), "./Pages/Admin/Website/Blocks/Partials/BlockReorder.tsx": () => import("./assets/BlockReorder-68cfc2fa.js"), "./Pages/Admin/Website/Blocks/Partials/BlockUpdate.tsx": () => import("./assets/BlockUpdate-f8e3bb10.js"), "./Pages/Admin/Website/Blocks/Projects/ProjectsAdd.tsx": () => import("./assets/ProjectsAdd-9279dca9.js"), "./Pages/Admin/Website/Blocks/Projects/ProjectsUpdate.tsx": () => import("./assets/ProjectsUpdate-f06d9f05.js"), "./Pages/Admin/Website/Blocks/Services/ServicesAdd.tsx": () => import("./assets/ServicesAdd-161c444e.js"), "./Pages/Admin/Website/Blocks/Services/ServicesForm.tsx": () => import("./assets/ServicesForm-e0086fdf.js"), "./Pages/Admin/Website/Blocks/Services/ServicesUpdate.tsx": () => import("./assets/ServicesUpdate-2ad02327.js"), "./Pages/Admin/Website/Blocks/StoreSection/StoreSectionAdd.tsx": () => import("./assets/StoreSectionAdd-be1016d3.js"), "./Pages/Admin/Website/Blocks/StoreSection/StoreSectionForm.tsx": () => import("./assets/StoreSectionForm-a2bca8e5.js"), "./Pages/Admin/Website/Blocks/StoreSection/StoreSectionUpdate.tsx": () => import("./assets/StoreSectionUpdate-bbda18e4.js"), "./Pages/Admin/Website/Blocks/Vision/VisionAdd.tsx": () => import("./assets/VisionAdd-fb9aa158.js"), "./Pages/Admin/Website/Blocks/Vision/VisionUpdate.tsx": () => import("./assets/VisionUpdate-f328c25e.js"), "./Pages/Admin/Website/Links/Contact/ContactLinkAdd.tsx": () => import("./assets/ContactLinkAdd-c39cf152.js"), "./Pages/Admin/Website/Links/Contact/ContactLinkUpdate.tsx": () => import("./assets/ContactLinkUpdate-691e77c1.js"), "./Pages/Admin/Website/Links/Footer/FooterAdd.tsx": () => import("./assets/FooterAdd-8f91dd1e.js"), "./Pages/Admin/Website/Links/Footer/FooterUpdate.tsx": () => import("./assets/FooterUpdate-45e745fa.js"), "./Pages/Admin/Website/Links/Main/MainLinkAdd.tsx": () => import("./assets/MainLinkAdd-58da13ab.js"), "./Pages/Admin/Website/Links/Main/MainLinkUpdate.tsx": () => import("./assets/MainLinkUpdate-8e4d3a6c.js"), "./Pages/Admin/Website/Links/MenuContainer.tsx": () => import("./assets/MenuContainer-11cd7b3f.js"), "./Pages/Admin/Website/Links/Partials/MenuAdd.tsx": () => import("./assets/MenuAdd-13b3d0ce.js"), "./Pages/Admin/Website/Links/Partials/MenuList.tsx": () => import("./assets/MenuList-b1990c1d.js"), "./Pages/Admin/Website/Links/Partials/MenuReorder.tsx": () => import("./assets/MenuReorder-fbba7fce.js"), "./Pages/Admin/Website/Links/Partials/MenuUpdate.tsx": () => import("./assets/MenuUpdate-616fea95.js"), "./Pages/Admin/Website/Links/Social/SocialLinkAdd.tsx": () => import("./assets/SocialLinkAdd-5a259471.js"), "./Pages/Admin/Website/Links/Social/SocialLinkUpdate.tsx": () => import("./assets/SocialLinkUpdate-396fef7f.js"), "./Pages/Dashboard.tsx": () => import("./assets/Dashboard-67cd64a0.js"), "./Pages/Profile/Edit.tsx": () => import("./assets/Edit-55858381.js"), "./Pages/Profile/Partials/DeleteUserForm.tsx": () => import("./assets/DeleteUserForm-8dd797c3.js"), "./Pages/Profile/Partials/UpdatePasswordForm.tsx": () => import("./assets/UpdatePasswordForm-dc8ce42a.js"), "./Pages/Profile/Partials/UpdateProfileInformationForm.tsx": () => import("./assets/UpdateProfileInformationForm-da10d405.js"), "./Pages/Site/Blocks/AboutUs/AboutUsList.tsx": () => import("./assets/AboutUsList-6ed06512.js"), "./Pages/Site/Blocks/AboutUs/Partials/AboutPage.tsx": () => import("./assets/AboutPage-aa2d8e6a.js"), "./Pages/Site/Blocks/AboutUs/Partials/AboutUsDetails.tsx": () => import("./assets/AboutUsDetails-510769db.js"), "./Pages/Site/Blocks/AboutUs/Partials/GeneralDirectorSpeech.tsx": () => import("./assets/GeneralDirectorSpeech-ac154b13.js"), "./Pages/Site/Blocks/AboutUs/Partials/MissionDetails.tsx": () => import("./assets/MissionDetails-769e6610.js"), "./Pages/Site/Blocks/AboutUs/Partials/MissionList.tsx": () => import("./assets/MissionList-05983eef.js"), "./Pages/Site/Blocks/Articles/ArticleCard.tsx": () => import("./assets/ArticleCard-3e503df1.js"), "./Pages/Site/Blocks/Articles/ArticleDetails.tsx": () => import("./assets/ArticleDetails-2f3295df.js"), "./Pages/Site/Blocks/Articles/ArticlesList.tsx": () => import("./assets/ArticlesList-bf8d8597.js"), "./Pages/Site/Blocks/Clients/ClientDetails.tsx": () => import("./assets/ClientDetails-9c82a8cb.js"), "./Pages/Site/Blocks/Clients/ClientsList.tsx": () => import("./assets/ClientsList-0f5cc818.js"), "./Pages/Site/Blocks/Contact/Contact.tsx": () => import("./assets/Contact-819367c5.js"), "./Pages/Site/Blocks/Gallery/GalleryCard.tsx": () => import("./assets/GalleryCard-5ebb6d33.js"), "./Pages/Site/Blocks/Gallery/GalleryDetails.tsx": () => import("./assets/GalleryDetails-9ca2e0b7.js"), "./Pages/Site/Blocks/Gallery/GalleryList.tsx": () => import("./assets/GalleryList-4d4b33a5.js"), "./Pages/Site/Blocks/Industries/IndustriesList.tsx": () => import("./assets/IndustriesList-db45c56a.js"), "./Pages/Site/Blocks/Industries/IndustryCard.tsx": () => import("./assets/IndustryCard-509aa060.js"), "./Pages/Site/Blocks/Industries/IndustryDetails.tsx": () => import("./assets/IndustryDetails-344393f1.js"), "./Pages/Site/Blocks/News/NewsCard.tsx": () => import("./assets/NewsCard-f345105c.js"), "./Pages/Site/Blocks/News/NewsDetails.tsx": () => import("./assets/NewsDetails-e38c0a4b.js"), "./Pages/Site/Blocks/News/NewsList.tsx": () => import("./assets/NewsList-98077556.js"), "./Pages/Site/Blocks/Services/ServiceCard.tsx": () => import("./assets/ServiceCard-76464f35.js"), "./Pages/Site/Blocks/Services/ServicesDetails.tsx": () => import("./assets/ServicesDetails-9823cc38.js"), "./Pages/Site/Blocks/Services/ServicesList.tsx": () => import("./assets/ServicesList-092d1293.js"), "./Pages/Site/Home.tsx": () => import("./assets/Home-ef71e825.js"), "./Pages/Site/Home/Swiper/Components/ProductAction.tsx": () => import("./assets/ProductAction-93b6c0fe.js"), "./Pages/Site/Home/Swiper/Components/ProductImage.tsx": () => import("./assets/ProductImage-7c9e89e8.js"), "./Pages/Site/Home/Swiper/Components/ProductModal.tsx": () => import("./assets/ProductModal-8dae18f6.js"), "./Pages/Site/Home/Swiper/Components/ProductName.tsx": () => import("./assets/ProductName-fe8f9eba.js"), "./Pages/Site/Home/Swiper/Components/ProductSwiper.tsx": () => import("./assets/ProductSwiper-db75790a.js"), "./Pages/Site/Home/Swiper/SwiperContainer.tsx": () => import("./assets/SwiperContainer-9820afda.js"), "./Pages/Site/Home/Swiper/SwiperContext.tsx": () => import("./assets/SwiperContext-5a5f5757.js"), "./Pages/Site/HubDetails.tsx": () => import("./assets/HubDetails-e131cb8a.js"), "./Pages/Site/HubList.tsx": () => import("./assets/HubList-2a2a6e2b.js"), "./Pages/Welcome.tsx": () => import("./assets/Welcome-00f4109e.js") })),
  setup({ el, App, props }) {
    var _a;
    const root = createRoot(el);
    registerLicense("Ngo9BigBOggjHTQxAR8/V1NAaF5cWWJCf1FpRmJGdld5fUVHYVZUTXxaS00DNHVRdkdnWX1ecnRcQmReV0R2V0A=");
    root.render(
      /* @__PURE__ */ jsx(Provider, { store, children: /* @__PURE__ */ jsx(LocalizationProvider, { dateAdapter: AdapterDateFns, children: /* @__PURE__ */ jsx(LanguageHandlerProvider, { value: { lang: ((_a = props.initialPage.props) == null ? void 0 : _a.lang) || "en" }, children: /* @__PURE__ */ jsx(CartHandlerProvider, { children: /* @__PURE__ */ jsx(App, { ...props }) }) }) }) })
    );
  },
  progress: {
    color: "#4B5563"
  }
});
export {
  CommonService$1 as C,
  FormService$1 as F,
  ProductService$1 as P,
  addToCart as a,
  File as b,
  useAppSelector as c,
  setMode as d,
  setSiteMode as e,
  setSpinner as s,
  useAppDispatch as u
};
