class Survey {
  when: Date;
  sample: number;
  indexStart: number;
  indexEnd: number;
  rawRecords: string[][];

  constructor(rawRecords: string[][]) {
    this.rawRecords = rawRecords;
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

    for (var i in this.rawRecords) {
      if (i == 0) {continue;}
      var resp: string[] = this.rawRecords[i];
      var sampDate:Date = new Date(resp[0]);
      var diff = (sampDate.getTime() - prevDate.getTime())/day;
      if (diff > 5.0) {
        result.push({
          when: sampDate,
          sample: 1,
          indexStart: i*1,
          indexEnd: 0 });
        }
          else
        {

          result.slice(-1)[0].sample += 1
          result.slice(-1)[0].indexEnd = i*1;
        };
      prevDate = sampDate;
      }
    return result;
  }
}
