import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Game } from './models/game.model';

@Injectable()
export class GameService {
  games: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) { 
    this.games = database.list('games');
  }

  getGames() {
    return this.games;
  }

  addGame(newGame: Game) {
    this.games.push(newGame);
  }

  getGamesById(gameOfInterest: ) {

  }
}
