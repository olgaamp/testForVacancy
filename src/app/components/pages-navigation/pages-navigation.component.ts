import {Component, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-pages-navigation',
  templateUrl: './pages-navigation.component.html',
  styleUrls: ['./pages-navigation.component.css']
})
export class PagesNavigationComponent implements OnInit {
  @Output() step1IsSelected: boolean;

  constructor() {
  }

  ngOnInit(): void {
  }

  onStep1ButtonClick() {
    this.step1IsSelected = true;
  }

  onStep2ButtonClick() {
    this.step1IsSelected = false;
  }
}
