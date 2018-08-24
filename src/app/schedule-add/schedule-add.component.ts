import { Component } from '@angular/core';
import { GameService } from '../services/game.service';
import { Game } from '../models/game.model';

@Component({
  selector: 'app-schedule-add',
  templateUrl: './schedule-add.component.html',
  styleUrls: ['./schedule-add.component.css'],
  providers: [GameService]
})
export class ScheduleAddComponent {

  constructor(private gameService: GameService) {}

  location: string = 'Fillmore High School';

  onChange(locationOptionSelected: string) {
    if (locationOptionSelected === 'home') {
      this.location = 'Fillmore High School';
    } else {
      this.location = '';
    }
  }

  submitForm(levelInput, opponentInput, dateInput, timeInput, homeAwayInput, locationInput, typeInput) {
    let newDate = new Date(dateInput + " " + timeInput);
    dateInput = newDate.toLocaleString('en-us', { weekday: "short", month: "short", day: "numeric", year: "numeric" });
    timeInput = newDate.toLocaleTimeString('en-US', {hour: '2-digit', minute:'numeric'});
    let newGame = new Game(dateInput, timeInput, homeAwayInput, locationInput, typeInput, opponentInput, levelInput);
    this.gameService.addGame(newGame);
  }
}
