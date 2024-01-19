import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-topic',
  templateUrl: './topic.component.html',
  styleUrls: ['./topic.component.css'],
})
export class TopicComponent implements OnInit {
  itemsInBasket!: number;
  constructor(private data: DataService) {}

  ngOnInit(): void {
    this.data.currentMessage.subscribe(
      (message) => (this.itemsInBasket = message)
    );
  }

  click1() {
    this.itemsInBasket = 1;
    this.data.changeMessage(this.itemsInBasket);
  }

  click2() {
    this.itemsInBasket = 2;
    this.data.changeMessage(this.itemsInBasket);
  }

  click3() {
    this.itemsInBasket = 3;
    this.data.changeMessage(this.itemsInBasket);
  }
}
