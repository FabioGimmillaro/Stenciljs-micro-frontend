import { Config } from '@stencil/core';
const COMPONENTS = require('./scripts/components.generated')

export const config: Config = {
  namespace: 'component-lib',
  bundles: COMPONENTS,
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
