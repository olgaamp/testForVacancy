import {Component} from '@angular/core';
import {CarsCollectionStoreService} from '../../cars-collection-store.service';
import {Car} from '../car-vacantion-test/car';

@Component({
  selector: 'app-car-card',
  templateUrl: './car-card.component.html',
  styleUrls: ['./car-card.component.css']
})
export class CarCardComponent {
  car1: string;
  service: CarsCollectionStoreService;

  constructor(service: CarsCollectionStoreService) {
    this.service = service;
    this.car1 = 'Cars1';
    service.subscribe(this);
  }

  onCarsChanged(componentToCall: any) {
    //TODO здесь плохо и странно. Надо разобраться почему не this
    let selectedCar = componentToCall.service.cars.find(function(car: Car) {
      return car.isSelected;
    });

    if (selectedCar !== undefined) {
      componentToCall.car1 = selectedCar.title;
    }
  }
}
