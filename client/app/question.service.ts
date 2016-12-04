import { Injectable }                               from '@angular/core';
import { Http, Response, Headers, RequestOptions }  from '@angular/http';
import { Observable }                               from 'rxjs/Observable';

import { Question } from './question';

@Injectable()
export class QuestionService {

  constructor (private http: Http) {}

  getQuestion (): Observable<Question> {
    return this.http.get('/ajax/getQuestion')
                    .map(this.extractData)
                    .catch(this.handleError);
  }

  validate (questionAsked: string, chosenAnswer: string) {
    /*let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });*/

    return this.http.post('/ajax/validate', { question: questionAsked, reponse: chosenAnswer })
                    .map(res => res)
                    .catch(this.handleError);
  }

  getNbQuests (selectedTheme: string) {
    /*let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });*/

    return this.http.post('/ajax/getNbQuestbyTheme', { theme: selectedTheme })
                    .map(res => res.json())
                    .catch(this.handleError);
  }

  setProgress (selectedTheme: string, nbQuestions: string) {

    return this.http.post('/ajax/setProgress', { theme: selectedTheme, qmax: nbQuestions })
                    .map(res => res.json())
                    .catch(this.handleError);
  }

  private extractData(res: Response) {
    let body = res.json();
    return body || { };
  }
  
  private handleError (error: Response | any) {
    // In a real world app, we might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}