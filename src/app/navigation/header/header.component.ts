import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }
  @Output() sidenavToggle = new EventEmitter();

  ngOnInit(): void {}
  onToggleSidenav() {
    this.sidenavToggle.emit();
  }

}
