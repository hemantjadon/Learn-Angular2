import { Component,Input,OnInit } from '@angular/core';
import { RouteParams } from '@angular/router-deprecated';
import { Hero } from '../hero';
import { HeroService } from '../services/hero.service';

@Component({
	selector: "hero-detail",
	templateUrl: "app/templates/hero-detail.component.html",
	styleUrls: ["app/styles/hero-detail.component.css"],
})

export class HeroDetailComponent implements OnInit{
	constructor(
		private heroService : HeroService,
		private routeParams : RouteParams
	) {}
	
	@Input()
	private hero : Hero ;
	
	private _navigated : boolean = false;
	
	ngOnInit() {
		let id : number = parseInt(this.routeParams.get('id'));
		if( !isNaN(id) ) {
			this._navigated = true;
			this.heroService.getHero_SERVER(id).then((hero : Hero) => { this.hero = hero; console.log(hero) });	
		}
		
		else {
			if(!this.hero){
				this.hero = new Hero();	
			}
		}
	}
	
	private _saveHero(hero : Hero){
		this.heroService.saveHero(this.hero)
						.then((hero) => { this.hero = hero })
						.catch((error : Error) => { console.log(error.message); });
	}
	
	private _goBack(savedHero : Hero = null){
		if (this._navigated) { window.history.back(); }
	}
}