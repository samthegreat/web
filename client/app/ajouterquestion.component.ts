import { Component }	from '@angular/core';
import { Router }				from '@angular/router';

import { QuestionService } from './question.service';
import { Question } from './question';

@Component({
  selector: 'my-addQuestion',
  templateUrl: "/templates/ajouterquestion"
})

export class addQuestionComponent {

  themes = ['HTML', 'CSS', 'Javascript'];
	submitted = false;
	question;
	choix1;
  choix2;
  choix3;
  choix4;
  reponse;
	checkQuestions(): void {
    	this.router.navigate(['/testRapide']);
    }
  onSubmit() { 
    	this.submitted = true; 
    }
	constructor(
		private router: Router )
	{ }
  goToDashboard(): void {
    this.router.navigate(['/tableaubord']);
  }
}
