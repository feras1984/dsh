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
let BlockService = class {
  constructor() {
    this.language = "en";
    this.mapBlocksGrid = (blocks) => {
      return blocks.map((block) => ({
        id: block.id,
        avatar: this.getBlockImage(block) || "",
        name: this.getBlockName(block),
        parent: this.getParentBlock(block.parentId, blocks),
        isActive: block.isActive,
        createdAt: block.createdAt
      }));
    };
    this.getParentBlock = (parentId, blocks) => {
      var _a;
      let parentName = "";
      if (parentId !== null) {
        const parentBlock = blocks.find((cat) => cat.id === parentId) || null;
        if (parentBlock !== null) {
          parentName = ((_a = parentBlock.translations.find((trans) => trans.language === this.language)) == null ? void 0 : _a.name) || "";
        }
      }
      return parentName;
    };
    this.getBlockName = (block) => {
      var _a;
      return ((_a = block.translations.find((trans) => trans.language === this.language)) == null ? void 0 : _a.name) || "";
    };
    this.getBlockRows = (blocks) => {
      let rows = [];
      blocks.map((block) => {
        rows = [...rows, {
          id: block.id,
          name: this.getBlockName(block),
          parent: this.getParentBlock(block.parentId, blocks),
          isActive: block.isActive,
          edit: "Edit",
          delete: "Delete",
          createdAt: block.createdAt,
          image: this.getBlockImage(block) || ""
        }];
      });
      return rows;
    };
    this.getBlockImage = (block) => {
      if (block.images.length === 0)
        return null;
      return `${window.location.origin}/file/blocks/${block.images[0].url}`;
    };
    this.getImageUrl = (url) => {
      return `${window.location.origin}/file/blocks/${url}`;
    };
    this.getTranslationsDetails = (translations) => {
      const transDetails = {};
      translations.map((trans) => {
        Object.assign(transDetails, {
          [trans.language]: {
            name: trans.name,
            description: trans.description,
            brief: trans.brief
          }
        });
      });
      return transDetails;
    };
    this.storeBlock = (formData) => {
      return axios.post(
        "/admin/website/block",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data"
          }
        }
      );
    };
    this.updateBlock = (formData, id) => {
      return axios.post(
        "/admin/website/block/translations/" + id + "?_method=PATCH",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data"
          }
        }
      );
    };
    this.blockActivation = (formData, id) => {
      return axios.post(
        "/admin/website/block/activation/" + id + "?_method=PATCH",
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
        "/admin/website/block/upload/file/" + id,
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
        "/admin/website/block/upload/file/" + id + "?_method=PATCH",
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
        "/admin/website/block/upload/file/" + id + "?_method=DELETE",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data"
          }
        }
      );
    };
    this.deleteBlock = (id) => {
      return axios.post(
        "/admin/website/block/" + id + "?_method=DELETE",
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
        "/admin/website/block/reorder",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data"
          }
        }
      );
    };
    this.getActiveBlocks = (category) => {
      return axios.get(
        `/api/website/get-blocks/${category}`
      );
    };
  }
};
BlockService = __decorateClass([
  Service()
], BlockService);
const BlockService$1 = BlockService;
export {
  BlockService$1 as B
};
