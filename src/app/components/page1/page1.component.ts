import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {Car} from '../car-vacantion-test/car';
import {CarsCollectionStoreService} from '../../cars-collection-store.service';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.css'],
})
export class Page1Component {
  filteredCarsArray: Car[];
  service: CarsCollectionStoreService;
  changeDetectorRef: ChangeDetectorRef;

  constructor(service: CarsCollectionStoreService, changeDetectorRef: ChangeDetectorRef) {
    this.service = service;
    this.changeDetectorRef = changeDetectorRef;

    this.refreshFilteredCarsArray();
  }

  refreshFilteredCarsArray() {
    this.filteredCarsArray = this.service.cars
      .filter(car => !car.isSelected)
      .sort((car1, car2) => {
        const car1Name = car1.title.toLowerCase();
        const car2Name = car2.title.toLowerCase();

        if (car1Name < car2Name) {
          return -1;
        }

        if (car1Name > car2Name) {
          return 1;
        }

        return 0;
      });
  }

  onSelectCarButtonClick(car: Car) {
    this.setAllCarsIsSelectedFalseExceptSelectedCar(car);

    this.service.putNewCarToPipe(car);
    this.refreshFilteredCarsArray();

    this.changeDetectorRef.detectChanges();
  }

  private setAllCarsIsSelectedFalseExceptSelectedCar(car: Car) {
    this.setAllCarsIsSelectedFalse();
    car.isSelected = true;
  }

  private setAllCarsIsSelectedFalse() {
    this.service.cars.forEach(car => car.isSelected = false);
  }
}
