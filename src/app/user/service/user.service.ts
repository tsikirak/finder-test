import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  getUser(): Observable<User> {
    return new Observable(observer=> {
      let username: string = '';
      if (localStorage.getItem('auth')) {
        username = JSON.parse(localStorage.getItem('auth') || '{}').username;

        const user: User = {userName: username }; 
        observer.next(user);
      } else {
        observer.error('pas de user connecte');
      }
      
    });
  }

  logout(): Observable<boolean> {
    return new Observable(observer => {
      localStorage.clear();
      observer.next(true);
    });
  }
}
