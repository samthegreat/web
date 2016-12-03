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
var TRapideComponent = (function () {
    function TRapideComponent(router, questionService) {
        this.router = router;
        this.questionService = questionService;
        this.mode = 'Observable';
    }
    TRapideComponent.prototype.ngOnInit = function () {
        this.getQuestion();
    };
    TRapideComponent.prototype.getQuestion = function () {
        var _this = this;
        this.questionService.getQuestion()
            .subscribe(function (question) { return _this.question = question; }, function (error) { return _this.errorMessage = error; });
    };
    TRapideComponent.prototype.nextQuestion = function () {
        this.router.navigate(['/testRapide']);
        this.getQuestion();
    };
    TRapideComponent.prototype.goToDashboard = function () {
        this.router.navigate(['/tableaubord']);
    };
    TRapideComponent = __decorate([
        core_1.Component({
            selector: 'my-trapide',
            templateUrl: "/templates/testRapide1"
        }), 
        __metadata('design:paramtypes', [router_1.Router, question_service_1.QuestionService])
    ], TRapideComponent);
    return TRapideComponent;
}());
exports.TRapideComponent = TRapideComponent;
//# sourceMappingURL=trapide.component.js.map