import { Component }	from '@angular/core';
import { Router }				from '@angular/router';

@Component({
  selector: 'my-dashboard',
  templateUrl: "/templates/tableaubord"
})

export class DashboardComponent {

	constructor(
		private router: Router )
	{ }

	checkQuestions(): void {
    	this.router.navigate(['/testRapide']);
  }   
	
}
