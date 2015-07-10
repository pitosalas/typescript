export class Survey {
  when: Date;
  samples: number;
  indexStart: number;
  indexEnd: number;
  questions: string[];

  constructor(when:Date, questions:string[]) {
    this.when = when;
    this,questions = questions;
  }

  analyze() {

  }
}
