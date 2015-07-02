var fs = require('fs');
var parse = require('csv-parse');
;
var CSVFile = (function () {
    function CSVFile() {
        this.rawRecords = [];
    }
    CSVFile.prototype.prepareFile = function (name) {
        var _this = this;
        this.fileName = name;
        var data = fs.readFileSync(name, "utf8");
        var parser = parse();
        var record;
        parser.on('readable', function () {
            while (record = parser.read()) {
                _this.rawRecords.push(record);
            }
        });
        parser.on('error', function (err) {
            console.log("****: " + err.message);
        });
        parser.on('finish', function () {
            console.log("csv finished");
        });
        parser.write(data);
        parser.end();
    };
    CSVFile.prototype.recordCount = function () {
        return 0;
    };
    CSVFile.prototype.questions = function () {
        var regexp = /\[(.*)\]/;
        return this.rawRecords[0].map(function (value) {
            console.log(value);
            var match = regexp.exec(value);
            if (match) {
                return match[1];
            }
        });
    };
    return CSVFile;
})();
var csv = new CSVFile();
csv.prepareFile("cs105spring2015.csv");
console.log(csv.questions());
//# sourceMappingURL=converter.js.map