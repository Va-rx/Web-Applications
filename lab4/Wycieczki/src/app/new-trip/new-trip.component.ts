import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { DataService } from '../data.service';
import { TripComponent } from '../trip/trip.component';

@Component({
  selector: 'app-new-trip',
  templateUrl: './new-trip.component.html',
  styleUrls: ['./new-trip.component.css']
})
export class NewTripComponent implements OnInit{

  trips!: Trip[];

  trip!: Trip;

  constructor(private data: DataService) {}

  tripCreate(item: any) {
    this.trip = {
      name: item.name,
      country: item.country,
      startDate: item.startDate,
      endDate: item.endDate,
      price: item.price,
      capacity: item.capacity,
      amount: 0,
      description: item.description,
      image: item.image,
    };
    this.trips.push(this.trip)
    this.data.changeMessage1(this.trips);
  }
  ngOnInit(): void {
    this.data.currentMessage1.subscribe(
      (message) => (this.trips = message))
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
