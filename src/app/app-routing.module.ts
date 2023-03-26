import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { CourseComponent } from './courses/course/course.component';
import { CoursesComponent } from './courses/courses.component';
import { ErrorComponent } from './error/error.component';
import { AuthGuard } from './guards/auth.guard';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'Home', component: HomeComponent },
  { path: 'About', component: AboutComponent },
  { path: 'Contact', component: ContactComponent },
  {
    path: 'Courses', component: CoursesComponent, children: [
      { path: 'Course/:id', component: CourseComponent }
    ],
    canActivateChild: [AuthGuard] // for http://localhost:4200/Courses/Course/:id
  },
  /**
   * - This wild card route should be placed in the last, 
   *   that's because this route matches to every route path which the user will enter in the url bar
   * - So, angular will search the matched route from the top
   * */
  { path: "**", component: ErrorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
