import { Component } from '@angular/core';
import { Question } from './questions/question';
import { QuestionsService } from './questions/questions.service';
import { QuestionComponent } from './questions/question.component';

@Component({
	moduleId: module.id, // This provides access to relative path. I believe it's based on the CommonJS
  	selector: 'app-root',
  	templateUrl: 'app.component.html',
  	styleUrls:['app.component.css'],
  	providers: [ QuestionsService ]
})

export class AppComponent { 

	public title = "Google Prep";

	constructor() { 
	}

	ngOnInit(): void {};
}
