import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Post } from 'src/app/posts/posts.component';

@Injectable({
  providedIn: 'root'
})
export class JSONPlaceholderService {

  constructor(private http: HttpClient) { }

  getPosts():Observable<any> {
    const url = "http://jsonplaceholder.typicode.com/posts";
    return this.http.get<any>(url);
  }

  getPhotos():Observable<any> {
    const url = "http://jsonplaceholder.typicode.com/photos";
    return this.http.get<any>(url);
  }

  getUrl(id: number):Observable<any> {
    const url = "http://jsonplaceholder.typicode.com/photos/" + id.toString();
    return this.http.get<any>(url);
  }
}
