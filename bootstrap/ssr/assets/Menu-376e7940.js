import { M as MainMenuTypesEnum } from "./MainMenuTypesEnum-f980ffeb.js";
class Menu {
  constructor({
    id = -1,
    parentId = -1,
    category = "",
    name = "",
    order = -1,
    url = "",
    target = "",
    type = MainMenuTypesEnum.BLOCK,
    blockType = "",
    file = null,
    translations = [],
    isActive = false,
    createdAt = "",
    image = ""
  }) {
    this.id = id;
    this.parentId = parentId;
    this.category = category;
    this.name = name;
    this.order = order;
    this.url = url;
    this.target = target;
    this.type = type;
    this.blockType = blockType;
    this.file = file;
    this.translations = [...translations];
    this.isActive = isActive;
    this.createdAt = createdAt;
    this.image = image;
  }
}
Menu.columns = [
  "id",
  "name",
  "category",
  "order",
  "isActive",
  "details"
  // 'createdAt',
];
export {
  Menu as M
};
