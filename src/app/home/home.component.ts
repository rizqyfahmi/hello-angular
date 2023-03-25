import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../services/courses.service';
import { course } from '../types/course';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private coursesService: CoursesService) {}

  courses: course[] = [];

  ngOnInit(): void {
    this.courses = this.coursesService.courses;
  }
}
