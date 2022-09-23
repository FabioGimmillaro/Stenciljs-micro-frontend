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

