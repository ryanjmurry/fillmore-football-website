import { Component, Input } from '@angular/core';
import { GameService } from '../../../services/game.service';

@Component({
  selector: 'app-schedule-edit',
  templateUrl: './schedule-edit.component.html',
  styleUrls: ['./schedule-edit.component.css'],
})
export class ScheduleEditComponent {
  @Input() selectedGameToEdit;

  constructor(private gameService: GameService) {}

  beginUpdatingGame(gameToUpdate) {
    this.gameService.updateGame(gameToUpdate);
  }
}
