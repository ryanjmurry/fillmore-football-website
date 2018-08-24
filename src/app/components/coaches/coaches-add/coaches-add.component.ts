import { Component } from '@angular/core';
import { Coach } from '../../../models/coach.model';
import { CoachService } from '../../../services/coach.service';

@Component({
  selector: 'app-coaches-add',
  templateUrl: './coaches-add.component.html',
  styleUrls: ['./coaches-add.component.css'],
  providers: [CoachService]
})
export class CoachesAddComponent {

  constructor(private coachService: CoachService) { }
  
  submitForm(levelInput, nameInput, emailInput, titleInput, bioInput) {
    let newCoach = new Coach(nameInput, emailInput, levelInput, titleInput, bioInput)
    this.coachService.addCoach(newCoach);
  }
}