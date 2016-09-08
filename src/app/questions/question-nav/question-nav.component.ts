import { Component, OnInit } from '@angular/core';
import { Question } from '../question';
import { QuestionsService } from '../questions.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'app-question-nav',
  templateUrl: 'question-nav.component.html',
  styleUrls: ['question-nav.component.css']
})
export class QuestionNavComponent implements OnInit {

	questions: Question[];

  constructor(
    private questionsService: QuestionsService,
    private route: ActivatedRoute) { 
  }

  ngOnInit() {
  	this.getQuestions();
  }

  getQuestions(): Promise<Question> {
    return this.questionsService.getQuestions()
                .then(questions => this.questions = questions)
                //.then(questions => questions.find(question => question.id === id));
  }

}
