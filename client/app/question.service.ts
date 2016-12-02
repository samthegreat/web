import { Injectable }     from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable }     from 'rxjs/Observable';

import { Question } from './question';

@Injectable()
export class QuestionService {

  constructor (private http: Http) {}

  /*getQuestion(): Promise<Question> {
  	return Promise.resolve(something);
  }*/

  /*getHero(id: number): Promise<Hero> {
  		return this.getHeroes()
            .then(heroes => heroes.find(hero => hero.id === id));
  }*/
}