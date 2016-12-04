import { Component, OnInit, Injectable }	from '@angular/core';
import { Router }		from '@angular/router';

import { QuestionService } from './question.service';
import { Question } from './question';

@Component({
  selector: 'my-examresult',
  templateUrl: "/templates/examresult"
})

export class ExamResultComponent implements OnInit {

	result;
	notedec;
	errorMessage: string;
	message: string;
	response;

	constructor(
		private router: Router,
		private questionService : QuestionService
	)
	{ }

	ngOnInit() {
		this.getProgress();
	}

	getProgress() {

		this.questionService.getProgress()
              .subscribe(
              	data => this.result = data,
              	error =>  this.errorMessage = <any>error,
              	() => {
              		var good = parseInt(this.result.bonnesReponses);
					var qTotal = parseInt(this.result.questMax);
					
					var note = 100.0 * (good * 1.0 / qTotal);
					this.notedec = note.toFixed(2);
					
					// Paliers
					
					if (note >= 0.0 && note < 25.0)
					{
						this.message = "Sans commentaire...";
					}
					else if (note >= 25.0 && note < 50.0)
					{
						this.message = "You shall not pass. Retournez a l'ecole.";
					}
					else if (note >= 50.0 && note < 75.0)
					{
						this.message = "Vous etes presque bon!";
					}
					else if (note >= 75.0 && note <= 100.0)
					{
						this.message = "Vous etes un magicien du Web!";
					}
					else
					{
						alert("Oops! La note n'est pas comprise entre 0 et 100...");
					}

					this.updateStats(this.result.theme, this.notedec, this.result.questMax, this.result.bonnesReponses);

              	}
              );
	}

	updateStats(theme: string, score: number, totQuest: string, goodQuest: string) {

		this.questionService.updateStats(theme, score, totQuest, goodQuest )
                  .subscribe(
                     data => this.response = data,
                     error =>  this.errorMessage = <any>error
                  );
	}

	goToDashboard() {
		this.router.navigate(['/tableaubord']);
	}
	
}
