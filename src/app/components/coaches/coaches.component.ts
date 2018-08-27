import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { CoachService } from '../../services/coach.service';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-coaches',
  templateUrl: './coaches.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./coaches.component.css'],
  providers: [CoachService]
})
export class CoachesComponent implements OnInit {
  coaches;
  editCoachClicked: boolean = false;
  selectedCoachToEdit;
  filterCoachesByLevelParam: string = 'all';
  isCollapsed = true;
  closeResult: string;

  constructor(private coachService: CoachService, private modalService: NgbModal) {}
  
  openModal(content) {
    this.modalService.open(content, { size: 'lg' });
  }

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
