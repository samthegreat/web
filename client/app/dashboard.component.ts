import { Component, OnInit }	from '@angular/core';
import { Router }				from '@angular/router';

@Component({
  selector: 'my-dashboard',
  templateUrl: "/templates/tableaubord"
})

export class DashboardComponent implements OnInit {

	constructor(
		private router: Router )
	{ }

	checkQuestions(): void {
    	this.router.navigate(['/testRapide']);
  }   
	
}
