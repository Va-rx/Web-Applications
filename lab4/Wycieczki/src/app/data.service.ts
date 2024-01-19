import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Trip } from './trip/trip.component';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private messageSource = new BehaviorSubject<number>(0);
  currentMessage = this.messageSource.asObservable();

  private messageSource1 = new BehaviorSubject<Trip[]>([]);
  currentMessage1 = this.messageSource1.asObservable();

  changeMessage(itemsInBasket: number) {
    this.messageSource.next(itemsInBasket);
  }

  changeMessage1(trips: Trip[]) {
    this.messageSource1.next(trips);
  }

}
