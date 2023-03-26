import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CoursesService } from '../services/courses.service';
import { course } from '../types/course';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute) {}

  courses: course[] = [];

  ngOnInit(): void {
    this.courses = this.activatedRoute.snapshot.data["courses"];
  }

}
