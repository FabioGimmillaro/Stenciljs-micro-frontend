export const TAG_TRANSFORMS_KEY_OBJECT = { uniqueIdentifier: '' };
export const TAG_TRANSFORMS = Symbol.for('KEY_TRANSFORM');

export function getTransformationFunction() {
  console.log('FUNCTION', TAG_TRANSFORMS_KEY_OBJECT);
  console.log('TAG_TRANSFORMS: ', TAG_TRANSFORMS);
  console.log('TAG_TRANSFORMS_MAP: ', window[TAG_TRANSFORMS]);
  console.log('TAG_TRANSFORMFUNCTION_IDENTIFIER: ', TAG_TRANSFORMS_KEY_OBJECT as Config);
  console.log(new Error().stack);
  console.log('TAG_TRANSFORM_FUNCTION: ', window[TAG_TRANSFORMS]?.get((TAG_TRANSFORMS_KEY_OBJECT as Config).uniqueIdentifier));

  return window[TAG_TRANSFORMS]?.get((TAG_TRANSFORMS_KEY_OBJECT as Config).uniqueIdentifier);
}

type TagTransform = (tag: string) => string;

declare global {
  interface Window {
    [TAG_TRANSFORMS]: WeakMap<Object, TagTransform>;
  }
}

interface Config extends Object {
  transformTagName: TagTransform;
  uniqueIdentifier?: string;
}

const applyConfiguration = (config?: Config) => {
  if (!config) {
    return;
  }
  (TAG_TRANSFORMS_KEY_OBJECT as Config).uniqueIdentifier = config.uniqueIdentifier ?? '';
  console.log('APPLY CONFIG:', config);
  console.log('APPLY CONFIGSYMBOL: ', TAG_TRANSFORMS);
  console.log(new Error().stack)
  console.log('APPLY TAG_TRANSFORM_KEY: ', TAG_TRANSFORMS_KEY_OBJECT);

  window[TAG_TRANSFORMS] = window[TAG_TRANSFORMS] ?? new Map();
  console.log('APPLY CONFIG TAG_TRANSFORM_MAP_BEFORE: ', window[TAG_TRANSFORMS]);

  // Sets h as key because it is a unique reference for every lib.
  TAG_TRANSFORMS_KEY_OBJECT.uniqueIdentifier = config.uniqueIdentifier;
  window[TAG_TRANSFORMS].set((TAG_TRANSFORMS_KEY_OBJECT as Config).uniqueIdentifier, config.transformTagName);
  console.log('APPLY  CONFIG TAG_TRANSFORM_FUNCTION: ', window[TAG_TRANSFORMS].get((TAG_TRANSFORMS_KEY_OBJECT as Config).uniqueIdentifier));
  console.log('APPLY CONFIG TAG_TRANSFORM_MAP_AFTER: ', window[TAG_TRANSFORMS]);
};

export default applyConfiguration;
