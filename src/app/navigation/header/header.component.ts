import { Component, OnInit, Output, EventEmitter } from '@angular/core';

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
  scroll(el: HTMLElement) {
    el.scrollIntoView({behavior: "smooth", block: "start", inline: "start"});
  }

}
