var fs = require('fs'), spawn = require('child_process').spawn, filename = process.argv[2];
console.log("Filename: ", filename);
if (!filename) {
    throw Error("A file to watchh must be specified!");
}
fs.watch(filename, function () {
    var ls = spawn('ls', ['-lh', filename]), output = '';
    ls.stdout.on('data', function (chunk) {
        output += chunk.toString();
    });
    ls.stdout.on('close', function () {
        var parts = output.split(/\s+/);
        console.dir([parts[0], parts[4], parts[8]]);
    });
});
console.log("Now Watching: ", filename);
//# sourceMappingURL=watcher-spawn.js.map