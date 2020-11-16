import { Component, OnInit } from '@angular/core';
import {NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'play-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
  providers: [NgbCarouselConfig]
})
export class CarouselComponent implements OnInit {
  // images = [1055, 194, 368].map((n) => `https://picsum.photos/id/${n}/900/500`);

  images: any = ['../../assets/img/top1.jpg', '../../assets/img/top2.jpg',
  '../../assets/img/top3.jpg', '../../assets/img/top4.jpg', '../../assets/img/top5.jpg'];



  ngOnInit(): void {
  }

}
