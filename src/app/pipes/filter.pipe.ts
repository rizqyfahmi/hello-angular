import { Pipe, PipeTransform } from '@angular/core';
import { Student } from '../types/student';

@Pipe({
  name: 'filterStudent'
})
export class FilterPipe implements PipeTransform {

  transform(students: Student[], filterText: string): Student[] {
    if (students.length == 0 || filterText == '') {
      return students;
    }

    return students.filter((student: Student) => student.gender.toLowerCase() == filterText.toLowerCase());
  }

}
