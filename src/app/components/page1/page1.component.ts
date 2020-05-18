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
  carsCollectionStoreStore: CarsCollectionStoreService;

  constructor(carsCollectionStoreStore: CarsCollectionStoreService) {
    this.carsCollectionStoreStore = carsCollectionStoreStore;
    this.filteredCarsArray = this.carsCollectionStoreStore.cars.sort(function(car1, car2) {
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
    this.carsCollectionStoreStore.cars.forEach(function(car) {
      car.isSelected = false;
    });

    car.isSelected = true;

    this.carsCollectionStoreStore.raiseCarsChangedEvent();

    this.filteredCarsArray = this.carsCollectionStoreStore.cars.filter(function(car) {
      return !car.isSelected;
    });
  }
}
