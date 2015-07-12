import fs = require('fs');

export interface Answer {
  order: number,
  text: string
}

export class Config {
  answers:Answer[];

  fromJSONFile(fileName: string) {
    var fileString = fs.readFileSync(fileName);
    var answers = JSON.parse(fileString.toString());
  }
}
