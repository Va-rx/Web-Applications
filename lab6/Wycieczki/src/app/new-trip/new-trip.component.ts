import { Component, OnInit } from '@angular/core';
import { FormGroup, NgForm, ReactiveFormsModule } from '@angular/forms';
import { DataService } from '../data.service';
import { TripsComponent } from '../trips/trips.component';
import { Trip } from '../model/trip';

@Component({
  selector: 'app-new-trip',
  templateUrl: './new-trip.component.html',
  styleUrls: ['./new-trip.component.css']
})
export class NewTripComponent implements OnInit{

  trips!: Trip[];

  trip!: Trip;

  constructor(private data: DataService) {}

  async getTrips() {
    this.trips = await this.data.getAllTrips();
  }

  ngOnInit(): void {
    this.data.currentMessage1.subscribe(
      (message) => (this.trips = message))
    this.getTrips();
  }

  tripCreate(item: any, tripForm: NgForm) {
    this.trip = {
      id: Number((this.trips[(this.trips.length)-1].id)) + 1,
      name: item.name,
      country: item.country,
      startDate: item.startDate,
      endDate: item.endDate,
      price: item.price,
      capacity: item.capacity,
      amount: 0,
      description: item.description,
      image: item.image,
      actualimage: item.image,
      image1: item.image1,
      image2: item.image2,
      likes: 0,
      dislikes: 0,
    };
    this.getTrips();
    this.data.tripAdd(this.trip);
    this.data.changeMessage1(this.trips);
    tripForm.reset();
    // this.trips.push(this.trip)
    // this.trips.splice(this.trips.length, 0, this.trip);
  }

  deleteTrip(tripToDelete: Trip) {
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
