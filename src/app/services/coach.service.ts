import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Coach } from '../models/coach.model';

@Injectable()
export class CoachService {
  coaches: FirebaseListObservable<any[]>;

  constructor(private db: AngularFireDatabase) { 
    this.coaches = db.list('coaches');
  }

  getCoaches() {
    return this.coaches;
  }

  addCoach(newCoach: Coach) {
    this.coaches.push(newCoach);
  }

  getCoachById(coachId: string) {
    return this.db.object('coaches/' + coachId);
  }

  updateCoach(localUpdatedCoach) {
    let coachInDb = this.getCoachById(localUpdatedCoach.$key);
    coachInDb.update({name: localUpdatedCoach.name,
                    email: localUpdatedCoach.email,
                    level: localUpdatedCoach.level,
                    title: localUpdatedCoach.title,
                    bio: localUpdatedCoach.bio
    })
  }

  deleteCoach(localCoachToDelete) {
    let coachInDb = this.getCoachById(localCoachToDelete.$key);
    coachInDb.remove();
  }
}
