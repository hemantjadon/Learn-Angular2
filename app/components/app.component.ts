import { Component } from '@angular/core';
import { HeroListComponent } from './hero-list.component';
import { HeroDetailComponent } from './hero-detail.component';

@Component({
	selector: 'my-app',
	templateUrl: "app/templates/app.component.html",
	styleUrls: ['app/styles/app.component.css'],
	directives: [HeroDetailComponent,HeroListComponent]
})

export class AppComponent{
	private _title = "Tour Of Heroes";
}