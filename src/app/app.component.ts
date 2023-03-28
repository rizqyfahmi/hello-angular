import { Component, OnInit } from '@angular/core';
import { StudentService } from './services/student.service';
import { Student } from './types/student';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title: string = 'Angular Pipes';
  students: Student[] = []; 
  totalMarks: number = 0;
  filterText: string = "";

  constructor(private studentService: StudentService) {}
  
  ngOnInit(): void {
    this.students = this.studentService.students;
    this.totalMarks = this.studentService.totalMarks;
  }
}
