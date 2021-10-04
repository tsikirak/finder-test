import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  constructor(private httpClient: HttpClient) { }

  getImage(n: number) {
    return this.httpClient.get(`https://jsonplaceholder.typicode.com/photos/${n}`);
  }
}
