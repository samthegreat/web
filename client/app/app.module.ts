import { NgModule  }      from '@angular/core';
import { BrowserModule  }	from '@angular/platform-browser';
import { FormsModule  }   from '@angular/forms';
import { HttpModule }     from '@angular/http';

import { AppComponent }           from './app.component';
import { AccueilComponent }       from './accueil.component';
import { DashboardComponent }     from './dashboard.component';
import { InstructionsComponent }	from './instructions.component';
import { TRapideComponent }       from './trapide.component';
import { QuestionService }        from './question.service';

import { AppRoutingModule }       from './app-routing.module';

@NgModule({
  imports: 		[ 
  	BrowserModule,
  	FormsModule,
  	HttpModule,
  	AppRoutingModule
  	],
  declarations: [ 
  	AppComponent,
  	AccueilComponent,
  	DashboardComponent,
  	InstructionsComponent,
  	TRapideComponent
  	],
  providers: [
    QuestionService  
  ],
  bootstrap: 	[ AppComponent ]
})

export class AppModule { }
