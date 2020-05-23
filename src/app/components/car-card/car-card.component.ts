import {Component} from '@angular/core';
import {CarsCollectionStoreService} from '../../cars-collection-store.service';
import {Car} from '../car-vacantion-test/car';

@Component({
  selector: 'app-car-card',
  templateUrl: './car-card.component.html',
  styleUrls: ['./car-card.component.css']
})
export class CarCardComponent {
  car: Car;

  constructor(service: CarsCollectionStoreService) {
    let selectedCar = service.cars.find(x => x.isSelected);
    if (selectedCar === undefined) {
      this.car = service.cars[0];
    } else {
      this.car = selectedCar;
    }

    service.car$.subscribe(newCar => {
      this.car = newCar;
    });
  }
}
