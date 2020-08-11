import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  HostListener,
} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor() {}

  @Output() sidenavToggle = new EventEmitter();

  onToggleSidenav() {
    this.sidenavToggle.emit;
  }
  ngOnInit(): void {}
  @HostListener('window:scroll', ['$event'])
  onWindowScroll(e) {
    let element = document.querySelector('  mat-toolbar');
    if (window.pageYOffset > element.clientHeight) {
      element.classList.add('  .active');
    } else {
      element.classList.remove('  .active');
    }
  }
  scroll(el: HTMLElement) {
    el.scrollIntoView();
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
