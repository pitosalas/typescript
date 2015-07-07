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
            var match = regexp.exec(value);
            if (match) {
                return match[1];
            }
        }).filter(function (x) { return !!x; });
    };
    CSVFile.prototype.surveys = function () {
        var prevDate = new Date('Jan 1 2015');
        var samples = 0;
        var day = 1000 * 60 * 60 * 24;
        var result = [];
        for (i in this.rawRecords) {
            if (i == 0) {
                continue;
            }
            var resp = this.rawRecords[i];
            var sampDate = new Date(resp[0]);
            var diff = (sampDate.getTime() - prevDate.getTime()) / day;
            if (diff > 5.0) {
                result.push({
                    when: sampDate,
                    sample: 1,
                    indexStart: i * 1,
                    indexEnd: 0 });
            }
            else {
                result.slice(-1)[0].sample += 1;
                result.slice(-1)[0].indexEnd = i * 1;
            }
            ;
            prevDate = sampDate;
        }
        return result;
    };
    return CSVFile;
})();
var csv = new CSVFile();
csv.prepareFile("cs105spring2015.csv");
console.log(csv.questions());
console.log(csv.surveys());
//# sourceMappingURL=converter.js.map