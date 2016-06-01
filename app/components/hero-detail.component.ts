import { Component,Input } from '@angular/core';
import { Hero } from '../hero';

@Component({
	selector: "hero-detail",
	templateUrl: "app/templates/hero-detail.component.html",
	styleUrls: ["app/styles/hero-detail.component.css"],
})

export class HeroDetailComponent{
	@Input()
	private _selectedHero : Hero ;
}