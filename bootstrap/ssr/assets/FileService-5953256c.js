import { Service } from "typedi";
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
let FileService = class {
  constructor() {
    this.DefaultImage = "/file/defaults/default-cover.jpg";
    this.convertBase64 = (file) => {
      return new Promise((resolve, reject) => {
        const fileReader = new FileReader();
        fileReader.readAsDataURL(file);
        fileReader.onload = () => {
          resolve(fileReader.result);
        };
        fileReader.onerror = (error) => {
          reject(error);
        };
      });
    };
  }
  assertImage(file) {
    if (file) {
      const mimeType = file.type;
      return mimeType.match(/image\/*/) !== null;
    }
    return false;
  }
  assertSize(file) {
    if (file) {
      const size = file.size;
      console.log("size: ", size);
      return size / 1024 <= FileService.MAX_FILE_SIZE;
    }
    return false;
  }
  // assertImage(file: File, control: AbstractControl<any, any> | null) {
  //     if(file){
  //         this.convertBase64(file).then((data) => {
  //             const mimeType = file.type;
  //
  //             if (mimeType.match(/image\/*/) == null) {
  //                 if(control){
  //                     control.setErrors({'isNotImage': true})
  //                 }
  //             }
  //         });
  //     }
  //     return null;
  //
  // }
};
FileService.LOGO = "/file/logo";
FileService.MAX_FILE_SIZE = 500;
FileService = __decorateClass([
  Service()
], FileService);
const FileService$1 = FileService;
export {
  FileService$1 as F
};
