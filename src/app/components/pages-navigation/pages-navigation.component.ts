import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-pages-navigation',
  templateUrl: './pages-navigation.component.html',
  styleUrls: ['./pages-navigation.component.css']

})
export class PagesNavigationComponent implements OnInit {
  step1IsSelected: boolean;
  @Output() onStep1IsSelectedChanged: EventEmitter<boolean> = new EventEmitter();

  constructor() {
  }

  ngOnInit(): void {
  }

  navigateToPage1() {
    console.log('Кликнули по Покажи страницу 1');
    this.step1IsSelected = true;
    console.log('Значение step1IsSelected: ' + this.step1IsSelected);
    this.onStep1IsSelectedChanged.emit(this.step1IsSelected);
    let elem = document.querySelector('.nav');
    elem.classList.toggle('line-red');
    elem.classList.toggle('line-red-old');
    // console.log(elem);

  }

  navigateToPage2() {
    console.log('Кликнули по Покажи страницу 2');
    this.step1IsSelected = false;
    console.log('Значение step1IsSelected: ' + this.step1IsSelected);
    this.onStep1IsSelectedChanged.emit(this.step1IsSelected);
    this.onStep1IsSelectedChanged.emit(this.step1IsSelected);
    let elem = document.querySelector('.nav2');
    elem.classList.toggle('line-gray');
    elem.classList.toggle('line-gray-old');
  }
}
