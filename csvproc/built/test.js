var fs = require('fs');
var Config = (function () {
    function Config() {
    }
    Config.prototype.fromJSONFile = function (fileName) {
        var fileString = fs.readFileSync(fileName);
        var answers = JSON.parse(fileString.toString());
        console.log(answers);
    };
    return Config;
})();
var c = new Config();
c.fromJSONFile("./csvconfig.json");
//# sourceMappingURL=test.js.map