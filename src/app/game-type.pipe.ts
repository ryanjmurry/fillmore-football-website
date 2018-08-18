import {Pipe, PipeTransform} from '@angular/core';
import { Game } from './models/game.model';

@Pipe({
  name: "gametype",
  pure: false
})

export class GameTypePipe implements PipeTransform {
  transform(input: Game[], type) {
    var output: Game[] = [];
    if(type === "league") {
      for (let i = 0; i < input.length; i++) {
        if (input[i].type === "league") {
          output.push(input[i]);
        }
      }
      return output;
    } else if (type === "non-league") {
      for (let i = 0; i < input.length; i++) {
        if (input[i].type === "non-league") {
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