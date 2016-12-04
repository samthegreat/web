import { Component, Injectable, OnInit }	from '@angular/core';
import { Router }					from '@angular/router';

import { QuestionService } from './question.service';
import { Question } from './question';

@Component({
  selector: 'my-dashboard',
  templateUrl: "/templates/tableaubord"
})

export class DashboardComponent implements OnInit {

	themes = ['HTML', 'CSS', 'Javascript'];
	submitted = false;
	errorMessage: string;
	nbQuestions;
	selectedTheme: string;
	nbQuestMax;
	response; // not used

	//STATS
	stats;
	notedec;

	constructor(
		private router: Router,
		private questionService : QuestionService )
	{ }

	checkQuestions(): void {
    	this.router.navigate(['/testRapide']);
    }

    ngOnInit() {
		this.refresh();
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
                  	() => this.router.navigate(['/examen1']));
    }

    onSubmit() { 

    	this.getNbQuests(this.selectedTheme);
    }

    resetStats() {
    	this.questionService.initStats()
                  .subscribe(
                     data => this.response = data,
                     error =>  this.errorMessage = <any>error,
                     () => { this.refresh(); }
                  );
    }

    refresh() {

    	this.questionService.getStats()
                  .subscribe(
                     data => this.stats = data,
                     error =>  this.errorMessage = <any>error,
                     () => {
						
						// STATS EXAMENS
						
						var good = parseInt(this.stats.questExamBon);
						var total = parseInt(this.stats.questExamTot);
						
						if (total > 0)
						{
							var note = 100.0 * (good * 1.0 / total);
							this.notedec = note.toFixed(2);
						}
						else
						{
							this.notedec = "";
						}	
                     }
                  );

    }

    goToAddQuestion() {
      this.router.navigate(['/ajouterquestion']);
    }
	
}
