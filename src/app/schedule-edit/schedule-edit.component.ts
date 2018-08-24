import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Game } from '../models/game.model';
import { GameService } from '../services/game.service';

@Component({
  selector: 'app-schedule-edit',
  templateUrl: './schedule-edit.component.html',
  styleUrls: ['./schedule-edit.component.css'],
  providers: [GameService]
})
export class ScheduleEditComponent implements OnInit {
  gameId: string;
  gameToDisplay;
  htmlTimeFormat;
  htmlDateFormat;

  constructor(private gameService: GameService, private route: ActivatedRoute, private location: Location) {}

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.gameId = urlParameters['id'];
    })

    this.gameService.getGameById(this.gameId).subscribe(game => {
      this.gameToDisplay = game;
      this.setHtmlDateAndTime(this.gameToDisplay.date, this.gameToDisplay.time);
    })
  }

  setHtmlDateAndTime(date: string, time: string) {
    let newHtmlDate = new Date(date + " " + time);
    let year = newHtmlDate.getFullYear();
    let month = ('0' + (newHtmlDate.getMonth() + 1)).slice(-2);
    let day = ('0' + newHtmlDate.getDate()).slice(-2);
    let hour = newHtmlDate.getHours();
    let min = ('0' + newHtmlDate.getMinutes()).slice(-2);
    this.htmlDateFormat = `${year}-${month}-${day}`;
    this.htmlTimeFormat = `${hour}:${min}`
  }

  toHtmlTime(time: string) {
    let newHtmlTime = new Date(time);
    console.log(newHtmlTime);
  }
}
