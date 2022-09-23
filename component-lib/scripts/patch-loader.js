const fs = require("fs-extra");
const stencilPath = __dirname + "/..";

function main() {
  patchLoader(`${stencilPath}/dist/esm/loader.js`);
}

function patchLoader(path) {
  let content = fs.readFileSync(`${stencilPath}/dist/esm/loader.js`, "utf-8");
  content = content.replace(/globalScripts\(\)/, "globalScripts(options)")
  fs.writeFileSync(path, content);
}

main();
