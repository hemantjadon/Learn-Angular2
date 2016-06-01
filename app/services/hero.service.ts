import { Injectable } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';

@Injectable()
export class HeroService {
	public getHeroes_PromiseType1() : Promise<Hero[]>{
		return Promise.resolve(HEROES);
	}
	
	public getHeroes_PromiseType2() : Promise<Hero[]>{
		return new Promise((resolve)=>{
			setTimeout(()=>{
				return resolve(HEROES);
			},2000);
		});
	}
	
	public loadGAPI() : Promise<void>{
		return new Promise<void>((resolve : Function, reject : Function)=>{
			let script = document.createElement("script");
			script.async = true;
			script.defer = true;
			script.type= "text/javascript";
			script.src = "https://apis.google.com/js/platform.js";
			
			//Resolve or Reject onload/onerror ===> Now that was simple ;) took 3 days to figure this out :D
			script.onload = ()=>{ resolve(); }
			script.onerror = (error: Event) => { reject(error); };
			
			document.head.appendChild(script);
		});
	}
}