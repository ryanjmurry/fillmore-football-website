import { Component, OnInit } from '@angular/core';
import { CoachService } from '../../services/coach.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-coaches',
  templateUrl: './coaches.component.html',
  styleUrls: ['./coaches.component.css'],
  providers: [CoachService]
})
export class CoachesComponent implements OnInit {
  coaches;
  editCoachClicked: boolean = false;
  selectedCoachToEdit;

  constructor(private coachService: CoachService, private router: Router) { }

  ngOnInit() {
    this.coachService.getCoaches().subscribe(coaches => {
      this.coaches = coaches;
    })
  }

  editCoachClickedToggle(coachToEdit) {
    this.editCoachClicked = !this.editCoachClicked;
    this.selectedCoachToEdit = coachToEdit;
  }

  deleteCoach(coachToDelete) {
    if (confirm("Do you really want to delete"))
    this.coachService.deleteCoach(coachToDelete);
  }

}
