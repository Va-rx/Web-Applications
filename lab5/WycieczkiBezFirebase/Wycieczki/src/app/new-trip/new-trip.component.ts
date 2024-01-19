import { formatCurrency } from '@angular/common';
import { compileDeclarePipeFromMetadata } from '@angular/compiler';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup, NgForm, ReactiveFormsModule } from '@angular/forms';
import { DataService } from '../data.service';
import { TripsComponent } from '../trips/trips.component';
import { Trip } from '../trips/trips.component';

@Component({
  selector: 'app-new-trip',
  templateUrl: './new-trip.component.html',
  styleUrls: ['./new-trip.component.css']
})
export class NewTripComponent implements OnInit{

  trips!: Trip[];

  trip!: Trip;

  constructor(private data: DataService) {}

  tripCreate(item: any, tripForm: NgForm) {
    this.trip = {
      id: this.trips.length,
      name: item.name,
      country: item.country,
      startDate: item.startDate,
      endDate: item.endDate,
      price: item.price,
      capacity: item.capacity,
      amount: 0,
      description: item.description,
      image: item.image,
      likes: 0,
      dislikes: 0,
    };
    this.trips.push(this.trip)
    this.data.changeMessage1(this.trips);
    tripForm.reset();
  }
  ngOnInit(): void {
    this.data.currentMessage1.subscribe(
      (message) => (this.trips = message))
  }
}
