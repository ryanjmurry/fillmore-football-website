import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: "time",
  pure: false
})

export class TimePipe implements PipeTransform {
  transform(input: string) {
    if (input) {
      let hours = parseInt(input.split(":")[0]);
      let min = input.split(":")[1];
      if (hours === 0) {
        hours += 12
        return (hours.toString() + ":" + min + " " + "AM");
      } else if (hours === 12) {
        return (hours.toString() + ":" + min + " " + "PM");
      } else if (hours > 12) {
        hours -= 12;
        return (hours.toString() + ":" + min + " " + "PM");
      } else {
        return (hours.toString() + ":" + min + " " + "AM");
      }
    }
  }
}