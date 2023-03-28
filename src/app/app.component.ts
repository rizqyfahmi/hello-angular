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

  addDummyStudent() {
    const studentCopy = Object.assign([], this.students)
    studentCopy.push({name: 'TEST', course: 'TEST', marks: 520, DOB: new Date(), gender: 'Female'});
    this.students = studentCopy; // Using this line "this.students" will be assined by new reference of students array. So, it will becomes pure change
  }

  changeGender() {
    const studentCopy: Student[] = Object.assign([], this.students)
    studentCopy[0].gender = 'Female';
    this.students = studentCopy;
  }
}
