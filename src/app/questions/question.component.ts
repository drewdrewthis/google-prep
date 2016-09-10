import { Component, Input, OnInit } from '@angular/core';
import { Question } from './question';
import { QuestionsService } from './questions.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'app-question',
  templateUrl: 'question.component.html',
  styleUrls: ['question.component.css'],
  providers: [QuestionsService]
})

export class QuestionComponent implements OnInit {

	componentName = 'QuestionComponent';

  question: Question;
  answers: string[];

  constructor(
    private questionsService: QuestionsService,
    private route: ActivatedRoute) { 
  }

  ngOnInit(): void {
    var self = this;
    this.route.params.forEach((params: Params) => {
      let id = +params['id'];
      this.getQuestion(id)
          .then(question => this.question = question);
          /*.then(function(question) {
            return self.question = question;
            //self.answers = self.question.answers;
          });*/
    });
  }

  getQuestion(id: number): Promise<Question> {
    return this.questionsService.getQuestions()
                .then(questions => questions.find(question => question["id"] === id));

  }

}