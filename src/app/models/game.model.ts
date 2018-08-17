export class Game {
  constructor(
    public dateTime: Date,
    public location: string,
    public type: string,
    public opponent: string
  ) {}
}