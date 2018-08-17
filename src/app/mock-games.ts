import { Game } from './models/game.model';

let viewPointDate = new Date('August 17, 2018 19:00:00');
let brentwoodDate = new Date('August 24, 2018 19:30:00');
let trinityDate = new Date('August 31, 2018 19:30:00');
let laCanadaDate = new Date('September 7, 2018 19:00:00');
let carpinteriaDate = new Date('September 14, 2018 19:30:00');
let nordhoffDate = new Date('September 21, 2018 19:30:00');
let huenemeDate = new Date('September 28, 2018 19:00:00');
let santaClaraDate = new Date('October 12, 2018 19:30:00');
let santaPaulaDate = new Date('October 19, 2018 19:00:00');
let malibuDate = new Date('October 26, 2018 19:30:00');

export const GAMES: Game[] = [
  new Game(viewPointDate, 'home', 'Fillmore High School', 'non-league', 'ViewPoint'),
  new Game(brentwoodDate, 'away', 'Brentwood School', 'non-league', 'Brentwood School'),
  new Game(trinityDate, 'home', 'Fillmore High School', 'non-league', 'Trinity Classical Academy'),
  new Game(laCanadaDate, 'away', 'La Canada High School', 'non-league', 'La Canada'),
  new Game(carpinteriaDate, 'away', 'Carpinteria High School', 'league', 'Carpinteria'),
  new Game(nordhoffDate, 'home', 'Fillmore School', 'league', 'Nordhoff'),
  new Game(huenemeDate, 'home', 'Fillmore High School', 'league', 'Hueneme'),
  new Game(santaClaraDate, 'away', 'Santa Clara High School', 'league', 'Santa Clara'),
  new Game(santaPaulaDate, 'home', 'Fillmore High School', 'league', 'Santa Paula'),
  new Game(malibuDate, 'home', 'Fillmore High School', 'league', 'Malibu'),
];