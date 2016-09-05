import { InMemoryDbService } from 'angular2-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let questions = [
      {
        id: 1,
        question: "How are you?",
        answers: [
          "I'm okay",
          "I'm feeling shit",
          "Been better"
        ],
        correct_answer: 2
      },
      {
        id: 2,
        question: "How old is the king?",
        answers: [
          "22",
          "34",
          "16?"
        ],
        correct_answer: 0
      },
      {
        id: 3,
        question: "Did they all get saved?",
        answers: [
          "yes",
          "god, yes",
          "thank god"
        ],
        correct_answer: 0
      }
    ];
    return {questions};
  }
}