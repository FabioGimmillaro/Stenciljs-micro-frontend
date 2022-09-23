# Setup
- Run `npm install http-server -g`

# Run

- Run `npm run magic` in `component-lib` path.
- Navigate to `micro-fronted` directory in new terminal.
- Run `http-server --cors`.
- Open `localhost:3333` in browser.

# TODOs

- render.interceptor doesn't transform tag of inner "my-input" when called within "my-component".
  - Find out why the reference/key in global.ts (of `component-lib`) is not the same.
  - Maybe add an uuid as a key could solve the problem
  - Or use version of component-lib as key (how to get current version => see: add-version-number.js in design-system)
- Build component-lib with new version (e.g. with new text and/or red color)
- Include new version of component-lib into `micro-frontend`
- Include old version (blue style) of component-lib into `app` (No transformTagName needed here)

# Component library
A design-system consisting of multiple components which is supposed to run in multiple versions in one application

## Configuration
- Set `extras.tagNameTransform` to `true` in stencil.config.ts
- Add `patch-loader.js` script which overrides the `dist/esm/loader.js` to add a parameter to the globalScripts call.
- Add `global.ts` which consumes the defineCustomElements options and writes the current transformTag function into a Map

# Micro Frontend
The micro frontend is an application which is included within other applications (in our case `app` stencil project).

## Configuration
- Has `app.ts` which serves as the globalScript for the micro-app (like `global.ts` in `component-lib`)
  - The scripts includes the loader of the `component-lib` and defines the custom elements with a transformTag function.
- This project has to be served so that the `app` can get it's sources (real life example from our customer).
  - (It is also possible to include the micro-app sources into the `app` but this is cooler :D)

# App
The app is the final application which consists of a scaffold and the included micro-frontend.

## Config
Adds a <script> tag in the index.html which loads sources the `micro-app` distribution folder.
```html
 <script type="module">
    import {defineCustomElements} from "http://localhost:8080/loader/index.js";
    defineCustomElements(window)
  </script>
```
As soon as everything works the `app` should also be able to include the `component-lib` without colliding with the `component-lib` within `micro-app`.


# Other Ressources
- [Running multiple micro frontends](https://dev.to/sanderand/running-multiple-versions-of-a-stencil-design-system-without-conflicts-2f46)
  - The "transformTagName at runtime" could be another approach to get the `transformTag` function in runtime.
- [Possible feature in the future (?!)](https://github.com/WICG/webcomponents/blob/gh-pages/proposals/Scoped-Custom-Element-Registries.md)
  - [Polyfill](https://github.com/manolakis/scoped-registries)
