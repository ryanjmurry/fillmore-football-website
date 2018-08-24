import {Pipe, PipeTransform} from '@angular/core';
import { Game } from './models/game.model';

@Pipe({
  name: "gamelevel",
  pure: false
})

export class GameLevelPipe implements PipeTransform {
  transform(input: Game[], level) {
    var output: Game[] = [];
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