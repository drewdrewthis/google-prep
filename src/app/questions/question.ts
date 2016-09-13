export class Question {
  id: number;
  title: string;
  answers: Array<any> = [
  	{
  		id: number;
  		title: string;
  	}
  ];
  correct_answer: number;
}