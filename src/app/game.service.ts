import { Injectable } from '@angular/core';
import { Game } from './models/game.model';
import { GAMES } from './mock-games';

@Injectable()
export class GameService {

  constructor() { }

  getGames() {
    return GAMES;
  }

}
