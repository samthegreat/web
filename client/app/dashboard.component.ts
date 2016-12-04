import { Component }	from '@angular/core';
import { Router }				from '@angular/router';

@Component({
  selector: 'my-dashboard',
  templateUrl: "/templates/tableaubord"
})

export class DashboardComponent {

	themes = ['HTML', 'CSS', 'Javascript'];
	submitted = false;
	nbQuestions;
	selectedTheme;

	constructor(
		private router: Router )
	{ }

	checkQuestions(): void {
    	this.router.navigate(['/testRapide']);
    }

    onSubmit() { 
    	this.submitted = true; 
    }
	
}
