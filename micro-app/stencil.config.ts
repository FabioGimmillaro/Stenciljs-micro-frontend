import { Config } from '@stencil/core';

// https://stenciljs.com/docs/config

export const config: Config = {
  namespace: "Micro-App",
  buildEs5: 'prod',
  enableCache: false,
  globalStyle: 'src/global/app.css',
  globalScript: 'src/global/app.ts',
  taskQueue: 'async',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
      copy: [
        {
          src: "../node_modules/component-lib/dist/esm",
          dest: ".",
        },
        {
          src: "../node_modules/component-lib/dist/esm",
          dest: "../esm-es5",
        },
        {
          src: "../node_modules/component-lib/dist/esm",
          dest: "../esm",
        }
      ]
    },
    {
      type: 'www',
      // comment the following line to disable service workers in production
      serviceWorker: null,
      baseUrl: 'https://myapp.local/',
      copy: [
        {
          src: "../node_modules/component-lib/dist/esm",
          dest: "build",
        }
      ]
    },
  ],
};
