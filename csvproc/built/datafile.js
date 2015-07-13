var fs = require('fs');
var survey_1 = require('./survey');
var parse = require('csv-parse');
var DataFile = (function () {
    function DataFile() {
        this.rawRecords = [];
    }
    DataFile.prototype.prepareFile = function (name) {
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
    DataFile.prototype.questions = function () {
        var regexp = /\[(.*)\]/;
        return this.rawRecords[0].map(function (value) {
            var match = regexp.exec(value);
            if (match) {
                return match[1];
            }
        }).filter(function (x) { return !!x; });
    };
    DataFile.prototype.surveys = function () {
        var prevDate = new Date('Jan 1 2015');
        var samples = 0;
        var day = 1000 * 60 * 60 * 24;
        var result = [];
        var survey;
        var questions = this.questions();
        for (var i in this.rawRecords) {
            if (i == 0) {
                continue;
            }
            var resp = this.rawRecords[i];
            var sampDate = new Date(resp[0]);
            var diff = (sampDate.getTime() - prevDate.getTime()) / day;
            if (diff > 5.0) {
                survey = new survey_1.Survey(sampDate, i * 1);
                result.push(survey);
            }
            else {
                survey.samples += 1;
                survey.indexEnd = i * 1;
            }
            ;
            var response = this.rawRecords[i].slice(1);
            survey.addResponse(response);
            prevDate = sampDate;
        }
        return result;
    };
    DataFile.prototype.surveyData = function () {
    };
    return DataFile;
})();
exports.DataFile = DataFile;
//# sourceMappingURL=datafile.js.map