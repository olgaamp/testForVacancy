import {Component, OnInit} from '@angular/core';
import {Car} from '../car-vacantion-test/car';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.css'],

})
export class Page1Component implements OnInit {
  carsArray: Car[];

  constructor() {
    let data = '[{"title":"Mercedes","id":1,"price":10000,"popularity":4,"description":"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},{"title":"Audi","id":2,"price":8000,"popularity":2,"description":"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},{"title":"Renault","id":3,"price":5000,"popularity":5,"description":"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},{"title":"Bmw","id":5,"price":12000,"popularity":4,"description":"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},{"title":"Honda","id":7,"price":4000,"popularity":4,"description":"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},{"title":"Toyota","id":9,"price":4500,"popularity":4,"description":"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},{"title":"Alfa Romeo","id":10,"price":4500,"popularity":3,"description":"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},{"title":"Nissan","id":11,"price":5000,"popularity":3,"description":"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},{"title":"Peugeot","id":12,"price":5000,"popularity":2,"description":"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}]';
    this.carsArray = JSON.parse(data);
    this.carsArray.sort(function(a, b) {
      if (a.title > b.title) {
        return -1;
      }
      if (a.title < b.title) {
        return 1;
      }
      if (a.title === b.title) {
        return 0;
      }

    });
  }

  ngOnInit(): void {
  }

}
