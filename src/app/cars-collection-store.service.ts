import {Injectable} from '@angular/core';
import {Car} from './components/car-vacantion-test/car';
import {CarCardComponent} from './components/car-card/car-card.component';
import {Page1Component} from './components/page1/page1.component';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarsCollectionStoreService {
  cars: Car[];
  car$: Subject<Car> = new Subject<Car>();

  constructor() {
    let data;
    if (this.checkIfLocalStorageHasValueForCarsArray()) {
      data = this.getFromLocalStorage();
    } else {
      data = this.getFromServer();
    }

    this.cars = JSON.parse(data);
  }

  private getFromServer() {
    let data = '[{"title":"Mercedes","id":1,"price":10000,"popularity":4,"description":"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},{"title":"Audi","id":2,"price":8000,"popularity":2,"description":"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},{"title":"Renault","id":3,"price":5000,"popularity":5,"description":"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},{"title":"Bmw","id":5,"price":12000,"popularity":4,"description":"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},{"title":"Honda","id":7,"price":4000,"popularity":4,"description":"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},{"title":"Toyota","id":9,"price":4500,"popularity":4,"description":"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},{"title":"Alfa Romeo","id":10,"price":4500,"popularity":3,"description":"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},{"title":"Nissan","id":11,"price":5000,"popularity":3,"description":"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},{"title":"Peugeot","id":12,"price":5000,"popularity":2,"description":"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}]';
    this.saveToLocalStorage(data);
    return data;
  }

  putNewCarToPipe(car: Car) {
    this.car$.next(car);
  }

  private getFromLocalStorage() {
    return localStorage.getItem('cars');
  }

  private saveToLocalStorage(data) {
    localStorage.setItem('cars', data);
  }

  private checkIfLocalStorageHasValueForCarsArray() {
    let a = localStorage.getItem('cars');
    return a !== null;
  }
}

