import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'probabilityPercentage'
})
export class ProbabilityPercentagePipe implements PipeTransform {

  transform(value: number): string {
    const probabilityAsPercentage: string = (value * 100).toFixed(2) + '%';
    return probabilityAsPercentage;
  }

}
