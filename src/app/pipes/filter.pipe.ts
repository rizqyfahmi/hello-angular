import { Pipe, PipeTransform } from '@angular/core';
import { Student } from '../types/student';

@Pipe({
  name: 'filterStudent',
  /**
   * - As the default, pure is true (even we don't specify it)
   * - It will make this custom pipe becomes pure pipe (when pipe is false, it makes this custome pipe becomes impure pipe)
   * - Pure pipe are those pipes which gets executed for every changes. It is not good for performance, and this is the reason why angular doesn't 
   *   recomend to use pipe for filtering and sorting data. If we use "pure pipe" for filtering or sorting data 
   *   then the result will not be as expected. If we use "impure pipe" will work properly but it will significantly 
   *   impact the performance of the application. That's why angular recomends to move filtering and sorting logic into
   *   the component itself
  */
  pure: false
})
export class FilterPipe implements PipeTransform {

  transform(students: Student[], filterText: string): Student[] {
    if (students.length == 0 || filterText == '') {
      return students;
    }

    return students.filter((student: Student) => student.gender.toLowerCase() == filterText.toLowerCase());
  }

}
