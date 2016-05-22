import { Component } from '@angular/core';
import { Routes, Router, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from '@angular/router';

import { LoginComponent } from './+login';
import { DashboardComponent } from './+dashboard';

@Component({
  moduleId: module.id,
  selector: 'routing-example-app',
  templateUrl: 'routing-example.component.html',
  styleUrls: ['routing-example.component.css'],
  directives: [ROUTER_DIRECTIVES],
  providers: [ROUTER_PROVIDERS]
})
@Routes([
  {path: '/dashboard', component: DashboardComponent},
  {path: '/login', component: LoginComponent},
  {path: '*', component: LoginComponent}
])
export class RoutingExampleAppComponent {

	title = 'routing-example works!';

	constructor(private router: Router) {}

	ngOnInit() {
		let auth:string = localStorage.getItem('auth');
		if (auth === 'logged') {
			console.log("Logged");
	    	this.router.navigate(['/dashboard']);
	    }else{
	    	console.log("Not Logged");
	    	this.router.navigate(['/login']);
	    }
	}
}
