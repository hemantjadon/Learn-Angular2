import { Component } from '@angular/core';
import { Hero } from './hero';

@Component({
	selector: 'my-app',
	templateUrl: "app/templates/app.component.html",
	styleUrls: ['app/styles/app.component.css']
})

export class AppComponent{
	private _title = "Tour Of Heroes";
	
	public heroes = HEROES;
	
	private _selectedHero : Hero = undefined;
	
	private onSelect(hero : Hero) {
		this._selectedHero = hero;
	}
}

var HEROES : Hero[] = [
	{ "id": 11, "name": "Mr. Nice" },
	{ "id": 12, "name": "Narco" },
	{ "id": 13, "name": "Bombasto" },
	{ "id": 14, "name": "Celeritas" },
	{ "id": 15, "name": "Magneta" },
	{ "id": 16, "name": "RubberMan" },
	{ "id": 17, "name": "Dynama" },
	{ "id": 18, "name": "Dr IQ" },
	{ "id": 19, "name": "Magma" },
	{ "id": 20, "name": "Tornado" }
]