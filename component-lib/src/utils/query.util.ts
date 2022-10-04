import { componentLibTagTransformer } from "../index";

export function transformTag(tag: string): string {
  const isCustomElement = tag.startsWith('my-');
  return isCustomElement ? componentLibTagTransformer(tag) : tag;
}
