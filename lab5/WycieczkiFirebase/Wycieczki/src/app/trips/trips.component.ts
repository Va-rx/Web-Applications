import { Component, Input, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Trip } from '../model/trip';

@Component({
  selector: 'app-trip',
  templateUrl: './trips.component.html',
  styleUrls: ['./trips.component.css'],
})
export class TripsComponent implements OnInit {

  trips: Trip[] = [];
  basket: Trip[] = [];

  constructor(private data: DataService) {}

  async getTrips() {
    this.trips = await this.data.getAllTrips();
  }

  ngOnInit(): void {
    // fetch('./assets/trips.json')
    //   .then((resp) => resp.json())
    //   .then((json) => {
    //     if (this.trips.length != 0) return;
    //     for (let i in json['Trips']) {
    //       let obj: Trip;
    //       obj = {
    //         id: this.trips.length,
    //         name: json['Trips'][i]['Name'],
    //         country: json['Trips'][i]['Country'],
    //         startDate: json['Trips'][i]['StartDate'],
    //         endDate: json['Trips'][i]['EndDate'],
    //         price: json['Trips'][i]['Price'],
    //         capacity: json['Trips'][i]['Capacity'],
    //         amount: 0,
    //         description: json['Trips'][i]['Description'],
    //         image: json['Trips'][i]['Image'],
    //         likes: 0,
    //         dislikes: 0,
    //       }
    //       this.trips.push(obj); // to ogolnie wyjebac
    //       this.data.tripAdd(obj);
    this.getTrips();
      //   }
      // })
    this.data.currentMessage1.subscribe(
      (message) => (this.trips = message)
    );
    this.data.currentMessage2.subscribe(
      (message) => (this.basket = message)
    );
  }

  add(trip: Trip) {
    if (trip.amount < trip.capacity) {
      trip.amount++;
      this.data.tripUpdate(trip);
      if (this.basket.filter(e => e.name === trip.name).length > 0) { }
      else this.basket.push(trip);
    }
  }

  remove(trip: Trip) {
    if (trip.amount > 0) {
      trip.amount--;
      this.data.tripUpdate(trip);
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
    let i = 0;
    for (i = 0; i < this.trips.length; i++) {
      if (tripToDelete == this.trips[i]) {
        this.trips.splice(i, 1);
      }
    }
    this.data.tripDelete(tripToDelete)
    for(i; i < this.trips.length; i++) {
      this.trips[i].id -= 1;
    }
  }
}
