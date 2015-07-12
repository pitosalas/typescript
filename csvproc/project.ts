import { Survey } from './survey';

export class Project {
  questions:string[];
  surveys:Survey[];

  constructor(questions:string[], surveys:Survey[]) {
    this.questions = questions;
    this.surveys = surveys;
  }
}
