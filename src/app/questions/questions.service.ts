import { Injectable } from '@angular/core';
import { Question } from './question';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class QuestionsService {

	private questionsUrl = 'app/questions';  // URL to web api

	constructor(private http:Http) { 
	}

	getQuestions(): Promise<Question[]> {
		return this.http.get(this.questionsUrl)
				   .toPromise()
				   .then(response => response.json().data as Question[]);
				   //ToDo: .catch(this.handleError);
	}

	private headers = new Headers({'Content-Type': 'application/json'});

	update(question: Question): Promise<Question> {
	  getQuestions().len +1
	  question.id = 5;
	  const url = `${this.questionsUrl}/${question.id}`;
	  return this.http
	    .put(url, JSON.stringify(question), {headers: this.headers})
	    .toPromise()
	    .then(() => question)
	    //ToDo: .catch(this.handleError);
	}
}
