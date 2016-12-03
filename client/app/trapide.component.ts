import { Component, OnInit, Injectable }	from '@angular/core';
import { Router }				from '@angular/router';

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

  constructor(
		private router: Router,
    private questionService : QuestionService )
  { }

	ngOnInit() {
    this.getQuestion();
  }

  getQuestion() {
    this.questionService.getQuestion()
                  .subscribe(
                     question => this.question = question,
                     error =>  this.errorMessage = <any>error);
  }

  nextQuestion(): void {
    this.router.navigate(['/testRapide']);
    this.getQuestion();
  }

  goToDashboard(): void {
    this.router.navigate(['/tableaubord']);
  }
}
