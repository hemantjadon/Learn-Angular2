import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router-deprecated';
import { Hero } from '../hero';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroService } from '../services/hero.service';

@Component({
	selector: 'hero-dashboard',
	templateUrl: "app/templates/hero-dashboard.component.html",
	styleUrls: ["app/styles/hero-dashboard.component.css"],
	directives: [
		HeroDetailComponent
	]
})
export class HeroDashboardComponent implements OnInit {
	constructor(
		private heroService : HeroService,
		private router : Router
	){}
	
	ngOnInit(){
		this._getHeroes_SERVER();
	}
	
	public heroes : Hero[];
	
	private _selectedHero : Hero = undefined;
	
	private _onSelect(hero : Hero) { //Deprecated Now We Call a different route for hero detail
		this._selectedHero = hero;
	}
	
	private _getHeroes_PromiseType1() { //Simulating Ultra Fast Zero-Latency Server
		this.heroService.getHeroes_PromiseType1()
						.then((heroes) => { this.heroes = heroes.slice(1,5); });
	}
	
	private _getHeroes_PromiseType2() { //Simulating Slower Server 2s delay
		this.heroService.getHeroes_PromiseType2()
						.then((heroes) => { this.heroes = heroes.slice(1,5); });
	}
	
	private _getHeroes_SERVER() {	//Getting data from JSON-Server
		this.heroService.getHeroes_SERVER().then((heroes)=>{ this.heroes = heroes.slice(1,5); });
	}
	
	private _goToDetail(hero : Hero) {
		let link = ['HeroDetail', {id: hero.id}];
		this.router.navigate(link);
	}
	
}