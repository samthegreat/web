import { Component, Injectable }  from '@angular/core';
import { Router }       from '@angular/router';

import { QuestionService } from './question.service';
import { Question } from './question';

@Component({
  selector: 'my-addQuestion',
  templateUrl: "/templates/ajouterquestion"
})

export class AddQuestionComponent {

  themes = ['HTML', 'CSS', 'Javascript'];
  errorMessage: string;
  selectedTheme: string;
  submitted = false;
  question;
  choix1;
  choix2;
  choix3;
  choix4;
  reponse;
  
  constructor(
    private router: Router,
    private questionService: QuestionService
  )
  { }

  onSubmit() { 
      this.addQuestion(this.selectedTheme, this.question, this.choix1, this.choix2, this.choix3, this.choix4, this.reponse);
  }

  addQuestion(theme: string, question: string, choix1: string, choix2: string, choix3: string, choix4: string, reponse: string)
  {

    if (this.choix1 === this.choix2 || this.choix1 === this.choix3 || this.choix1 === this.choix4 || this.choix2 === this.choix3 || this.choix2 === this.choix4 || this.choix3 === this.choix4) {
      alert("Les choix de reponse doivent etre differents!");
      return;
    }
    
    if (this.reponse !== this.choix1 && this.reponse !== this.choix2 && this.reponse !== this.choix3 && this.reponse !== this.choix4) {
      alert("La reponse doit faire partie des choix!");
      return false;
    }


    this.questionService.addQuest(theme, question, choix1, choix2, choix3, choix4, reponse)
        .subscribe(
              data  => this.submitted = true,
              error =>  this.errorMessage = <any>error,
              () => this.router.navigate(['/tableaubord']));
  }

  deleteQuestions() {

    this.questionService.deleteQuestion()
        .subscribe(
              data  => this.submitted = false,
              error =>  this.errorMessage = <any>error);
  }

}

