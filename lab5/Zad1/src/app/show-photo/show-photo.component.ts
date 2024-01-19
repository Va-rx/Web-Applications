import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JSONPlaceholderService } from 'src/services/jsonplaceholder.service'


@Component({
  selector: 'app-show-photo',
  templateUrl: './show-photo.component.html',
  styleUrls: ['./show-photo.component.css']
})
export class ShowPhotoComponent implements OnInit {

  id!: number;
  constructor(private route: ActivatedRoute, private JSONPlaceholder: JSONPlaceholderService) { }

  url: string = ""

  ngOnInit(): void {
    this.route.params.subscribe((parameter) => {
      this.id = parameter['id'];
    })
    this.JSONPlaceholder.getUrl(this.id).subscribe((resp) => {
      this.url = resp.url
    })
  }
}
