import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-coaches-filter-by-level',
  templateUrl: './coaches-filter-by-level.component.html',
  styleUrls: ['./coaches-filter-by-level.component.css']
})
export class CoachesFilterByLevelComponent {
  @Output() changeSender = new EventEmitter();

  onChange(coachLevelOption: string) {
    this.changeSender.emit(coachLevelOption);
  }
}
