import { Component, OnInit } from '@angular/core';

import { QuestionService } from './question.service';

@Component({
  selector: 'my-accueil',
  templateUrl: "/templates/accueil"
})

export class AccueilComponent implements OnInit {

	response;
	errorMessage: string;

	constructor(private questionService : QuestionService)
	{

	}

	ngOnInit() {
		this.initStats();
	}

	initStats() {

		this.questionService.trueInitStats()
                  .subscribe(
                     data => this.response = data,
                     error =>  this.errorMessage = <any>error
                  );
	}
}
