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
  _filterText: string = ''; // Because we want to use filtering logic. We need to split the binded and filtered state;
  filteredStudents: Student[] = [];

  constructor(private studentService: StudentService) {}
  
  ngOnInit(): void {
    this.students = this.studentService.students;
    this.totalMarks = this.studentService.totalMarks;
    this.filteredStudents = this.students;
  }

  addDummyStudent() {
    this.students.push({ name: 'TEST', course: 'TEST', marks: 520, DOB: new Date(), gender: 'Female' });
    this.filteredStudents = this.filterStudentByGender(this._filterText);
  }

  changeGender() {
    this.students[0].gender = 'Female';
    this.filteredStudents = this.filterStudentByGender(this._filterText);
  }
  // It used to prove that impure pipe gets executed for every changes (let's hover the table)
  onMouseMove() { }

  get filterText() {
    return this._filterText;
  }

  set filterText(value: string) {
    this._filterText = value;
    this.filteredStudents = this.filterStudentByGender(value);
  }

  filterStudentByGender(filterTerm: string) {
    if (this.students.length === 0 || this.filterText === '') {
      return this.students;
    } else {
      return this.students.filter((student) => {
        return student.gender.toLowerCase() === filterTerm.toLowerCase();
      })
    }
  }
}
