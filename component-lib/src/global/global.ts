export const TAG_TRANSFORMS_KEY_OBJECT = { uniqueIdentifier: '' };
export const TAG_TRANSFORMS = Symbol.for('KEY_TRANSFORM');

export function getTransformationFunction() {
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

  window[TAG_TRANSFORMS] = window[TAG_TRANSFORMS] ?? new Map();

  // Sets h as key because it is a unique reference for every lib.
  TAG_TRANSFORMS_KEY_OBJECT.uniqueIdentifier = config.uniqueIdentifier;
  window[TAG_TRANSFORMS].set((TAG_TRANSFORMS_KEY_OBJECT as Config).uniqueIdentifier, config.transformTagName);
};

export default applyConfiguration;
