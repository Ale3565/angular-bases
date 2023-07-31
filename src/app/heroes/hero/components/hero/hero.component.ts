import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: '../../../hero/hero.component.html' ,
  styleUrls: ['../../../hero/hero.component.css'],
})
export class HeroComponent {
  public name: string = 'ironman';
  public realName: string = 'Tony';
  public age: number = 45;


  get capitalizedName():string {
    return this.name.toUpperCase();
  }

  getHeroDescription():string {
    return `${ this.name } - ${ this.age }`
  }

  changeHero(value: string):void {
      this.name = value;
  }

  changeAge(value: number):void {
    this.age = value;
  } 

}
