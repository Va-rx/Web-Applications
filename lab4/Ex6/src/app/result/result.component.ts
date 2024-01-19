import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css'],
})
export class ResultComponent implements OnInit {
  itemsInBasket!: number;
  constructor(private data: DataService) {}

  ngOnInit(): void {
    this.data.currentMessage.subscribe(
      (message) => (this.itemsInBasket = message)
    );
  }
}
