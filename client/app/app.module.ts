import { NgModule  }      from '@angular/core';
import { BrowserModule  } from '@angular/platform-browser';
import { FormsModule  }   from '@angular/forms';

import { AppComponent } from './app.component';
import { AccueilComponent }   from './accueil.component';
import { DashboardComponent }   from './dashboard.component';

import { AppRoutingModule }     from './app-routing.module';

@NgModule({
  imports: 		[ BrowserModule, FormsModule, AppRoutingModule ],
  declarations: [ AppComponent, AccueilComponent, DashboardComponent],
  bootstrap: 	[ AppComponent ]
})

export class AppModule { }
