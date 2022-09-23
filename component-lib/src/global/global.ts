export const TAG_TRANSFORMS = Symbol.for("TAG_TRANSFORMS");

const ref = {};

type TagTransform = (tag: string) => string;

declare global {
  interface Window {
    [TAG_TRANSFORMS]: WeakMap<typeof ref, TagTransform>;
  }
}

interface Config {
  transformTagName: TagTransform;
}

const applyConfiguration = (config?: Config) => {
  if (config?.transformTagName == null) {
    return;
  }

  window[TAG_TRANSFORMS] = window[TAG_TRANSFORMS] ?? new WeakMap();

  // Sets h as key because it is a unique reference for every lib.
  window[TAG_TRANSFORMS].set(ref, config.transformTagName);
};

export default applyConfiguration;
