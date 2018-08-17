import { Game } from './models/game.model';

let viewPointDateV = new Date('August 17, 2018 19:00:00');
let brentwoodDateV = new Date('August 24, 2018 19:30:00');
let trinityDateV = new Date('August 31, 2018 19:30:00');
let laCanadaDateV = new Date('September 7, 2018 19:00:00');
let carpinteriaDateV = new Date('September 14, 2018 19:30:00');
let nordhoffDateV = new Date('September 21, 2018 19:30:00');
let huenemeDateV = new Date('September 28, 2018 19:00:00');
let santaClaraDateV = new Date('October 12, 2018 19:30:00');
let santaPaulaDateV = new Date('October 19, 2018 19:00:00');
let malibuDateV = new Date('October 26, 2018 19:30:00');
let burbankDateJV = new Date('August 17, 2018 17:30:00');
let brentwoodDateJV = new Date('August 23, 2018 18:00:00');
let montabelloDateJV = new Date('September 1, 2018 10:00:00');
let laCanadaDateJV = new Date('September 6, 2018 16:30:00');
let carpinteriaDateJV = new Date('September 14, 2018 16:30:00');
let simiDateJV = new Date('October 11, 2018 17:00:00');
let santaPaulaDateJV = new Date('October 19, 2018 16:30:00');
let malibuDateJV = new Date('October 26, 2018 16:30:00');


export const GAMES: Game[] = [
  new Game(viewPointDateV, 'home', 'Fillmore High School', 'non-league', 'ViewPoint', 'V'),
  new Game(brentwoodDateV, 'away', 'Brentwood High School', 'non-league', 'Brentwood', 'V'),
  new Game(trinityDateV, 'home', 'Fillmore High School', 'non-league', 'Trinity Classical Academy', 'V'),
  new Game(laCanadaDateV, 'away', 'La Canada High School', 'non-league', 'La Canada', 'V'),
  new Game(carpinteriaDateV, 'away', 'Carpinteria High School', 'league', 'Carpinteria', 'V'),
  new Game(nordhoffDateV, 'home', 'Fillmore School', 'league', 'Nordhoff', 'V'),
  new Game(huenemeDateV, 'home', 'Fillmore High School', 'league', 'Hueneme', 'V'),
  new Game(santaClaraDateV, 'away', 'Santa Clara High School', 'league', 'Santa Clara', 'V'),
  new Game(santaPaulaDateV, 'home', 'Fillmore High School', 'league', 'Santa Paula', 'V'),
  new Game(malibuDateV, 'home', 'Fillmore High School', 'league', 'Malibu', 'V'),
  new Game(burbankDateJV, 'home', 'Fillmore High School', 'non-league', 'Burbank', 'JV'),
  new Game(brentwoodDateJV, 'away', 'Brentwood High School', 'non-league', 'Brentwood', 'JV'),
  new Game(montabelloDateJV, 'away', 'Montebello High School', 'non-league', 'Montebello', 'JV'),
  new Game(laCanadaDateJV, 'home', 'Fillmore School', 'non-league', 'La Canada', 'JV'),
  new Game(carpinteriaDateJV, 'home', 'Fillmore High School', 'league', 'Carpinteria', 'JV'),
  new Game(simiDateJV, 'away', 'Simi Valley High School', 'non-league', 'Simi Valley', 'JV'),
  new Game(santaPaulaDateJV, 'home', 'Fillmore High School', 'league', 'Santa Paula', 'JV'),
  new Game(malibuDateJV, 'home', 'Fillmore High School', 'league', 'Malibu', 'JV'),
  
];