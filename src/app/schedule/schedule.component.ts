import { Component, OnInit } from '@angular/core';
import { Game } from '../models/game.model';
import { GameService } from '../game.service';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css'],
  providers: [GameService]
})
export class ScheduleComponent implements OnInit {
  schedule: Game[];

  constructor(private gameService: GameService) { }

  ngOnInit() {
    this.schedule = this.gameService.getGames();
  }

}
