import { Component, OnInit, Injectable }	from '@angular/core';
import { Router }				from '@angular/router';
//import { Http, Response, Headers, RequestOptions }  from '@angular/http';

import { QuestionService } from './question.service';
import { Question } from './question';

@Component({
  selector: 'my-exam',
  templateUrl: "/templates/examen1"
})

export class ExamenComponent implements OnInit {

  constructor(
		private router: Router,
    private questionService : QuestionService)
  {
    
  }

	ngOnInit() {
    //
  }

}
