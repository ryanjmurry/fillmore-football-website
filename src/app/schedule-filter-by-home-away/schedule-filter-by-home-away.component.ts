import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-schedule-filter-by-home-away',
  templateUrl: './schedule-filter-by-home-away.component.html',
  styleUrls: ['./schedule-filter-by-home-away.component.css']
})
export class ScheduleFilterByHomeAwayComponent {
  @Output() changeSender = new EventEmitter();

  onChange(gameHomeAwayOption: string) {
    this.changeSender.emit(gameHomeAwayOption);
  }

}
