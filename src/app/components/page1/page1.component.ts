import {Component, OnInit} from '@angular/core';
import {Car} from '../car-vacantion-test/car';
import {CarsCollectionStoreService} from '../../cars-collection-store.service';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.css'],
})
export class Page1Component implements OnInit {
  filteredCarsArray: Car[];
  service: CarsCollectionStoreService;

  constructor(service: CarsCollectionStoreService) {
    this.service = service;
    this.filteredCarsArray = this.service.cars.sort(function(car1, car2) {
      let car1Name = car1.title.toLowerCase();
      let car2Name = car2.title.toLowerCase();

      if (car1Name < car2Name) {
        return -1;
      }

      if (car1Name > car2Name) {
        return 1;
      }

      return 0;

    });
  }

  ngOnInit(): void {
  }

  onSelectCarButtonClick(car: Car) {
    this.setAllCarsIsSelectedFalseExceptSelectedCar(car);

    this.service.putNewCarToPipe(car);
    this.hideRowWithIsSelectedEqualsTrue();
  }

  private setAllCarsIsSelectedFalseExceptSelectedCar(car: Car) {
    this.setAllCarsIsSelectedFalse();
    car.isSelected = true;
  }

  private setAllCarsIsSelectedFalse() {
    this.service.cars.forEach(function(car) {
      car.isSelected = false;
    });
  }

  hideRowWithIsSelectedEqualsTrue() {
    this.filteredCarsArray = this.service.cars.filter(function(car) {
      return !car.isSelected;
    });
  }
}
