import fs = require('fs');
import surv = require("./survey");
var parse = require('csv-parse');

export class GoogleDataFile {
	fileName: string;
	rawRecords: string[][];

	constructor() {
		this.rawRecords = [];
	}

	prepareFile(name: string) {
		this.fileName = name;
		var data = fs.readFileSync(name, "utf8");
		var parser = parse();
		var record;

		parser.on('readable', () => {
			while(record = parser.read()) {
				this.rawRecords.push(record);
			}
		});

		parser.on('error', function(err) {
			console.log("****: "+err.message);
		});

		parser.on('finish', function() {
			console.log("csv finished")
		});

		parser.write(data);
		parser.end();
	}

	questions(): string[] {
			var regexp = /\[(.*)\]/;
			return this.rawRecords[0].map((value) => {
				var match = regexp.exec(value);
				if (match) {
					return match[1];
				}
			}).filter(x=>!!x);
	}

	surveys(): surv.Survey[] {
		var prevDate:Date = new Date('Jan 1 2015');
		var samples = 0;
		var day = 1000*60*60*24;
		var result: surv.Survey[] = [];
		var survey:surv.Survey;
		var questions:string[] = this.questions();

		for (var i in this.rawRecords) {
			if (i == 0) { continue; }
			var resp:string[] = this.rawRecords[i];
			var sampDate:Date = new Date(resp[0]);
			var diff = (sampDate.getTime() - prevDate.getTime())/day;
			if (diff > 5.0) {
				survey = new surv.Survey(sampDate, questions);
				result.push(survey);
			}	else {
				survey.samples += 1;
				survey.indexEnd = i*1;
			};
			prevDate = sampDate;
			}
		return result;
	}
}
