import { Injectable } from '@angular/core';
import { Question } from './question';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class QuestionsService {


	//rails s -p 3001

	private questionsUrl = 'http://localhost:3001/questions';  // URL to web api

	constructor(private http:Http) { 
	}

	getQuestions(): Promise<Question[]> {
		return this.http.get(this.questionsUrl)
				   .toPromise()
				   .then(function(response) {
				   		var json = (response as any)._body; // As any isn't the best way to handle this.
				   		json = JSON.parse(json);
				   		console.log(json);
				   		return json as Question[];
				   });
				   //.catch(this.handleError);
	}

	private headers = new Headers({'Content-Type': 'application/json'});

	update(question: Question): Promise<Question> {
	  question.id = 5;
	  const url = `${this.questionsUrl}/${question.id}`;
	  return this.http
	    .put(url, JSON.stringify(question), {headers: this.headers})
	    .toPromise()
	    .then(() => question)
	    //ToDo: .catch(this.handleError);
	}

	create(question: Question): Promise<number> {
	  const url = this.questionsUrl;
	  return this.http
	    .post(url, JSON.stringify(question), {headers: this.headers})
	    //.post(url, 'JSON.stringify(question)', {headers: this.headers})
	    .toPromise()
	    .then(function(response) {

	    	var question_id = response
	    	console.log(response);

	    	this.createNumbers(question_id);

	    	return response as any;
	    }); 
	    //ToDo: .catch(this.handleError);
	}
}

