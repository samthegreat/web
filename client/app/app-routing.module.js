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
var accueil_component_1 = require('./accueil.component');
var dashboard_component_1 = require('./dashboard.component');
var instructions_component_1 = require('./instructions.component');
var trapide_component_1 = require('./trapide.component');
var examen_component_1 = require('./examen.component');
var examresult_component_1 = require('./examresult.component');
var ajouterquestion_component_1 = require('./ajouterquestion.component');
var routes = [
    { path: '', redirectTo: 'accueil', pathMatch: 'full' },
    { path: 'accueil', component: accueil_component_1.AccueilComponent },
    { path: 'tableaubord', component: dashboard_component_1.DashboardComponent },
    { path: 'instructions', component: instructions_component_1.InstructionsComponent },
    { path: 'testRapide', component: trapide_component_1.TRapideComponent },
    { path: 'examen1', component: examen_component_1.ExamenComponent },
    { path: 'examresult', component: examresult_component_1.ExamResultComponent },
    { path: 'ajouterquestion', component: ajouterquestion_component_1.AddQuestionComponent }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forRoot(routes)],
            exports: [router_1.RouterModule]
        }), 
        __metadata('design:paramtypes', [])
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=app-routing.module.js.map