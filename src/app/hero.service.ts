import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor() { }

  getHeroes(): Observable<Hero[]> {
    return of(HEROES);
  }
}

/*
// creación de observable
const observable = new Observable<string>((observer) => {
  observer.next('hola');
  observer.next('hola');
  //observer.error('Se ha producido un error');

  setInterval(() => {
    observer.next('hola');
  }, 1000);

  observer.next('hola');
  observer.complete();
  // observer.error('hola');
});

// uso del observable
const suscriptor = observable.subscribe((datos: string) => {
// next

  console.log(datos);
}, (err) => {
// error
  console.log(err);
  

} , () => {
  // complete
  console.log('Ya no ha más datos que recibir');
});

setTimeout(() => {
  suscriptor.unsubscribe();
  
}, 5000);

*/