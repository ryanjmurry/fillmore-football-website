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

  updateGame(localUpdatedGame) {
    let gameInDb = this.getGameById(localUpdatedGame.$key);
    let newDate = new Date(localUpdatedGame.date + " " + localUpdatedGame.time);
    let formattedDate = newDate.toLocaleString('en-us', { weekday: "short", month: "short", day: "numeric", year: "numeric" });
    gameInDb.update({date: formattedDate,
                    homeAway: localUpdatedGame.homeAway,
                    level: localUpdatedGame.level,
                    location: localUpdatedGame.location,
                    opponent: localUpdatedGame.opponent,
                    time: localUpdatedGame.time,
                    type: localUpdatedGame.type
    })
  }

  deleteGame(localGameToDelete) {
    let gameInDb = this.getGameById(localGameToDelete.$key);
    gameInDb.remove();
  }
}
