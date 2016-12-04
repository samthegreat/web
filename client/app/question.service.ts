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

  validateExam (questionAsked: string, chosenAnswer: string) {
    /*let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });*/

    return this.http.post('/ajax/validateExam', { question: questionAsked, reponse: chosenAnswer })
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

  getProgress() {

    return this.http.get('/ajax/getProgress')
                    .map(res => res.json())
                    .catch(this.handleError);
  }

  getQuestionExam(theme: string): Observable<Question> {

    return this.http.get('/ajax/getExamenQ/' + theme)
                    .map(this.extractData)
                    .catch(this.handleError);

  }

  nextQuestion() {

    return this.http.post('/ajax/nextQuestion', {})
                    .map(res => res.json())
                    .catch(this.handleError);
  }

  updateStats(sujet: string, notedec: number, questMax: string, bonnesReponses: string ) {

    return this.http.post('/ajax/incrStats', {theme : sujet, score : notedec, totQuest : questMax, goodQuest : bonnesReponses})
                    .map(res => res.json())
                    .catch(this.handleError);
  }

  dropOut() {

    return this.http.post('/ajax/abandon', {})
              .map(res => res.json())
              .catch(this.handleError);
  }

  initStats() {

    return this.http.get('/ajax/initStats')
                  .map(res => res)
                  .catch(this.handleError);

  }

  trueInitStats() {

    return this.http.get('/ajax/trueInitStats')
                  .map(res => res)
                  .catch(this.handleError);

  }

  getStats() {

    return this.http.get('/ajax/getStats')
                  .map(res => res.json())
                  .catch(this.handleError);
  }

  addQuest(theme: string, questionChosen: string, choix1Chosen: string, choix2Chosen: string, choix3Chosen: string, choix4Chosen: string, reponseChosen: string) {

    return this.http.post('/ajax/addQuest/' + theme, {dom: theme, question: questionChosen, choix1: choix1Chosen, choix2: choix2Chosen, choix3: choix3Chosen, choix4: choix4Chosen, reponse: reponseChosen })
        .map(res => res)
        .catch(this.handleError);
  }

  deleteQuestion() {

    return this.http.delete('/ajax/delQuest')
        .map(res => res)
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