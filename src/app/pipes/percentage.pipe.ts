import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'percentage'
})
export class PercentagePipe implements PipeTransform {

  transform(value: number, totalMarks: number, decimal: number): string {
    console.log('percentage pipe is called!');
    return ((value / totalMarks) * 100).toFixed(decimal);
  }

}
