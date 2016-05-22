import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'app-topbar',
  templateUrl: 'topbar.component.html',
  styleUrls: ['topbar.component.css'],
  directives: [ROUTER_DIRECTIVES]
})
export class TopbarComponent implements OnInit {

  constructor() {}

  ngOnInit() {
  }

}
