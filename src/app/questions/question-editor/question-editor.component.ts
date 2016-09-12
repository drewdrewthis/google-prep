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
    answers: [],
    title: "",
    correct_answer: 0
  };

  private answerArray: Array<string> = new Array(this.question.answers.length + 1);

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

  addAnswers(): void {
    this.answerArray.length++;
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

  getQuestion(id: number): Promise<Question> {
    return this.questionsService.getQuestions()
                .then(questions => questions.find(question => question["id"] === id));

  }

}
