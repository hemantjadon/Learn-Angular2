import { Component } from '@angular/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';
import { HeroListComponent } from './hero-list.component';
import { HeroDashboardComponent } from './hero-dashboard.component';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroService } from '../services/hero.service';

@Component({
	selector: 'my-app',
	templateUrl: "app/templates/app.component.html",
	styleUrls: ['app/styles/app.component.css'],
	directives: [
		ROUTER_DIRECTIVES
	],
	providers: [
		HeroService,
		ROUTER_PROVIDERS
	]
})
@RouteConfig([
	{
		path: '/heroes',
		name: 'Heroes',
		component: HeroListComponent
	},
	{
		path: '/',
		name: 'Dashboard',
		component: HeroDashboardComponent
	},
	{
		path: '/detail/:id',
		name: 'HeroDetail',
		component: HeroDetailComponent
	}
])
export class AppComponent{
	private _title = "Tour Of Heroes";
}