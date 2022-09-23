import { TAG_TRANSFORMS } from "../global/global";
import { h } from "@stencil/core";

export function transformTag(tag: string): string {
  const isCustomElement = tag.startsWith("dx-") || tag.startsWith("ds-");
  return isCustomElement
    ? (window[TAG_TRANSFORMS] as WeakMap<any, any>)?.get(h)?.(tag) ?? tag
    : tag;
}
