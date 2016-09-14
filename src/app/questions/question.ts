import { Answer } from './answer';

export class Question {
  id: number;
  title: string;
  number: number;
  answers: Array<Answer>;
  correct_answer: number;
}