"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var question_service_1 = require('./question.service');
var AddQuestionComponent = (function () {
    function AddQuestionComponent(router, questionService) {
        this.router = router;
        this.questionService = questionService;
        this.themes = ['HTML', 'CSS', 'Javascript'];
        this.submitted = false;
    }
    AddQuestionComponent.prototype.onSubmit = function () {
        this.addQuestion(this.selectedTheme, this.question, this.choix1, this.choix2, this.choix3, this.choix4, this.reponse);
    };
    AddQuestionComponent.prototype.addQuestion = function (theme, question, choix1, choix2, choix3, choix4, reponse) {
        var _this = this;
        if (this.choix1 === this.choix2 || this.choix1 === this.choix3 || this.choix1 === this.choix4 || this.choix2 === this.choix3 || this.choix2 === this.choix4 || this.choix3 === this.choix4) {
            alert("Les choix de reponse doivent etre differents!");
            return;
        }
        if (this.reponse !== this.choix1 && this.reponse !== this.choix2 && this.reponse !== this.choix3 && this.reponse !== this.choix4) {
            alert("La reponse doit faire partie des choix!");
            return false;
        }
        this.questionService.addQuest(theme, question, choix1, choix2, choix3, choix4, reponse)
            .subscribe(function (data) { return _this.submitted = true; }, function (error) { return _this.errorMessage = error; }, function () { return _this.router.navigate(['/tableaubord']); });
    };
    AddQuestionComponent.prototype.deleteQuestions = function () {
        var _this = this;
        this.questionService.deleteQuestion()
            .subscribe(function (data) { return _this.submitted = false; }, function (error) { return _this.errorMessage = error; });
    };
    AddQuestionComponent = __decorate([
        core_1.Component({
            selector: 'my-addQuestion',
            templateUrl: "/templates/ajouterquestion"
        }), 
        __metadata('design:paramtypes', [router_1.Router, question_service_1.QuestionService])
    ], AddQuestionComponent);
    return AddQuestionComponent;
}());
exports.AddQuestionComponent = AddQuestionComponent;
//# sourceMappingURL=ajouterquestion.component.js.map