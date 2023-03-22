import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JavascriptComponent } from './javascript/javascript.component';
import { AngularComponent } from './angular/angular.component';
import { EnrollService } from './services/enroll/enroll.service';

@NgModule({
  declarations: [
    AppComponent,
    JavascriptComponent,
    AngularComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [EnrollService],
  bootstrap: [AppComponent]
})
export class AppModule { }
