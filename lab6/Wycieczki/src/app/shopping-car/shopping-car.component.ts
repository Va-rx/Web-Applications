import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Trip } from '../model/trip';

@Component({
  selector: 'app-shopping-car',
  templateUrl: './shopping-car.component.html',
  styleUrls: ['./shopping-car.component.css']
})
export class ShoppingCarComponent implements OnInit {

  constructor(private data: DataService) {}

  basket: Trip[] = [];

  ngOnInit(): void {
    this.data.currentMessage2.subscribe(
      (message) => (this.basket = message)
    );
  }


}

