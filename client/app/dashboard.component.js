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
var DashboardComponent = (function () {
    function DashboardComponent(router, questionService) {
        this.router = router;
        this.questionService = questionService;
        this.themes = ['HTML', 'CSS', 'Javascript'];
        this.submitted = false;
    }
    DashboardComponent.prototype.checkQuestions = function () {
        this.router.navigate(['/testRapide']);
    };
    DashboardComponent.prototype.getNbQuests = function (theme) {
        var _this = this;
        this.questionService.getNbQuests(theme)
            .subscribe(function (data) { return _this.nbQuestMax = parseInt(data); }, function (error) { return _this.errorMessage = error; }, function () {
            if (isNaN(_this.nbQuestions) || _this.nbQuestions < 1 || _this.nbQuestions > _this.nbQuestMax) {
                alert("Veuillez entrer un nombre de questions compris entre 1 et " + _this.nbQuestMax);
                return false;
            }
            _this.setProgress(_this.selectedTheme, _this.nbQuestions);
        });
    };
    DashboardComponent.prototype.setProgress = function (theme, nbQuestions) {
        var _this = this;
        this.questionService.setProgress(theme, nbQuestions)
            .subscribe(function (data) { return _this.submitted = true; }, function (error) { return _this.errorMessage = error; }, function () { return _this.router.navigate(['/examen1']); });
    };
    DashboardComponent.prototype.onSubmit = function () {
        this.getNbQuests(this.selectedTheme);
        /*if (isNaN(this.nbQuestions) || this.nbQuestions < 1 || this.nbQuestions > this.nbQuestMax ) {
            alert("Veuillez entrer un nombre de questions compris entre 1 et " + this.nbQuestMax);
            return false;
        }*/
        //this.setProgress(this.selectedTheme, this.nbQuestions);
        //this.router.navigate(['/testRapide']);
    };
    DashboardComponent = __decorate([
        core_1.Component({
            selector: 'my-dashboard',
            templateUrl: "/templates/tableaubord"
        }), 
        __metadata('design:paramtypes', [router_1.Router, question_service_1.QuestionService])
    ], DashboardComponent);
    return DashboardComponent;
}());
exports.DashboardComponent = DashboardComponent;
//# sourceMappingURL=dashboard.component.js.map