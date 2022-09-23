export const TAG_TRANSFORMS = Symbol.for("TAG_TRANSFORMS");
export const TAG_TRANSFORMS_KEY = {} as const;
export function getTransformationFunction() {
  console.log("FUNCTION", TAG_TRANSFORMS_KEY);
  return (window[TAG_TRANSFORMS] as Map<any, any>)?.get(TAG_TRANSFORMS_KEY)
}
console.log("GLOBAL", TAG_TRANSFORMS_KEY);
type TagTransform = (tag: string) => string;

declare global {
  interface Window {
    [TAG_TRANSFORMS]: WeakMap<typeof TAG_TRANSFORMS_KEY, TagTransform>;
  }
}

interface Config {
  transformTagName: TagTransform;
}

const applyConfiguration = (config?: Config) => {
  console.log("APPLY", config);
  if (config?.transformTagName == null) {
    return;
  }

  window[TAG_TRANSFORMS] = window[TAG_TRANSFORMS] ?? new Map();

  // Sets h as key because it is a unique reference for every lib.
  window[TAG_TRANSFORMS].set(TAG_TRANSFORMS_KEY, config.transformTagName);
};

export default applyConfiguration;
