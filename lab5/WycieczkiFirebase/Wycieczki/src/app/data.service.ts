import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Trip } from './model/trip';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root',
})
export class DataService {

  private messageSource1 = new BehaviorSubject<Trip[]>([]);
  currentMessage1 = this.messageSource1.asObservable();

  private messageSource2 = new BehaviorSubject<Trip[]>([]);
  currentMessage2 = this.messageSource2.asObservable();

  changeMessage1(trips: Trip[]) {
    this.messageSource1.next(trips);
  }

  changeMessage2(basket: Trip[]) {
    this.messageSource2.next(basket);
  }
    //----

  constructor(private db : AngularFirestore) { }

  tripAdd(trip: Trip) {
    this.db.collection("Trips").doc((trip.id).toString()).set(trip);
  }

  tripDelete(trip: Trip) {
    this.db.doc(`Trips/${(trip.id)}`).delete();
  }

  getAllTrips() {
    return new Promise<any>((resolve) => {
      this.db.collection("Trips").valueChanges({ idField: 'id' }).subscribe(trips => resolve(trips));
    })
  }

  tripUpdate(trip: Trip) {
    this.db.doc(`Trips/${(trip.id)}`).update({likes: trip.likes, dislikes: trip.dislikes, amount: trip.amount});
  }


}
