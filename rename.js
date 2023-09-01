const nodeRename = require("node-rename");

function clearAndUpper(text) {
  return text.replace(/-/, "").toUpperCase();
}

function toPascalCase(text) {
  return text.replace(/(^\w|-\w)/g, clearAndUpper);
}

// Or cusom rename config
nodeRename.nodeRename({
  pattern: "src/**",
  ignore: "src",
  handler: (name) => {
    return toPascalCase(name);
  },
});
