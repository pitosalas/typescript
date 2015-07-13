var datafile_1 = require('./datafile');
var project_1 = require('./project');
var config_1 = require('./config');
var config = new config_1.Config();
config.fromJSONFile("./csvconfig.json");
var datafile = new datafile_1.DataFile();
datafile.prepareFile("cs105spring2015.csv", config);
var project = new project_1.Project(datafile.questions(), datafile.surveys());
console.dir(project);
//# sourceMappingURL=csvproc.js.map