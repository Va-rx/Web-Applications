import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Trip } from '../trips/trips.component';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css'],
})
export class NavigationComponent implements OnInit{

  trips: Trip[] = [];

  constructor(private data: DataService) {}

  ngOnInit(): void {
    this.data.currentMessage2.subscribe(
      (message) => (this.trips = message)
    );
  }

  getPrice(): number {
    let price = 0;
    for(let trip of this.trips) {
      price += (trip.price*trip.amount);
    }
    return price;
  }

  getAmount(): number {
    let amount = 0;
    for(let trip of this.trips) {
      amount += trip.amount;
    }
    return amount;
  }
}
