/**
 * Script that statically analyses certain code aspects.
 */

const fs = require("fs-extra");

let hasError = false;

function main() {
  const components = getAllComponents();
  patchGeneratedComponents(components);
}

function patchGeneratedComponents(componentsToBundle) {
  const path = `${__dirname}/components.generated.js`;
  fs.writeFileSync(path, `const COMPONENTS = [\n\t${componentsToBundle.map((component) => `{components: ['${component.name}']}`).join(",\n\t")}\n];\n\nmodule.exports = COMPONENTS;`);
}

function getAllComponents() {
  return scanDirectoryForComponents(
    __dirname + "/../src"
  );
}

function startsWithComponentPrefix(str) {
  return str != null && (str.startsWith("my-"));
}

function scanDirectoryForComponents(directoryPath) {
  let result = [];

  for (const file of fs.readdirSync(directoryPath)) {
    if (file.startsWith(".")) {
      continue;
    }
    const fullPath = `${directoryPath}/${file}`;
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      if (startsWithComponentPrefix(file)) {
        const tsFilePath = `${fullPath}/${file}.tsx`;
        const cssFilePath = `${fullPath}/${file}.css`; // TODO: Use scss in design-system

        const ts = fs.existsSync(tsFilePath)
          ? fs.readFileSync(tsFilePath, "utf8")
          : null;
        if (ts == null) {
          noticeError("Expecting file: " + tsFilePath);
        }

        const scss = fs.existsSync(cssFilePath)
          ? fs.readFileSync(cssFilePath, "utf8")
          : null;
        if (scss == null && containsRenderFunction(ts)) {
          noticeError(
            `Expecting file but not found: ${cssFilePath}\nPlease use CSS files!`
          );
        }

        result.push({
          name: file,
          path: fullPath,
          ts,
          scss,
        });
      } else {
        result = [...result, ...scanDirectoryForComponents(fullPath)];
      }
    }
  }

  return result;
}

main();
