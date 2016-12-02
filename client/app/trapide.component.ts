import { Component, OnInit }	from '@angular/core';
import { Router }				from '@angular/router';

@Component({
  selector: 'my-trapide',
  templateUrl: "/templates/testRapide1"
})

export class TRapideComponent implements OnInit {

	constructor(
		private router: Router )
	{ }

	ngOnInit(): void {
		// this.getQuestion();
    }

    nextQuestion(): void {
    	this.router.navigate(['/testRapide']);
    }

    goToDashboard(): void {
    	this.router.navigate(['/tableaubord']);
    }
}
