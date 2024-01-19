import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Trip } from './trips/trips.component';

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
}
