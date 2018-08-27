import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CoachService } from '../../../services/coach.service';

@Component({
  selector: 'app-coaches-edit',
  templateUrl: './coaches-edit.component.html',
  styleUrls: ['./coaches-edit.component.css'],
  providers: [CoachService]
})
export class CoachesEditComponent {
  @Input() selectedCoachToEdit;
  @Output() eventSender = new EventEmitter();

  constructor(private coachService: CoachService) {}

  beginUpdatingCoach(coachToUpdate) {
    this.coachService.updateCoach(coachToUpdate);
  }

}
