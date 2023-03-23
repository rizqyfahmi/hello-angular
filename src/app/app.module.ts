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
  /**
   * - Once we provide a service in the AppModule, the same instance of that service will be available throughout the app
   *   i.e. in all components, directives, and services
   * */
  providers: [EnrollService],
  bootstrap: [AppComponent]
})
export class AppModule { }
