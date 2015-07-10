import surv = require("./survey");
import data = require("./googledatafile");

var datafile = new data.GoogleDataFile();
datafile.prepareFile("cs105spring2015.csv");
var surveys:surv.Survey[] = datafile.surveys();
console.dir(surveys);
