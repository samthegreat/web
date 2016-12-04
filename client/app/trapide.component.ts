import { Component, OnInit, Injectable }	from '@angular/core';
import { Router }				from '@angular/router';
//import { Http, Response, Headers, RequestOptions }  from '@angular/http';

import { QuestionService } from './question.service';
import { Question } from './question';

@Component({
  selector: 'my-trapide',
  templateUrl: "/templates/testRapide1"
})

export class TRapideComponent implements OnInit {

  errorMessage: string;
  question: Question;
  mode = 'Observable';
  choix: string;
  chosenAnswer: string;
  result: string;
  validated: boolean;

  constructor(
		private router: Router,
    private questionService : QuestionService)
  {
    this.validated = false;
  }

	ngOnInit() {
    this.getQuestion();
  }

  getQuestion() {
    this.questionService.getQuestion()
                  .subscribe(
                     question => this.question = question,
                     error =>  this.errorMessage = <any>error);
  }

  validate (question: string, answer: string) {
    this.questionService.validate(question, answer)
                  .subscribe(
                      question  => this.result = "Bravo!",
                      error =>  this.result = "Mauvaise reponse.");

    /*this.http
    .post('/ajax/validate', { question: this.question.question, reponse: this.chosenAnswer })
    .map(res => res)
    .subscribe(
      (data) => this.result = "Bravo!",
      (err) => this.result = "Mauvaise reponse...");*/

  }

  validateAnswer(): void {

    if (this.choix == "choix1")
    {
      this.chosenAnswer = this.question.choix1;
    }
    else if (this.choix == "choix2")
    {
      this.chosenAnswer = this.question.choix2;
    }
    else if (this.choix == "choix3")
    {
      this.chosenAnswer = this.question.choix3;
    }
    else if (this.choix == "choix4")
    {
      this.chosenAnswer = this.question.choix4;
    }
    else
    {
      this.chosenAnswer = "...";
      return;
    }

    this.validated = true;
    this.validate(this.question.question, this.chosenAnswer);
  }

  nextQuestion(): void {
    this.validated = false;
    this.result = "";
    this.getQuestion();
  }

  goToDashboard(): void {
    this.router.navigate(['/tableaubord']);
  }
}
