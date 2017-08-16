import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './Home/Home';
import { ErrorComponent } from './Error/Error';
import { AboutComponent } from './About/About';
import { NextRunComponent } from './NextRun/NextRun';
import { AlertComponent } from './Alert/Alert';
import { AppAlertComponent } from './Alerts/app.alertcomponent';
import { BooleanConverter } from './Alerts/app.booleanConverter';
import { HighlightDirective, IfDirective } from './Alerts/app.borderDirective';
import { ValidationService } from './Alerts/app.ValidationService';
import { GitHubService } from './Alerts/GitHub/Githubservice';
import { RouterModule } from '@angular/router';
import { appRoutes } from './Common/app.routes'
import { routing } from './Common/app.routes'


@NgModule({
  declarations: [
    AppComponent,
    AppAlertComponent, 
    HomeComponent,
    ErrorComponent,
    AboutComponent,
    AlertComponent,
    NextRunComponent,
    BooleanConverter,
    HighlightDirective,
    IfDirective],
  imports: [
    BrowserModule,  
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    routing
  ],
  providers: [ValidationService, GitHubService],
  bootstrap: [AppComponent]
})
export class AppModule { }
