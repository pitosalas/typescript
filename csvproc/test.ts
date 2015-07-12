import fs = require('fs');

interface Answer {
  order: number,
  text: string
}

class Config {
  answers:Answer[];

  fromJSONFile(fileName: string) {
    var fileString = fs.readFileSync(fileName);
    var answers = JSON.parse(fileString.toString());
    console.log(answers);
  }
}
var c:Config = new Config();
c.fromJSONFile("./csvconfig.json");
