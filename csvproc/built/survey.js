var Survey = (function () {
    function Survey(rawRecords) {
        this.rawRecords = rawRecords;
    }
    Survey.prototype.questions = function () {
        var regexp = /\[(.*)\]/;
        return this.rawRecords[0].map(function (value) {
            var match = regexp.exec(value);
            if (match) {
                return match[1];
            }
        }).filter(function (x) { return !!x; });
    };
    Survey.prototype.surveys = function () {
        var prevDate = new Date('Jan 1 2015');
        var samples = 0;
        var day = 1000 * 60 * 60 * 24;
        var result = [];
        for (var i in this.rawRecords) {
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
    return Survey;
})();
//# sourceMappingURL=survey.js.map