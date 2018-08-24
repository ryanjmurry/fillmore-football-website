import { Component, Input } from '@angular/core';
import { RosterService } from '../../../services/roster.service';

@Component({
  selector: 'app-roster-edit',
  templateUrl: './roster-edit.component.html',
  styleUrls: ['./roster-edit.component.css'],
  providers: [RosterService]
})
export class RosterEditComponent {
  @Input() selectedPlayerToEdit;

  constructor(private rosterService: RosterService) {}

  beginUpdatingPlayer(playerToUpdate) {
    this.rosterService.updatePlayer(playerToUpdate);
  }
}
