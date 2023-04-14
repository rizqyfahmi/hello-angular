import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DemoComponent } from './demo/demo.component';
import { SetBackgroundDirective } from './directives/set-background/set-background.directive';
import { HighlightDirective } from './directives/highlight/highlight.directive';
import { HoverDirective } from './directives/hover/hover.directive';
import { BetterHighlightDirective } from './directives/better-highlight/better-highlight.directive';
import { ClassDirective } from './directives/class/class.directive';
import { StyleDirective } from './directives/style/style.directive';
import { IfDirective } from './directives/if/if.directive';
import { AllUsersComponent } from './all-users/all-users.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { CoursesComponent } from './courses/courses.component';
import { HomeComponent } from './home/home.component';
import { ErrorComponent } from './error/error.component';
import { CourseComponent } from './courses/course/course.component';
import { AppRoutingModule } from './app-routing.module';
import { PercentagePipe } from './pipes/percentage.pipe';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PostsModule } from './posts/posts.module';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';

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
    AboutComponent,
    ContactComponent,
    CoursesComponent,
    HomeComponent,
    ErrorComponent,
    CourseComponent,
    PercentagePipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    PostsModule,
    StoreModule.forRoot({}), // It is filled by empty object because we want to define all our reducers and related stuff inside that module
    EffectsModule.forRoot(),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: true, // Restrict extension to log-only mode
    })
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
