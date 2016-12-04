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
//import { Http, Response, Headers, RequestOptions }  from '@angular/http';
var question_service_1 = require('./question.service');
var ExamenComponent = (function () {
    function ExamenComponent(router, questionService) {
        this.router = router;
        this.questionService = questionService;
        this.mode = 'Observable';
        this.validated = false;
    }
    ExamenComponent.prototype.ngOnInit = function () {
        this.getTheme();
    };
    ExamenComponent.prototype.getTheme = function () {
        var _this = this;
        this.questionService.getTheme()
            .subscribe(function (data) { return _this.theme = data.theme; }, function (error) { return _this.errorMessage = error; }, function () {
            _this.getQuestion();
        });
    };
    ExamenComponent.prototype.getQuestion = function () {
        var _this = this;
        this.questionService.getQuestionExam(this.theme)
            .subscribe(function (question) { return _this.question = question; }, function (error) { return _this.errorMessage = error; });
    };
    ExamenComponent.prototype.validate = function (question, answer) {
        var _this = this;
        this.questionService.validateExam(question, answer)
            .subscribe(function (question) { return _this.result = "Bravo!"; }, function (error) { return _this.result = "Mauvaise reponse."; });
    };
    ExamenComponent.prototype.validateAnswer = function () {
        if (this.choix == "choix1") {
            this.chosenAnswer = this.question.choix1;
        }
        else if (this.choix == "choix2") {
            this.chosenAnswer = this.question.choix2;
        }
        else if (this.choix == "choix3") {
            this.chosenAnswer = this.question.choix3;
        }
        else if (this.choix == "choix4") {
            this.chosenAnswer = this.question.choix4;
        }
        else {
            this.chosenAnswer = "...";
            return;
        }
        this.validated = true;
        this.validate(this.question.question, this.chosenAnswer);
    };
    ExamenComponent.prototype.nextQuestion = function () {
        var _this = this;
        this.validated = false;
        this.result = "";
        this.questionService.nextQuestion()
            .subscribe(function (data) { return _this.nextRes = data.status; }, function (error) { return _this.router.navigate(['/tableaubord']); }, function () {
            if (_this.nextRes == 200) {
                _this.getQuestion();
            }
            else {
                _this.router.navigate(['/examresult']);
            }
        });
    };
    ExamenComponent.prototype.dropOut = function () {
        // TODO:
    };
    ExamenComponent = __decorate([
        core_1.Component({
            selector: 'my-exam',
            templateUrl: "/templates/examen1"
        }), 
        __metadata('design:paramtypes', [router_1.Router, question_service_1.QuestionService])
    ], ExamenComponent);
    return ExamenComponent;
}());
exports.ExamenComponent = ExamenComponent;
//# sourceMappingURL=examen.component.js.map