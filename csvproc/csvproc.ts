import { DataFile } from './datafile';
import { Survey } from './survey';
import { Project } from './project';
import { Config } from './config';

var config = new Config();
config.fromJSONFile("./csvconfig.json");

var datafile = new DataFile();
datafile.prepareFile("cs105spring2015.csv", config);
var project =
  new Project(datafile.questions(), datafile.surveys());
console.dir(project);
