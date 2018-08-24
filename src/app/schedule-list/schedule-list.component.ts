import { Component, OnInit } from '@angular/core';
import { GameService } from '../game.service';
import { Router } from '@angular/router';
import { Game } from '../models/game.model';


@Component({
  selector: 'app-schedule-list',
  templateUrl: './schedule-list.component.html',
  styleUrls: ['./schedule-list.component.css']
})
export class ScheduleListComponent implements OnInit {
  games;

  constructor(private gameService: GameService, private router: Router) {}
  
  ngOnInit() {
    this.gameService.getGames().subscribe(schedule => {
      this.games = schedule;
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

  goToEditPage(clickedGame) {
    this.router.navigate(['schedule/edit', clickedGame.$key])
  }
}
