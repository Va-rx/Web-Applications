import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AuthService } from '../auth.service';
import { DataService } from '../data.service';
import { Trip } from '../model/trip';
import { User } from '../model/user';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css'],
})
export class NavigationComponent implements OnInit{

  trips: Trip[] = [];
  users: User[] = [];

  constructor(private data: DataService, public afAuth: AngularFireAuth, public service: AuthService) { }

  async getUsers() {
    this.users = await this.service.getAllUsers();
  }

  ngOnInit(): void {
    this.getUsers();
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

  signOut(): void {
    this.afAuth.signOut();
  }
}
