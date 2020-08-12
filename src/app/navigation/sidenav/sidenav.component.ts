import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  @Output() closesidenav = new EventEmitter<void>();
  constructor() { }

  ngOnInit(): void {
  }
  sidenavclose() {
    this.closesidenav.emit();
  }

}
