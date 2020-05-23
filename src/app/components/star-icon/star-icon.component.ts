import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-star-icon',
  templateUrl: './star-icon.component.html',
  styleUrls: ['./star-icon.component.css']
})
export class StarIconComponent implements OnInit {
  @Input() filled:boolean = true;
  private a: Set<unknown>;

  constructor() { }

  ngOnInit(): void {
    this.a = new Set();
  }

}
