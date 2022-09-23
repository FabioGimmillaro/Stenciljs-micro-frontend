//import { h } from "@stencil/core";
//
//export const TAG_TRANSFORMS = Symbol.for("TAG_TRANSFORMS");
//
//type TagTransform = (tag: string) => string;
//
//declare global {
//  interface Window {
//    [TAG_TRANSFORMS]: WeakMap<typeof h, TagTransform>;
//  }
//}
//

const applyConfiguration = (config: any) => {
  console.log("CONFIG", config);
  //if (config?.transformTagName == null) {
  //  return;
  //}
//
  //window[TAG_TRANSFORMS] = window[TAG_TRANSFORMS] ?? new WeakMap();
//
  //// Sets h as key because it is a unique reference for every lib.
  //window[TAG_TRANSFORMS].set(h, config.transformTagName);
};

export default applyConfiguration;
