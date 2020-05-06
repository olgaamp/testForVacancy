import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CarComponent } from './components/car/car.component';
import { CarVacantionTestComponent } from './components/car-vacantion-test/car-vacantion-test.component';
import { Page1Component } from './components/page1/page1.component';
import { Page2Component } from './components/page2/page2.component';
import { PagesNavigationComponent } from './components/pages-navigation/pages-navigation.component';
import { CarCardComponent } from './components/car-card/car-card.component';

@NgModule({
  declarations: [
    AppComponent,
    CarComponent,
    CarVacantionTestComponent,
    Page1Component,
    Page2Component,
    PagesNavigationComponent,
    CarCardComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
