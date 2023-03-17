import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SetBackgroundDirective } from './directives/set-background/set-background.directive';
import { HighlightDirective } from './directives/highlight/highlight.directive';
import { HoverDirective } from './directives/hover/hover.directive';

@NgModule({
  declarations: [
    AppComponent,
    SetBackgroundDirective,
    HighlightDirective,
    HoverDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
