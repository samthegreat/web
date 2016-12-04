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
var http_1 = require('@angular/http');
var Observable_1 = require('rxjs/Observable');
var QuestionService = (function () {
    function QuestionService(http) {
        this.http = http;
    }
    QuestionService.prototype.getQuestion = function () {
        return this.http.get('/ajax/getQuestion')
            .map(this.extractData)
            .catch(this.handleError);
    };
    QuestionService.prototype.validate = function (questionAsked, chosenAnswer) {
        /*let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });*/
        return this.http.post('/ajax/validate', { question: questionAsked, reponse: chosenAnswer })
            .map(function (res) { return res; })
            .catch(this.handleError);
    };
    QuestionService.prototype.validateExam = function (questionAsked, chosenAnswer) {
        /*let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });*/
        return this.http.post('/ajax/validateExam', { question: questionAsked, reponse: chosenAnswer })
            .map(function (res) { return res; })
            .catch(this.handleError);
    };
    QuestionService.prototype.getNbQuests = function (selectedTheme) {
        /*let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });*/
        return this.http.post('/ajax/getNbQuestbyTheme', { theme: selectedTheme })
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    QuestionService.prototype.setProgress = function (selectedTheme, nbQuestions) {
        return this.http.post('/ajax/setProgress', { theme: selectedTheme, qmax: nbQuestions })
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    QuestionService.prototype.getTheme = function () {
        return this.http.get('/ajax/getProgress')
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    QuestionService.prototype.getQuestionExam = function (theme) {
        return this.http.get('/ajax/getExamenQ/' + theme)
            .map(this.extractData)
            .catch(this.handleError);
    };
    QuestionService.prototype.nextQuestion = function () {
        return this.http.post('/ajax/nextQuestion', {})
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    QuestionService.prototype.extractData = function (res) {
        var body = res.json();
        return body || {};
    };
    QuestionService.prototype.handleError = function (error) {
        // In a real world app, we might use a remote logging infrastructure
        var errMsg;
        if (error instanceof http_1.Response) {
            var body = error.json() || '';
            var err = body.error || JSON.stringify(body);
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Observable_1.Observable.throw(errMsg);
    };
    QuestionService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], QuestionService);
    return QuestionService;
}());
exports.QuestionService = QuestionService;
//# sourceMappingURL=question.service.js.map