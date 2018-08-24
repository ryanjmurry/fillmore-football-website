import { Component, OnInit } from '@angular/core';
import { GameService } from '../../../services/game.service';


@Component({
  selector: 'app-schedule-list',
  templateUrl: './schedule-list.component.html',
  styleUrls: ['./schedule-list.component.css']
})
export class ScheduleListComponent implements OnInit {
  games;
  editGameClicked: boolean = false;
  selectedGameToEdit;

  constructor(private gameService: GameService) {}
  
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

  editGameClickedToggle(gameToEdit) {
    this.editGameClicked = !this.editGameClicked;
    this.selectedGameToEdit = gameToEdit;
  }

  deleteGame(gameToDelete) {
    if (confirm("Do you really want to delete?"))
    this.gameService.deleteGame(gameToDelete);
  }
}
