import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-schedule-filter',
  templateUrl: './schedule-filter.component.html',
  styleUrls: ['./schedule-filter.component.css']
})
export class ScheduleFilterComponent {
  @Output() changeSender = new EventEmitter();

  onChange(gameLevelOption: string) {
    this.changeSender.emit(gameLevelOption);
  }

}
