import { Pipe, PipeTransform } from '@angular/core';
import { Student } from '../types/student';

@Pipe({
  name: 'filterStudent',
  /**
   * - As the default, pure is true (even we don't specify it)
   * - It will make this custom pipe becomes pure pipe (when pipe is false, it makes this custome pipe becomes impure pipe)
   * - Pure pipe are those pipes which gets executed when Angular detects a "pure change" on the input value (at this case it means "students")
   * - A pure change is a change of a input value which has primitive type (string, boolean, number, etc.)
   * - A pure change also means a change of reference type (Array, Object, Function, etc.)
  */
  pure: true
})
export class FilterPipe implements PipeTransform {

  transform(students: Student[], filterText: string): Student[] {
    console.log('filter pipe is called!');
    if (students.length == 0 || filterText == '') {
      return students;
    }

    return students.filter((student: Student) => student.gender.toLowerCase() == filterText.toLowerCase());
  }

}
