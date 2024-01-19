import { Component, Input, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-trip',
  templateUrl: './trip.component.html',
  styleUrls: ['./trip.component.css'],
})
export class TripComponent implements OnInit {
  trips: Trip[] = [];

  itemsInBasket!: number;

  constructor(private data: DataService) {}


  ngOnInit(): void {
    fetch('./assets/trips.json')
      .then((resp) => resp.json())
      .then((json) => {
        for (let i in json['Trips']) {
          this.trips.push({
            name: json['Trips'][i]['Name'],
            country: json['Trips'][i]['Country'],
            startDate: json['Trips'][i]['StartDate'],
            endDate: json['Trips'][i]['EndDate'],
            price: json['Trips'][i]['Price'],
            capacity: json['Trips'][i]['Capacity'],
            amount: 0,
            description: json['Trips'][i]['Description'],
            image: json['Trips'][i]['Image'],
          } as Trip);
        }
      });
    this.data.currentMessage.subscribe(
      (message) => (this.itemsInBasket = message)
    );
    this.data.currentMessage1.subscribe(
      (message) => (this.trips = message)
    ) 
  }

  add(trip: Trip) {
    if (trip.amount < trip.capacity) {
      trip.amount++;
      this.itemsInBasket++;
      this.data.changeMessage(this.itemsInBasket);
    }
  }

  remove(trip: Trip) {
    if (trip.amount > 0) {
      trip.amount--;
      this.itemsInBasket--;
      this.data.changeMessage(this.itemsInBasket);
    }
  }

  getExpensiveCost(trips: Trip[]): number {
    let value = -1;
    for (let trip of trips) {
      if (trip.price > value) {
        value = trip.price;
      }
    }
    return value;
  }

  getCheapCost(trips: Trip[]): number {
    let value = Number.MAX_SAFE_INTEGER;
    for (let trip of trips) {
      if (trip.price < value) {
        value = trip.price;
      }
    }
    return value;
  }

  delete(tripToDelete: Trip) {
    for (let i = 0; i < this.trips.length; i++) {
      if (tripToDelete == this.trips[i]) {
        this.trips.splice(i, 1);
      }
    }
  }
}

export interface Trip {
  name: string;
  country: string;
  startDate: string;
  endDate: string;
  price: number;
  capacity: number;
  amount: number;
  description: string;
  image: string;
}
