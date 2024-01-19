import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Ex5';

  info: any;
  brand!: string;
  model!: string;
  color!: string;
  
  colorPalette!: string[];

  colorVisibility = false;
  brandVisibility = false;
  modelVisibility = false;
  resumeVisibility = false;

  ngOnInit()
  {
    fetch('./assets/cars.json').then(resp => resp.json())
    .then(json => {
      this.info = json;
      this.brandVisibility = true;
    });
  }

  brandSelected(){
    this.colorVisibility = false;
    this.modelVisibility = true;
    this.resumeVisibility = false;
  }

  modelSelected(){
    this.colorVisibility = true;
    this.colorPalette = this.info[this.brand][this.model];
    this.resumeVisibility = false;
  }

  colorSelected(){
    this.resumeVisibility = true;
  }
}
