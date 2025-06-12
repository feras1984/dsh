import { Service } from "typedi";
import axios from "axios";
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
let MenuService = class {
  constructor() {
    this.language = "en";
    this.mapMenuGrid = (menus) => {
      return menus.map((menu) => ({
        id: menu.id,
        name: this.getMenuName(menu),
        parent: this.getParentMenu(menu.parentId, menus),
        isActive: menu.isActive
      }));
    };
    this.getTranslationsDetails = (translations) => {
      const transDetails = {};
      translations.map((trans) => {
        Object.assign(transDetails, {
          [trans.language]: {
            name: trans.name
          }
        });
      });
      return transDetails;
    };
    this.getAllTranslations = (menus, parent = false) => {
      let translations = [];
      menus.filter(
        (menu) => parent && menu.type === "List" || !parent
      ).map((menu) => menu.translations).map((trans) => {
        trans.map((tr) => {
          if (tr.language === this.language) {
            translations = [...translations, {
              id: tr.menuId,
              name: tr.name
            }];
          }
        });
      });
      return translations;
    };
    this.getParentMenu = (parentId, menus) => {
      var _a;
      let parentName = "";
      if (parentId !== null) {
        const parentMenu = menus.find((menu) => menu.id === parentId) || null;
        if (parentMenu !== null) {
          parentName = ((_a = parentMenu.translations.find((trans) => trans.language === this.language)) == null ? void 0 : _a.name) || "";
        }
      }
      return parentName;
    };
    this.getMenuName = (menu) => {
      var _a;
      return ((_a = menu.translations.find((trans) => trans.language === this.language)) == null ? void 0 : _a.name) || "";
    };
    this.getMenuRows = (menus) => {
      let rows = [];
      menus.map((menu) => {
        rows = [...rows, {
          id: menu.id,
          name: this.getMenuName(menu),
          parent: this.getParentMenu(menu.parentId, menus),
          isActive: menu.isActive,
          edit: "Edit",
          delete: "Delete",
          createdAt: menu.createdAt
          // image: this.getBlockImage(block),
        }];
      });
      return rows;
    };
    this.storeMenu = (formData) => {
      return axios.post(
        "/admin/website/menu",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data"
          }
        }
      );
    };
    this.updateMenu = (formData, id) => {
      return axios.post(
        "/admin/website/menu/" + id + "?_method=PATCH",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data"
          }
        }
      );
    };
    this.menuActivation = (formData, id) => {
      return axios.post(
        "/admin/website/menu/activation/" + id + "?_method=PATCH",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data"
          }
        }
      );
    };
    this.updateFile = (formData, id) => {
      return axios.post(
        "/admin/website/menu/upload/file/" + id + "?_method=PATCH",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data"
          }
        }
      );
    };
    this.deleteMenu = (id) => {
      return axios.post(
        "/admin/website/menu/" + id + "?_method=DELETE",
        {},
        {
          headers: {
            "Content-Type": "multipart/form-data"
          }
        }
      );
    };
    this.reorder = (formData) => {
      return axios.post(
        "/admin/website/menu/reorder",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data"
          }
        }
      );
    };
  }
};
MenuService = __decorateClass([
  Service()
], MenuService);
const MenuService$1 = MenuService;
export {
  MenuService$1 as M
};
