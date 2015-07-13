export class Survey {
  when: Date;
  samples: number;
  indexStart: number;
  indexEnd: number;
  responses: string[][];

  constructor(when:Date, indexStart:number) {
    this.when = when;
    this.indexStart = indexStart;
    this.samples = 0;
    this.responses = []
  }

  addResponse(response: string[]) {
    this.responses.push(response);
  }

  analyze() {

  }
}
