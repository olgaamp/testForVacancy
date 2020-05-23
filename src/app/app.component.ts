import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  /*page1IsVisible: boolean = true;

  onStep1IsSelectedChanged() {*/
  showPage1: boolean = true;

  onStep1IsSelected(value) {
    this.showPage1 = value;
    console.log('Приняли значение' + value);
  }
}

