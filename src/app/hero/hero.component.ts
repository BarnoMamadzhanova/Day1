import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit{
  heroHeading: string = "WildWind";
  heroText: string = "Discover the World and create unforgettable experiences with WildWind";
  heroBtnText: string = "Learn more";
  heroBtnUrl: string = "#";

  
 constructor() { }

 ngOnInit(): void {
 }
}
