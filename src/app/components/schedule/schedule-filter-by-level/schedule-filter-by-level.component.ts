import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-schedule-filter-by-level',
  templateUrl: './schedule-filter-by-level.component.html',
  styleUrls: ['./schedule-filter-by-level.component.css']
})
export class ScheduleFilterByLevelComponent {
  @Output() changeSender = new EventEmitter();

  onChange(gameLevelOption: string) {
    this.changeSender.emit(gameLevelOption);
  }

}
