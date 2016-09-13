import { Component, OnInit } from '@angular/core';
import { QuestionsService } from '../questions.service';
import { Question } from '../question';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'app-question-editor',
  templateUrl: 'question-editor.component.html',
  styleUrls: ['question-editor.component.css'],
  providers: [
    QuestionsService
  ]
})
export class QuestionEditorComponent implements OnInit {

  // Initialize new question
  question: Question = {
    id: null,
    answers: [
      {
        id: null,
        title: ""
      }
    ],
    title: "",
    correct_answer: 0
  };

  //private answerArray: Array<string> = new Array(this.question.answers.length + 1);

  constructor(
    private questionsService: QuestionsService,
    private route: ActivatedRoute) { 
  }

  ngOnInit() {
    var self = this;
    this.route.params.forEach((params: Params) => {
      if(params['id']) {
        let id = +params['id'];
        this.getQuestion(id)
            .then(question => this.question = question);
      }
    });
  }

  getQuestion(id: number): Promise<Question> {
    return this.questionsService.getQuestions()
                .then(questions => questions.find(question => question["id"] === id));

  }

  addAnswers(): void {
    let q = this.question;
    q.answers.length++;
    let ans_len = q.answers.length; // Will be hoisted
    q.answers[ans_len - 1] = {};
    q.answers[ans_len - 1].title = "";
  }

  add(question: Question): void {
    if (!question.title) { return; }
   // question.question = question.question.trim();
   console.log(question);
    this.questionsService.create(question)
      /*.then(question => {
        this.questions.push(question);
      });*/
  }

  update(question: Question): void {
    if (!question.id) { 
      throw new Error("No question id found");
    }
    console.log(question);
    this.questionsService.update(question);
  }

  save(question:Question): void {
    if(question.correct_answer && question.title) {
      if(question.id) return this.update(question);
      return this.add(question);
    }
  }
}
