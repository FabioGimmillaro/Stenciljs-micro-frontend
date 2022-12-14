import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'component-lib',
  globalScript: 'src/global/global.ts',
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
