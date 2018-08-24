import { Injectable } from '@angular/core';
import { Game } from './models/game.model';
// import { GAMES } from './mock-games';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class GameService {
  games: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) { 
    this.games = database.list('games');
  }

  getGames() {
    return this.games;
  }

  // getGames() {
  //   return GAMES;
  // }

}
