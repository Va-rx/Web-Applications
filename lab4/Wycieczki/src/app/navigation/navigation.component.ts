import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css'],
})
export class NavigationComponent {
  itemsInBasket!: number;

  constructor(private data: DataService) {}

  ngOnInit(): void {
    this.data.currentMessage.subscribe(
      (message) => (this.itemsInBasket = message)
    );
  }
}
