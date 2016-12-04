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
    }
    ExamenComponent.prototype.ngOnInit = function () {
        //
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