import { Component } from '@angular/core';
import { HeroListComponent } from './hero-list.component';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroService } from '../services/hero.service';

@Component({
	selector: 'my-app',
	templateUrl: "app/templates/app.component.html",
	styleUrls: ['app/styles/app.component.css'],
	directives: [HeroDetailComponent,HeroListComponent],
	providers: [HeroService]
})

export class AppComponent{
	private _title = "Tour Of Heroes";
}