import { Component, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-schedule-filter-by-type',
  templateUrl: './schedule-filter-by-type.component.html',
  styleUrls: ['./schedule-filter-by-type.component.css']
})
export class ScheduleFilterByTypeComponent {
  @Output() changeSender = new EventEmitter();

  onChange(gameTypeOption: string) {
    this.changeSender.emit(gameTypeOption);
  }
}
