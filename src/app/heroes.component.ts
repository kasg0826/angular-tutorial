import { Component } from '@angular/core';
import {OnInit} from '@angular/core';

import {HeroService} from './hero.service';


export class Hero {
  id: number;
  name: string;
}


@Component({
  selector: 'my-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./app.component.css'],
  providers: [HeroService]
})
export class HeroesComponent implements OnInit{
  title = 'Tour of Heroes';
  heroes: Hero[];
  selectedHero: Hero;

  constructor(private heroService: HeroService) {}

  getHeroes(): void {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  ngOnInit(): void{
    this.getHeroes();
  }
}
