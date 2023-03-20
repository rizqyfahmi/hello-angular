import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SetBackgroundDirective } from './directives/set-background/set-background.directive';
import { HighlightDirective } from './directives/highlight/highlight.directive';
import { HoverDirective } from './directives/hover/hover.directive';
import { BetterHighlightDirective } from './directives/better-highlight/better-highlight.directive';
import { ClassDirective } from './directives/class/class.directive';
import { StyleDirective } from './directives/style/style.directive';
import { IfDirective } from './directives/if/if.directive';

@NgModule({
  declarations: [
    AppComponent,
    SetBackgroundDirective,
    HighlightDirective,
    HoverDirective,
    BetterHighlightDirective,
    ClassDirective,
    StyleDirective,
    IfDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
