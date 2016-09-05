import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { QuestionsService } from '../../questions/questions.service';
import { Question } from '../../questions/question';


@Component({
  moduleId: module.id,
  selector: 'app-sidebar',
  templateUrl: 'sidebar.component.html',
  styleUrls: ['sidebar.component.css'],
  providers: [QuestionsService]
})

export class SidebarComponent implements OnInit {

  questions: Question[] = [];

  constructor(
    private router: Router,
    private questionsService: QuestionsService) {
  }

  @Input() title;

  ngOnInit(): void {

    this.getQuestions()
        .then(questions => this.questions = questions);
  }

  getQuestions(): Promise<Question[]> {
    return  this.questionsService.getQuestions()
                .then(questions => questions);
  }
}
