/// <reference path="typings/node/node.d.ts" />
var fs = require('fs'), filename = process.argv[2];
console.log("Filename: ", filename);
if (!filename) {
    throw Error("A file to watchh must be specified!");
}
fs.watch(filename, function () {
    console.log("File" + filename + " just changed");
});
console.log("Now Watching: ", filename);
//# sourceMappingURL=watcher-argv.js.map