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
	
	ngOnInit() {
		let id : number = parseInt(this.routeParams.get('id'));
		this.heroService.getHero(id).then((hero : Hero) => { this.hero = hero; console.log(hero) });
	}
}