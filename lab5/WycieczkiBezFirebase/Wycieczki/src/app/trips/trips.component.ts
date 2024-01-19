import { Component, Input, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-trip',
  templateUrl: './trips.component.html',
  styleUrls: ['./trips.component.css'],
})
export class TripsComponent implements OnInit {

  trips: Trip[] = [];
  basket: Trip[] = [];

  constructor(private data: DataService) {}

  ngOnInit(): void {
    fetch('./assets/trips.json')
      .then((resp) => resp.json())
      .then((json) => {
        if (this.trips.length != 0) return;
        for (let i in json['Trips']) {
          this.trips.push({
            id: this.trips.length,
            name: json['Trips'][i]['Name'],
            country: json['Trips'][i]['Country'],
            startDate: json['Trips'][i]['StartDate'],
            endDate: json['Trips'][i]['EndDate'],
            price: json['Trips'][i]['Price'],
            capacity: json['Trips'][i]['Capacity'],
            amount: 0,
            description: json['Trips'][i]['Description'],
            image: json['Trips'][i]['Image'],
            likes: 0,
            dislikes: 0,
          } as Trip);
        }
      });
    this.data.currentMessage1.subscribe(
      (message) => (this.trips = message)
    );
    this.data.currentMessage2.subscribe(
      (message) => (this.basket = message)
    );
    console.log(this.trips);
    
  }

  add(trip: Trip) {
    if (trip.amount < trip.capacity) {
      trip.amount++;
      if (this.basket.filter(e => e.name === trip.name).length > 0) { }
      else this.basket.push(trip);
    }
  }

  remove(trip: Trip) {
    if (trip.amount > 0) {
      trip.amount--;

      if(trip.amount == 0) {
        let index = this.basket.findIndex(x => x.name === trip.name);
        this.basket.splice(index, 1);
      }
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
  id: number,
  name: string;
  country: string;
  startDate: string;
  endDate: string;
  price: number;
  capacity: number;
  amount: number;
  description: string;
  image: string;
  likes: number;
  dislikes: number;
}
