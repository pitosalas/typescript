import fs = require('fs');

export interface Answer {
  order: number,
  text: string
}

export class Config {
  answers:Answer[];
  timestamp_column: string;
  name_column: string

  fromJSONFile(fileName: string) {
    var fileString = fs.readFileSync(fileName);
    var answers = JSON.parse(fileString.toString());
  }

  mapAnswerToNum(answer:string):number {
    for (var a in this.answers) {
      if (a.text == answer) { return a.order;}
    }
    throw new Error("Invalid response string");
  }
}
