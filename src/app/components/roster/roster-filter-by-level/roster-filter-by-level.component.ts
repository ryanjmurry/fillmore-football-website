import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-roster-filter-by-level',
  templateUrl: './roster-filter-by-level.component.html',
  styleUrls: ['./roster-filter-by-level.component.css']
})
export class RosterFilterByLevelComponent {
  @Output() changeSender = new EventEmitter();

  onChange(rosterLevelOption: string) {
    this.changeSender.emit(rosterLevelOption);
  }
}
