import { Component, OnInit } from '@angular/core';
import { JSONPlaceholderService } from 'src/services/jsonplaceholder.service'


@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit{

  photos: any[] = [];

  constructor(private JSONPlaceholder: JSONPlaceholderService) { }
  ngOnInit(): void {
    this.JSONPlaceholder.getPhotos().subscribe((data) => {
      this.photos = data;
    })
  }

}
