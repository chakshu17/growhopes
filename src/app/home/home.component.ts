import {
  Component,
  OnInit,
  Output,
  EventEmitter,
} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor() {}


  ngOnInit(): void {}


  imageObject = [
    {
      image: 'assets/Images/home/etsy.jpeg',
      thumbImage: 'assets/Images/home/etsy.jpeg',
    },
    {
      image: 'assets/Images/home/girnar.jpeg',
      thumbImage: 'assets/Images/home/girnar.jpeg',
    },
    {
      image: 'assets/Images/home/tele.jpeg',
      thumbImage: 'assets/Images/home/tele.jpeg',
    },
  ];
}
