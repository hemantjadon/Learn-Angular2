import { Component,OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroService } from '../services/hero.service';

@Component({
	selector: 'hero-list',
	templateUrl: "app/templates/hero-list.component.html",
	styleUrls: ["app/styles/hero-list.component.css"],
	directives: [
		HeroDetailComponent
	]
})

export class HeroListComponent implements OnInit{
	constructor(
		private heroService : HeroService
	){}
	
	ngOnInit(){
		this._getHeroes_SERVER();
		this._loadGAPI();
	}
	
	public heroes : Hero[];
	
	private _selectedHero : Hero = undefined;
	
	private _onSelect(hero : Hero) {
		this._selectedHero = hero;
	}
	
	private _getHeroes_PromiseType1() { //Simulating Ultra Fast Zero-Latency Server
		this.heroService.getHeroes_PromiseType1()
						.then((heroes) => { this.heroes = heroes; });
	}
	
	private _getHeroes_PromiseType2() { //Simulating Slower Server 2s delay
		this.heroService.getHeroes_PromiseType2()
						.then((heroes) => { this.heroes = heroes; });
	}
	
	private _loadGAPI() { //Loaded Script Successfully -> Also Understood The Concept of promise resolution
		this.heroService.loadGAPI().then(() => { 
											try{
												gapi
												console.log( gapi );
											} 
											catch (ReferenceError) {
												console.log("gapi is not defined");
											}
										})
									.catch((error : Event) => {
										console.log(error);
									});
	}
	
	public _getHeroes_SERVER() {
		this.heroService.getHeroes_SERVER().then((heroes) => { this.heroes = heroes });
	}
}