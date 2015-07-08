var fs = require('fs');
var parse = require('csv-parse');
;
var GoogleDataFile = (function () {
    function GoogleDataFile() {
        this.rawRecords = [];
    }
    GoogleDataFile.prototype.prepareFile = function (name) {
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
    GoogleDataFile.prototype.recordCount = function () {
        return 0;
    };
    return GoogleDataFile;
})();
var csv = new CSVFile();
csv.prepareFile("cs105spring2015.csv");
var surv = new Survey();
surv.analyze(csv);
console.log(csv.questions());
console.log(surv.surveys());
//# sourceMappingURL=googledatafile.js.map