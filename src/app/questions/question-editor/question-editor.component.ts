import { Component, OnInit } from '@angular/core';
import { QuestionsService } from '../questions.service';
import { Question } from '../question';
import { Answer } from '../answer';
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
  question: Question;

  //private answerArray: Array<string> = new Array(this.question.answers.length + 1);

  constructor (
    private questionsService: QuestionsService,
    private route: ActivatedRoute) { 
  }

  ngOnInit() {
    var self = this;
    self.route.params.forEach((params: Params) => {
      
      if(params['id']) {
        let id = + params['id'];
        self.getQuestion(id)
            //.then(question => self.question = question);
            .then(function(question) {
              self.question = question
              console.log(self.question);
            })
      }
      else {
        self.question = new Question;
        self.question.title = "";
        self.question.answers = new Array<Answer>();
        self.question.answers[0] = new Answer;
        self.question.answers[0].title = "";
        console.log(self.question);
      }
    });
  }

  getQuestion(id: number): Promise<Question> {
    var hotdogs = "yum";
    return this.questionsService.getQuestions()
                //.then(questions => questions.find(question => question["id"] === id));
                .then(function(questions) {
                  
                  //console.log(questions.find(question => question["id"] === id));
                  return questions.find(question => question["id"] === id);
                });
  }

  addAnswers(): void {
    let q = this.question;
    q.answers.length++;
    //q.answers[q.answers.length - 1].title = "";
    console.log(q);
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
