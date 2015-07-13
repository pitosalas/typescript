var fs = require('fs');
var Config = (function () {
    function Config() {
    }
    Config.prototype.fromJSONFile = function (fileName) {
        var fileString = fs.readFileSync(fileName);
        var answers = JSON.parse(fileString.toString());
    };
    Config.prototype.mapAnswerToNum = function (answer) {
        for (var a in this.answers) {
            if (a.text == answer) {
                return a.order;
            }
        }
        throw new Error("Invalid response string");
    };
    return Config;
})();
exports.Config = Config;
//# sourceMappingURL=config.js.map