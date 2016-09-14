import { Component, OnInit } from '@angular/core';
import { QuestionsService } from '../questions.service';
import { Question } from '../question';
import { ActivatedRoute, Params } from '@angular/router';
import {DND_PROVIDERS, DND_DIRECTIVES} from 'ng2-dnd';

@Component({
  moduleId: module.id,
  selector: 'app-question-list',
  templateUrl: 'question-list.component.html',
  styleUrls: ['question-list.component.css'],
  providers: [
    QuestionsService,
    DND_PROVIDERS
  ]
})
export class QuestionListComponent implements OnInit {

	questions: Question[];

  constructor(
    private questionsService: QuestionsService,
    private route: ActivatedRoute) { 
  }

  ngOnInit() {
  	this.questionsService.getQuestions()
  	                .then(questions => this.questions = questions.sort(
                        (a,b) => a.number - b.number
                    ));
  }

  deleteQuestion(id: number) {
    console.log(id);
    //Remove question from question list
    this.questions = this.questions.filter(item => item.id != id); 
    //Remove question from model
    this.questionsService.destroy(id);
  } 

  resort() {
    var self = this;
    this.questions.forEach(function(q,i) {
      q.number = i + 1;
      self.updateQuestion(q);
    });
  }

  updateQuestion(question: Question): void {
    if (!question.id) { 
      throw new Error("No question id found");
    }
    console.log(question);
    this.questionsService.update(question);
  }
}