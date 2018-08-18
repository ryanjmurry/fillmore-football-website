import { Component, Input } from '@angular/core';
import { Game } from '../models/game.model';

@Component({
  selector: 'app-schedule-list',
  templateUrl: './schedule-list.component.html',
  styleUrls: ['./schedule-list.component.css']
})
export class ScheduleListComponent {
  @Input() schedule: Game[];

  filterGamesByLevel: string = 'V';
  filterGamesByHomeAway: string = 'all';

  filterScheduleByLevel(gameLevelOption) {
    this.filterGamesByLevel = gameLevelOption;
  }

  filterScheduleByHomeAway(gameHomeAwayOption) {
    this.filterGamesByHomeAway = gameHomeAwayOption;
  }
}
