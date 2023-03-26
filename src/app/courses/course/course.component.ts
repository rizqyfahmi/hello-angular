import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CoursesService } from 'src/app/services/courses.service';
import { course } from 'src/app/types/course';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
  course?: course;
  courseId?: string | null;

  constructor(private activatedRoute: ActivatedRoute, private service: CoursesService) {}
  
  ngOnInit(): void {
    this.courseId = this.activatedRoute.snapshot.paramMap.get("id");
    this.course = this.service.courses.find((course) => course.id.toString() == this.courseId)
  } 

}
