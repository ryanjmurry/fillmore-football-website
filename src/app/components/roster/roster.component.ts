import { Component, OnInit } from '@angular/core';
import { RosterService } from '../../services/roster.service';

@Component({
  selector: 'app-roster',
  templateUrl: './roster.component.html',
  styleUrls: ['./roster.component.css'],
  providers: [RosterService]
})
export class RosterComponent implements OnInit {
  players;
  editPlayerClicked: boolean = false;
  selectedPlayerToEdit;

  constructor(private rosterService: RosterService) { }

  ngOnInit() {
    this.rosterService.getPlayers().subscribe(roster => {
      this.players = roster;
    })
  }

  editPlayerClickedToggle(playerToEdit) {
    this.editPlayerClicked = !this.editPlayerClicked;
    this.selectedPlayerToEdit = playerToEdit;
  }

  deletePlayer(playerToDelete) {
    if (confirm("Do you really want to delete"))
    this.rosterService.deletePlayer(playerToDelete);
  }

}

