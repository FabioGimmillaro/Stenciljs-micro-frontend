import { getTransformationFunction } from '../global/global';
export function transformTag(tag: string): string {
  const isCustomElement = tag.startsWith('my-');
  return isCustomElement ? getTransformationFunction()?.(tag) ?? tag : tag;
}
