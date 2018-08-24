import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Player } from '../models/player.model';

@Injectable()
export class PlayerService {
  players: FirebaseListObservable<any[]>;

  constructor(private db: AngularFireDatabase) { 
    this.players = db.list('players');
  }

  getPlayeres() {
    return this.players;
  }

  addPlayer(newPlayer: Player) {
    this.players.push(newPlayer);
  }

  getPlayerById(playerId: string) {
    return this.db.object('players/' + playerId);
  }

  updatePlayer(localUpdatedPlayer) {
    let playerInDb = this.getPlayerById(localUpdatedPlayer.$key);
    playerInDb.update({name: localUpdatedPlayer.name,
                    email: localUpdatedPlayer.email,
                    level: localUpdatedPlayer.level,
                    title: localUpdatedPlayer.title,
                    bio: localUpdatedPlayer.bio
    })
  }

  deletePlayer(localPlayerToDelete) {
    let playerInDb = this.getPlayerById(localPlayerToDelete.$key);
    playerInDb.remove();
  }
}
