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

  @Output() sidenavToggle = new EventEmitter<void>();

  onToggleSidenav() {
    this.sidenavToggle.emit;
  }
  ngOnInit(): void {}

  scroll(el: HTMLElement) {
    el.scrollIntoView({behavior: "smooth", block: "start", inline: "start"});
  }
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
