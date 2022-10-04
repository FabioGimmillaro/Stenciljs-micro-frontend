import { getTransformationFunction, TAG_TRANSFORMS_KEY_OBJECT } from '../global/global';
export function transformTag(tag: string): string {
  const isCustomElement = tag.startsWith('my-');
  console.log('DOING TRANSFORMATION: CustomElement?:', isCustomElement, tag, '->', isCustomElement ? getTransformationFunction()?.(tag) : tag);
  console.log('TAG_TRANSFORMFUNCTION_IDENTIFIER: ', TAG_TRANSFORMS_KEY_OBJECT);
  return isCustomElement ? getTransformationFunction()?.(tag) ?? tag : tag;
}
