import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { TripsComponent } from './trips/trips.component';
import { NewTripComponent } from './new-trip/new-trip.component';
import {FormsModule} from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { ShoppingCarComponent } from './shopping-car/shopping-car.component';
import { FiltersComponent } from './filters/filters.component';
import { OneTripComponent } from './one-trip/one-trip.component'

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    TripsComponent,
    NewTripComponent,
    HomeComponent,
    ShoppingCarComponent,
    FiltersComponent,
    OneTripComponent
  ],
  imports: [
    RouterModule,
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
