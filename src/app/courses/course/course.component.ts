import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CoursesService } from 'src/app/services/courses.service';
import { course } from 'src/app/types/course';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit, OnDestroy {
  course?: course | null;
  courseId?: string | null;
  routeObs?: Subscription | null;
  queryObs?: Subscription | null;
  editMode: boolean = false;

  constructor(private activatedRoute: ActivatedRoute, private service: CoursesService, private route: Router) {}
  
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

    this.queryObs = this.activatedRoute.queryParamMap.subscribe((param) => {
      this.editMode = Boolean(param.get("edit"));
    })
  }

  ngOnDestroy(): void {
    /**
     * Even though angular will take care of unsubscription (paramMap) but it's good practice to explictly unsubscribe from an observable
     * */ 
    this.routeObs?.unsubscribe();
    this.queryObs?.unsubscribe();
  }

  onEdit(): void {
    this.route.navigate(['/Courses/Course', this.courseId], { queryParams: { edit: true } });
  }

  onUpdate(): void {
    this.editMode = false;
    this.route.navigate(['/Courses/Course', this.courseId]);
  }

}
