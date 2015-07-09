import fs = require('fs');
import should = require('should');
var parse = require('csv-parse');

interface Question {
	number: number;
	text: string;
};

interface Answers {
	ordinal: number;
	text: string;
}

class GoogleDataFile {
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

	surveys(): Survey[] {
		var prevDate:Date = new Date('Jan 1 2015');
		var samples = 0;
		var day = 1000*60*60*24;
		var result: Survey[] = [];
		var survey:Survey;
		var questions:string[] = this.questions();

		for (var i in this.rawRecords) {
			if (i == 0) { continue; }
			var resp:string[] = this.rawRecords[i];
			var sampDate:Date = new Date(resp[0]);
			var diff = (sampDate.getTime() - prevDate.getTime())/day;
			if (diff > 5.0) {
				survey = new Survey(sampDate, questions);
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

var datafile = new GoogleDataFile();
datafile.prepareFile("cs105spring2015.csv");
var surveys: Survey[] = datafile.surveys();
console.dir(surveys);
