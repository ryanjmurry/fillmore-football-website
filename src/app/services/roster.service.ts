import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Player } from '../models/player.model';

@Injectable()
export class RosterService {
  players: FirebaseListObservable<any[]>;

  constructor(private db: AngularFireDatabase) { 
    this.players = db.list('players');
  }

  getPlayers() {
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
    playerInDb.update({firstName: localUpdatedPlayer.firstName,
                    lastName: localUpdatedPlayer.lastName,
                    level: localUpdatedPlayer.level,
                    number: localUpdatedPlayer.number,
                    offPosition: localUpdatedPlayer.offPosition,
                    defPosition: localUpdatedPlayer.defPosition,
                    grade: localUpdatedPlayer.grade
    })
  }

  deletePlayer(localPlayerToDelete) {
    let playerInDb = this.getPlayerById(localPlayerToDelete.$key);
    playerInDb.remove();
  }
}
