import { Answer } from './answer';

export class Question {
  id: number;
  title: string;
  answers: Array<Answer>;
  correct_answer: number;
}