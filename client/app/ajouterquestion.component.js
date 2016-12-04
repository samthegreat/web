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
var addQuestionComponent = (function () {
    function addQuestionComponent(router) {
        this.router = router;
        this.themes = ['HTML', 'CSS', 'Javascript'];
        this.submitted = false;
    }
    addQuestionComponent.prototype.checkQuestions = function () {
        this.router.navigate(['/testRapide']);
    };
    addQuestionComponent.prototype.onSubmit = function () {
        this.submitted = true;
    };
    addQuestionComponent.prototype.goToDashboard = function () {
        this.router.navigate(['/tableaubord']);
    };
    addQuestionComponent = __decorate([
        core_1.Component({
            selector: 'my-addQuestion',
            templateUrl: "/templates/ajouterquestion"
        }), 
        __metadata('design:paramtypes', [router_1.Router])
    ], addQuestionComponent);
    return addQuestionComponent;
}());
exports.addQuestionComponent = addQuestionComponent;
//# sourceMappingURL=ajouterquestion.component.js.map