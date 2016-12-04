import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AccueilComponent }   		from './accueil.component';
import { DashboardComponent }   	from './dashboard.component';
import { InstructionsComponent }	from './instructions.component';
import { TRapideComponent }			from './trapide.component';
import { ExamenComponent }        	from './examen.component';
import { ExamResultComponent }    from './examresult.component';
import { AddQuestionComponent }   from './ajouterquestion.component';

const routes: Routes = [
  { path: '', redirectTo: 'accueil', pathMatch: 'full' },
  { path: 'accueil',  component: AccueilComponent },
  { path: 'tableaubord',  component: DashboardComponent },
  { path: 'instructions',  component: InstructionsComponent },
  { path: 'testRapide',  component: TRapideComponent },
  { path: 'examen1',  component: ExamenComponent},
  { path: 'examresult',  component: ExamResultComponent},
  { path: 'ajouterquestion',  component: AddQuestionComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}