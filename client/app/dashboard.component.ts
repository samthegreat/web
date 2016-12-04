import { Component, Injectable }	from '@angular/core';
import { Router }					from '@angular/router';

import { QuestionService } from './question.service';
import { Question } from './question';

@Component({
  selector: 'my-dashboard',
  templateUrl: "/templates/tableaubord"
})

export class DashboardComponent {

	themes = ['HTML', 'CSS', 'Javascript'];
	submitted = false;
	errorMessage: string;
	nbQuestions;
	selectedTheme: string;
	nbQuestMax;

	constructor(
		private router: Router,
		private questionService : QuestionService )
	{ }

	checkQuestions(): void {
    	this.router.navigate(['/testRapide']);
    }

    getNbQuests(theme: string) {

    	this.questionService.getNbQuests(theme)
                  .subscribe(
                  	data  => this.nbQuestMax = parseInt(data),
                  	error =>  this.errorMessage = <any>error,
                  	() => {
                  		if (isNaN(this.nbQuestions) || this.nbQuestions < 1 || this.nbQuestions > this.nbQuestMax ) {
							alert("Veuillez entrer un nombre de questions compris entre 1 et " + this.nbQuestMax);
							return false;
						}
                  		this.setProgress(this.selectedTheme, this.nbQuestions);
                  	}
                  );
    }

    setProgress(theme: string, nbQuestions: string) {

    	this.questionService.setProgress(theme, nbQuestions)
                  .subscribe(
                  	data  => this.submitted = true,
                  	error =>  this.errorMessage = <any>error,
                  	() => this.router.navigate(['/testRapide']));
    }

    onSubmit() { 

    	this.getNbQuests(this.selectedTheme);

    	/*if (isNaN(this.nbQuestions) || this.nbQuestions < 1 || this.nbQuestions > this.nbQuestMax ) {
			alert("Veuillez entrer un nombre de questions compris entre 1 et " + this.nbQuestMax);
			return false;
        }*/

        //this.setProgress(this.selectedTheme, this.nbQuestions);
        //this.router.navigate(['/testRapide']);
    }
	
}
