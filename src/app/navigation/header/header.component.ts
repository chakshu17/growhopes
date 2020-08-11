import { Component, OnInit, Output, EventEmitter, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }
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

}
