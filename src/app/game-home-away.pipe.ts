import {Pipe, PipeTransform} from '@angular/core';
import { Game } from './models/game.model';

@Pipe({
  name: "gamehomeaway",
  pure: false
})

export class GameHomeAwayPipe implements PipeTransform {
  transform(input: Game[], homeAway) {
    var output: Game[] = [];
    if(homeAway === "away") {
      for (let i = 0; i < input.length; i++) {
        if (input[i].homeAway === "away") {
          output.push(input[i]);
        }
      }
      return output;
    } else if (homeAway === "home") {
      for (let i = 0; i < input.length; i++) {
        if (input[i].homeAway === "home") {
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