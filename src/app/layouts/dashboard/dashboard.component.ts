import { Component, OnInit } from '@angular/core';
import { QuestionsService } from '../../questions/questions.service';
import { Question } from '../../questions/question';

@Component({
  moduleId: module.id,
  selector: 'app-dashboard',
  templateUrl: 'dashboard.component.html',
  styleUrls: ['dashboard.component.css'],
  providers: [QuestionsService]
})
export class DashboardComponent implements OnInit {

	questions: Question[] = [];

  constructor(private questionsService: QuestionsService) { }

  ngOnInit() {
    this.questionsService.getQuestions()
          .then(questions => this.questions = questions);
  }
      
}
