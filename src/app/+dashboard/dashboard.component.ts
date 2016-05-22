import { Component, OnInit } from '@angular/core';
import { Routes, ROUTER_DIRECTIVES} from '@angular/router';

import { TopbarComponent } from '../topbar';

import { HomeComponent } from '../+home';
import { HelpComponent } from '../+help';
import { AboutComponent } from '../+about';

@Component({
  moduleId: module.id,
  selector: 'app-dashboard',
  templateUrl: 'dashboard.component.html',
  styleUrls: ['dashboard.component.css'],
  directives: [ROUTER_DIRECTIVES, TopbarComponent]
})
@Routes([
  {path: '', component: HomeComponent},
  {path: '/home', component: HomeComponent},
  {path: '/help', component: HelpComponent},
  {path: '/about', component: AboutComponent}
])
export class DashboardComponent implements OnInit {

  constructor() {}

  ngOnInit() {
  }

}
