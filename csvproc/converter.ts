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

class CSVFile {
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

	recordCount(): number {
		return 0;
	}

	questions(): string[] {
		var regexp = /\[(.*)\]/;
		return this.rawRecords[0].map((value) => {
			console.log(value);
			var match = regexp.exec(value);
			if (match) {
				return match[1];
			}
		});
	}
}

var csv = new CSVFile();
csv.prepareFile("cs105spring2015.csv");
console.log(csv.questions());
