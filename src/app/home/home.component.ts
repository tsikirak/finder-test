import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user/model/user';
import { UserService } from '../user/service/user.service';
import { ImageService } from './service/image.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  images: any;
  user: User = {userName: ''};
  isConnected: boolean = false;
  constructor(private imageService: ImageService, private userService: UserService, private router: Router) {
    this.images = new Array;
    
  }

  ngOnInit(): void {
    [10,20,30].map((n: number) => {
      this.imageService.getImage(n).subscribe(res=> {
        this.images.push(res);
      });
    });
    this.userService.getUser().subscribe((res: User) => {
      this.user = res;
      this.isConnected = true;
      
    }, error => {
      this.isConnected = false;
      this.user = {userName: ''};
    }
    );
  }

  logout() {
    this.userService.logout().subscribe(res=> {
      this.router.navigate(['/login']);
    })
  }

}
