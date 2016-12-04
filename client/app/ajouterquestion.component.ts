import { Component }	from '@angular/core';
import { Router }				from '@angular/router';

import { QuestionService } from './question.service';
import { Question } from './question';

@Component({
  selector: 'my-addQuestion',
  templateUrl: "/templates/ajouterquestion"
})

export class addQuestionComponent {

  constructor(
  	private router: Router )
	{ }
  goToDashboard(): void {
    this.router.navigate(['/tableaubord']);
  }
}
