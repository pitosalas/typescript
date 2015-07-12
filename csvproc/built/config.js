var fs = require('fs');
var Config = (function () {
    function Config() {
    }
    Config.prototype.fromJSONFile = function (fileName) {
        var fileString = fs.readFileSync(fileName);
        var answers = JSON.parse(fileString.toString());
    };
    return Config;
})();
exports.Config = Config;
//# sourceMappingURL=config.js.map