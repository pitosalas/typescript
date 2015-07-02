/// <reference path="typings/node/node.d.ts" />
var fs = require('fs');
fs.watch('target.txt', function () {
    console.log("file target.txt just changed");
});
//# sourceMappingURL=watcher.js.map