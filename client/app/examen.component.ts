import { Component, OnInit, Injectable }	from '@angular/core';
import { Router }				from '@angular/router';
//import { Http, Response, Headers, RequestOptions }  from '@angular/http';

import { QuestionService } from './question.service';
import { Question } from './question';

@Component({
  selector: 'my-exam',
  templateUrl: "/templates/examen1"
})

export class ExamenComponent implements OnInit {

  errorMessage: string;
  question: Question;
  mode = 'Observable';
  choix: string;
  chosenAnswer: string;
  result: string;
  validated: boolean;
  theme: string;
  nextRes;

  constructor(
		private router: Router,
    private questionService : QuestionService)
  {
    this.validated = false;
  }

	ngOnInit() {
    this.getProgress();
  }

  getProgress() {
    this.questionService.getProgress()
                  .subscribe(
                     data => this.theme = data.theme,
                     error =>  this.errorMessage = <any>error,
                     () => {
                      this.getQuestion();
                     }
                  );
  }

  getQuestion() {
    this.questionService.getQuestionExam(this.theme)
                  .subscribe(
                     question => this.question = question,
                     error =>  this.errorMessage = <any>error);
  }

  validate (question: string, answer: string) {
    this.questionService.validateExam(question, answer)
                  .subscribe(
                      question  => this.result = "Bravo!",
                      error =>  this.result = "Mauvaise reponse.");
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
    
    this.questionService.nextQuestion()
                  .subscribe(
                    data => this.nextRes = data.status,
                    error =>  this.router.navigate(['/tableaubord']),
                    () => {
                      if (this.nextRes == 200) 
                      {
                        this.getQuestion();
                      }
                      else 
                      {
                        this.router.navigate(['/examresult'])
                      }
                      
                    }
                );
  }

  dropOut() {
    if (confirm("Voulez-vous vraiment abandonner?\n Vous recevrez la note 0 (zero)") == true)
    {
      this.questionService.dropOut()
                  .subscribe(
                    data => this.router.navigate(['/examresult']),
                    error =>  this.errorMessage = <any>error);
    }
    else
      return
  }

}
