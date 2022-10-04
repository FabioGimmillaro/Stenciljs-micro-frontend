import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'component-lib',
  bundles: [
    {components: ['my-component']},
    {components: ['my-input']}
  ],
  extras: {
    tagNameTransform: true,
  },
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
  ],
};
