import {Pipe, PipeTransform} from '@angular/core';
import { Coach } from '../models/coach.model';

@Pipe({
  name: "coachlevel",
  pure: false
})

export class CoachLevelPipe implements PipeTransform {
  transform(input: Coach[], level) {
    var output: Coach[] = [];
    if (input) {
      if(level === "V") {
        for (let i = 0; i < input.length; i++) {
          if (input[i].level === "V") {
            output.push(input[i]);
          }
        }
        return output;
      } else {
        for (let i = 0; i < input.length; i++) {
          if (input[i].level === "JV") {
            output.push(input[i]);
          }
        }
        return output;
      }
    }
  }
}