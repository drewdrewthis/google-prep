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

  constructor(
    private questionsService: QuestionsService,
    private route: ActivatedRoute) { 
  }

  ngOnInit(): void {
    this.route.params.forEach((params: Params) => {
      let id = +params['id'];
      this.getQuestion(id)
          .then(question => this.question = question);
    });
  }

  getQuestion(id: number): Promise<Question> {
    return this.questionsService.getQuestions()
                //.then(questions => this.questions = questions)
                .then(questions => questions.find(question => question["id"] === id));
                /*.then(function(questions) {
                  var result = null;
                  result = questions.find(function(question) {
                    return question.id === 1;
                  })
                  console.log(result);
                  return result;
                });*/
  }

}