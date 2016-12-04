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
var ExamResultComponent = (function () {
    function ExamResultComponent(router, questionService) {
        this.router = router;
        this.questionService = questionService;
    }
    ExamResultComponent.prototype.ngOnInit = function () {
        this.getProgress();
    };
    ExamResultComponent.prototype.getProgress = function () {
        var _this = this;
        this.questionService.getProgress()
            .subscribe(function (data) { return _this.result = data; }, function (error) { return _this.errorMessage = error; }, function () {
            var good = parseInt(_this.result.bonnesReponses);
            var qTotal = parseInt(_this.result.questMax);
            var note = 100.0 * (good * 1.0 / qTotal);
            _this.notedec = note.toFixed(2);
            // Paliers
            if (note >= 0.0 && note < 25.0) {
                _this.message = "Sans commentaire...";
            }
            else if (note >= 25.0 && note < 50.0) {
                _this.message = "You shall not pass. Retournez a l'ecole.";
            }
            else if (note >= 50.0 && note < 75.0) {
                _this.message = "Vous etes presque bon!";
            }
            else if (note >= 75.0 && note <= 100.0) {
                _this.message = "Vous etes un magicien du Web!";
            }
            else {
                alert("Oops! La note n'est pas comprise entre 0 et 100...");
            }
            // Update stats
        });
    };
    ExamResultComponent.prototype.goToDashboard = function () {
        this.router.navigate(['/tableaubord']);
    };
    ExamResultComponent = __decorate([
        core_1.Component({
            selector: 'my-examresult',
            templateUrl: "/templates/examresult"
        }), 
        __metadata('design:paramtypes', [router_1.Router, question_service_1.QuestionService])
    ], ExamResultComponent);
    return ExamResultComponent;
}());
exports.ExamResultComponent = ExamResultComponent;
//# sourceMappingURL=examresult.component.js.map