import Module from "module";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default (code) => {
  const resource = "test.js";
  const module = new Module(resource);
  // eslint-disable-next-line no-underscore-dangle
  module.paths = Module._nodeModulePaths(
    path.resolve(__dirname, "../fixtures")
  );
  module.filename = resource;

  // eslint-disable-next-line no-underscore-dangle
  module._compile(
    `let __export__;${code};module.exports = __export__;`,
    resource
  );

  return module.exports;
};
