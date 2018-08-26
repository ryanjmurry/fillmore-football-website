import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: "level",
  pure: false
})

export class LevelPipe implements PipeTransform {
  transform(input, level) {
    var output = [];
    if (input) {
      if(level === "V") {
        for (let i = 0; i < input.length; i++) {
          if (input[i].level === "V") {
            output.push(input[i]);
          }
        }
        return output;
      } else if (level === "JV") {
        for (let i = 0; i < input.length; i++) {
          if (input[i].level === "JV") {
            output.push(input[i]);
          }
        }
        return output;
      } else {
        for (let i = 0; i < input.length; i++) {
          output.push(input[i]);
        }
        return output;
      }
    }
  }
}