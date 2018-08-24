import { Component, OnInit } from '@angular/core';
import { CoachService } from '../../services/coach.service';

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
  filterCoachesByLevelParam: string = 'V';

  constructor(private coachService: CoachService) { }

  ngOnInit() {
    this.coachService.getCoaches().subscribe(coaches => {
      this.coaches = coaches;
    })
  }

  filterCoachesByLevel(coachLevelOption: string) {
    this.filterCoachesByLevelParam = coachLevelOption;
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
