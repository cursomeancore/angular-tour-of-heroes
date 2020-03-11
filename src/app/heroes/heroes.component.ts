import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  hero = 'Windstorm';

  // constructor de la clase
  constructor() { }

  // constructor del componente
  ngOnInit(): void {
  }

}
