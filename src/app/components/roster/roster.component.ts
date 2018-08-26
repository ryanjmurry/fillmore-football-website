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

  sortNumberAsc: boolean = false;
  sortLastNameAsc: boolean = false;
  sortGradeAsc: boolean = false;

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

  sortByNumber() {
    if (!this.sortNumberAsc) {
      this.sortNumberAsc = true;
      this.players.sort((a, b) => {
        return parseInt(a.number) - parseInt(b.number)
      });
    } else {
      this.sortNumberAsc = false;
      this.players.sort((a,b) => {
        return parseInt(b.number) - parseInt(a.number)
      });
    }
  }
  
  sortByLastName() {
    if (!this.sortLastNameAsc) {
      this.sortLastNameAsc = true;
      this.players.sort((a, b) => {
        let nameA = a.lastName.toUpperCase();
        let nameB = b.lastName.toUpperCase();
        if (nameA < nameB) {
          return -1;
        } else if (nameA > nameB) {
          return 1;
        } else {
          return 0;
        }
      });
    } else {
      this.sortLastNameAsc = false;
      this.players.sort((a,b) => {
        let nameA = a.lastName.toUpperCase();
        let nameB = b.lastName.toUpperCase();
        if (nameA < nameB) {
          return -1;
        } else if (nameA > nameB) {
          return 1;
        } else {
          return 0;
        }
      })
      this.players.reverse();
    }
  }

  sortByGrade() {
    if (!this.sortGradeAsc) {
      this.sortGradeAsc = true;
      this.players.sort((a, b) => {
        return parseInt(a.grade) - parseInt(b.grade)
      });
    } else {
      this.sortGradeAsc = false;
      this.players.sort((a,b) => {
        return parseInt(b.grade) - parseInt(a.grade)
      });
    }
  }
}

