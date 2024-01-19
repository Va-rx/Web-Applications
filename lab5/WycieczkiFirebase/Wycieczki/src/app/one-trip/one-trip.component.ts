import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';
import { Trip } from '../model/trip';
import { FormsModule } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { emitDistinctChangesOnlyDefaultValue } from '@angular/compiler';

@Component({
  selector: 'app-one-trip',
  templateUrl: './one-trip.component.html',
  styleUrls: ['./one-trip.component.css']
})
export class OneTripComponent implements OnInit{

  constructor(private route: ActivatedRoute, private data: DataService) { }

  trips: Trip[] = [];
  basket: Trip[] = [];
  opinions: Opinion[] = [];
  opinion!: Opinion;
  id!: number;
  index: number = 0;

  async getTrips() {
    this.trips = await this.data.getAllTrips();
  }

  ngOnInit(): void {
    this.getTrips();
    this.data.currentMessage1.subscribe(
      (message) => (this.trips = message)
    );
    this.data.currentMessage2.subscribe(
      (message) => (this.basket = message)
    );
    this.route.params.subscribe(
      (parameter) => (this.id = parameter['id'])
    );
  }

  iterator: number = 0;

  changePhoto() {
    let trip = this.trips[this.id]; 
    // let len = (this.trips[this.id].image).length;
    // this.index = (this.index+1)%len;
    if(trip.actualimage == trip.image) trip.actualimage = trip.image1;
    else{
      if(trip.actualimage == trip.image1) trip.actualimage = trip.image2;
      else{
        if(trip.actualimage == trip.image2) trip.actualimage = trip.image;
      }
    }
  }

  tripOpinionCreate(opinion: any, formValue: NgForm) {

    if (opinion.nick == "") opinion.nick = "Anonimowy";

    this.opinion = {
      nick: opinion.nick,
      name: this.trips[this.id].name,
      description: opinion.description,
      date: opinion.date,
    };
    this.opinions.push(opinion);
    formValue.reset();
  }

  add() {
    let trip = this.trips[this.id];
    if (trip.amount < trip.capacity) {
      trip.amount++;
      if (this.basket.filter(e => e.name === trip.name).length > 0) { }
      else this.basket.push(trip);
    }
  }

  remove() {
    let trip = this.trips[this.id];
    if (trip.amount > 0) {
      trip.amount--;

      if(trip.amount == 0) {
        let index = this.basket.findIndex(x => x.name === trip.name);
        this.basket.splice(index, 1);
      }
    }
  }

  like() {
    this.trips[this.id].likes += 1;
    this.data.tripUpdate(this.trips[this.id]);
  }

  dislike() {
    this.trips[this.id].dislikes += 1;
    this.data.tripUpdate(this.trips[this.id]);
  }
}

export interface Opinion {
  nick: string;
  name: string;
  description: string;
  date: Date;
}
