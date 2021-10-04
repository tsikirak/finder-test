import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Commentaire } from '../modele/commentaire';

@Injectable({
  providedIn: 'root'
})
export class CommentaireService {

  constructor(private httpClient: HttpClient) { }
  getComment() {
    return this.httpClient.get<Array<Commentaire>>('https://jsonplaceholder.typicode.com/comments/?postId=1');
  }
}
