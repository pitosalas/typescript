var data = require("./googledatafile");
var datafile = new data.GoogleDataFile();
datafile.prepareFile("cs105spring2015.csv");
var surveys = datafile.surveys();
console.dir(surveys);
//# sourceMappingURL=csvproc.js.map