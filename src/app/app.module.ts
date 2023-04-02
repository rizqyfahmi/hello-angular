import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DemoComponent } from './demo/demo.component';
import { SetBackgroundDirective } from './directives/set-background/set-background.directive';
import { HighlightDirective } from './directives/highlight/highlight.directive';
import { HoverDirective } from './directives/hover/hover.directive';
import { BetterHighlightDirective } from './directives/better-highlight/better-highlight.directive';
import { ClassDirective } from './directives/class/class.directive';
import { StyleDirective } from './directives/style/style.directive';
import { IfDirective } from './directives/if/if.directive';
import { FormsModule } from '@angular/forms';
import { AllUsersComponent } from './all-users/all-users.component';
import { UserDetailComponent } from './user-detail/user-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    DemoComponent,
    SetBackgroundDirective,
    HighlightDirective,
    HoverDirective,
    BetterHighlightDirective,
    ClassDirective,
    StyleDirective,
    IfDirective,
    DemoComponent,
    AllUsersComponent,
    UserDetailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
