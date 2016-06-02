import { Injectable } from '@angular/core';
import { Http,Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';

@Injectable()
export class HeroService {
	
	constructor(
		private http : Http
	){}
	
	public getHeroes_PromiseType1() : Promise<Hero[]>{
		return Promise.resolve(HEROES);
	}
	
	public getHeroes_PromiseType2() : Promise<Hero[]>{
		return new Promise((resolve)=>{
			setTimeout(()=>{
				return resolve(HEROES);
			},100);
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
	
	public getHero(id : number) : Promise<Hero> {
		return new Promise<Hero>((resolve : Function, reject : Function)=>{
			let hero : Hero = undefined;
			
			for (var i = 0 ; i < HEROES.length; i++) {
				if (HEROES[i].id === id ) {
					hero = HEROES[i];
				}
			}
			
			resolve(hero);
		});
	}
	
	public getHeroes_SERVER() : Promise<Hero[]>{
		return this.http.get('http://localhost:3304/heroes')
						.toPromise()
						.then((response) => {return response.json()})
						.catch((error : Error) => { console.log( error.message ) });
	}
	
	public getHero_SERVER(id : number) : Promise<Hero>{
		return this.http.get('http://localhost:3304/heroes/'+id)
						.toPromise()
						.then((response)=>{ return response.json(); })
						.catch((error : Error) => { console.log(error.message); })
	}
	
	public postHero(hero : Hero) : Promise<Hero>{
		let headers = new Headers({
			'Content-Type' : 'application/json'
		});
		
		return this.http.post('http://localhost:3304/heroes',JSON.stringify(hero),{ headers : headers })
						.toPromise()
						.then((response) => { return response.json(); })
						.catch((error : Error) => { console.log( error.message ); });
	}
	
	public editHero(hero : Hero) : Promise<Hero> {
		let headers = new Headers({
			'Content-Type' : 'application/json'
		});
		
		return this.http.put('http://localhost:3304/heroes/'+hero.id,JSON.stringify(hero),{ headers : headers})
						.toPromise()
						.then((response) => (response.json()))
						.catch((error : Error) => { console.log(error.message); });
	}
	
	public deleteHero(hero : Hero) : Promise<void> {
		let headers = new Headers({
			'Content-Type' : 'application/json'
		});
		
		return this.http.delete('http://localhost:3304/heroes/'+hero.id,{ headers : headers })
						.toPromise()
						.then(() => {return ;})
						.catch((error : Error) => { console.log(error.message); })		
	}
	
	public saveHero(hero : Hero) : Promise<Hero>{
		if(hero.id){
			return this.editHero(hero);
		}
		else {
			return this.postHero(hero);
		}
	}
}