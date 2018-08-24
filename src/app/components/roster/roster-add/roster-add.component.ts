import { Component } from '@angular/core';
import { Player } from '../../../models/player.model';
import { RosterService } from '../../../services/roster.service';

@Component({
  selector: 'app-roster-add',
  templateUrl: './roster-add.component.html',
  styleUrls: ['./roster-add.component.css'],
  providers: [RosterService]
})
export class RosterAddComponent {

  constructor(private rosterService: RosterService) {}

  submitForm(levelInput, firstNameInput, lastNameInput, numberInput, offPositionInput, defPositionInput, gradeInput) {
    let newPlayer = new Player(firstNameInput, lastNameInput, numberInput, offPositionInput, defPositionInput, gradeInput, levelInput);
    this.rosterService.addPlayer(newPlayer);
  }
}
