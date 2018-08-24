import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Game } from '../models/game.model';

@Injectable()
export class GameService {
  games: FirebaseListObservable<any[]>;

  constructor(private db: AngularFireDatabase) { 
    this.games = db.list('games');
  }

  getGames() {
    return this.games;
  }

  addGame(newGame: Game) {
    this.games.push(newGame);
  }

  getGameById(gameId: string) {
    return this.db.object('games/' + gameId);
  }

  updateGame(gameToUpdate) {
    let gameInDb = this.getGameById(gameToUpdate.$key);
    gameInDb.update({date: gameToUpdate.date,
                    homeAway: gameToUpdate.homeAway,
                    level: gameToUpdate.level,
                    location: gameToUpdate.location,
                    opponent: gameToUpdate.opponent,
                    time: gameToUpdate.time,
                    type: gameToUpdate.type
    })
  }
}
