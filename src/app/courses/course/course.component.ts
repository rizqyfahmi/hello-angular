import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { CoursesService } from 'src/app/services/courses.service';
import { course } from 'src/app/types/course';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit, OnDestroy {
  course?: course;
  courseId?: string | null;
  routeObs?: Subscription | null;

  constructor(private activatedRoute: ActivatedRoute, private service: CoursesService) {}
  
  ngOnInit(): void {
    /**
     * - By default angular doesn't create new instance of a component whenever the parameter is changed, it reuses the existing instance.
     * - We retrieve the value of paramter in ngOnInit. ngOnInit gets called only once
     * - Snapshot will not update with new value of parameter. Therefore, we use observable.
     * */ 
    this.routeObs = this.activatedRoute.paramMap.subscribe((param) => {
      this.courseId = param.get("id");
      this.course = this.service.courses.find((course) => course.id.toString() == this.courseId)
    });
  }

  ngOnDestroy(): void {
    /**
     * Even though angular will take care of unsubscription (paramMap) but it's good practice to explictly unsubscribe from an observable
     * */ 
    this.routeObs?.unsubscribe();
  }

}
