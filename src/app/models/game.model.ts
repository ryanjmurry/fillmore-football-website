export class Game {
  constructor(
    public dateTime: Date,
    public homeAway: string,
    public location: string,
    public type: string,
    public opponent: string
  ) {}
}