import {Component, OnInit} from '@angular/core';
import {Car} from './car';

@Component({
  selector: 'app-car-vacantion-test',
  templateUrl: './car-vacantion-test.component.html',
  styleUrls: ['./car-vacantion-test.component.css']
})
export class CarVacantionTestComponent implements OnInit {
  car: Car;

  constructor() {
  }

  ngOnInit(): void {
    this.car = {
      title: 'Mercedes',
      id: 1,
      price: 10000,
      popularity: 4,
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    };
  }

}

