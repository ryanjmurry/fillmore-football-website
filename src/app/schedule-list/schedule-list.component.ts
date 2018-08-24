import { Component, OnInit } from '@angular/core';
import { Game } from '../models/game.model';
import { GameService } from '../game.service';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-schedule-list',
  templateUrl: './schedule-list.component.html',
  styleUrls: ['./schedule-list.component.css']
})
export class ScheduleListComponent implements OnInit {
  games;

  constructor(private gameService: GameService) {}
  
  ngOnInit() {
    this.gameService.getGames().subscribe(schedule => {
      this.games = schedule;
      console.log(this.games);
    })
  }

  filterGamesByLevel: string = 'V';
  filterGamesByHomeAway: string = 'all';
  filterGamesByType: string = 'all';

  filterScheduleByLevel(gameLevelOption: string) {
    this.filterGamesByLevel = gameLevelOption;
  }

  filterScheduleByHomeAway(gameHomeAwayOption: string) {
    this.filterGamesByHomeAway = gameHomeAwayOption;
  }

  filterScheduleByType(gameTypeOption: string) {
    this.filterGamesByType = gameTypeOption
  }
}
