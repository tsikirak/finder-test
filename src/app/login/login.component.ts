import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  userName: any;
  mdp: any;
  login: any = {username: 'tsiky', mdp: '123456'};
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  preview() {
    if (this.userName && this.userName.toString().toLowerCase() === this.login.username && this.mdp && this.mdp.toString().toLowerCase() === this.login.mdp) {
      localStorage.setItem('auth',  `{ "username": "${this.login.username}" }` );
      this.router.navigate(['/']);
    }
  }
}
