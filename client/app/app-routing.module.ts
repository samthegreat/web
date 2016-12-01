import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AccueilComponent }   from './accueil.component';
import { DashboardComponent }   from './dashboard.component';

const routes: Routes = [
  { path: '', redirectTo: 'accueil', pathMatch: 'full' },
  { path: 'accueil',  component: AccueilComponent },
  { path: 'tableaubord',  component: DashboardComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}