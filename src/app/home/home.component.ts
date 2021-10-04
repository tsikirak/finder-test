import { Component, OnInit } from '@angular/core';
import { ImageService } from './service/image.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  images: any;
  constructor(private imageService: ImageService) {
    this.images = new Array;
    
  }

  ngOnInit(): void {
    [10,20,30].map((n: number) => {
      this.imageService.getImage(n).subscribe(res=> {
        this.images.push(res);
        console.log(this.images);
      });
    });
  }

}
