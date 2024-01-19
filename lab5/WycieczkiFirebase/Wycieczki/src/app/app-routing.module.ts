import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TripsComponent } from './trips/trips.component';
import { NewTripComponent } from './new-trip/new-trip.component';
import { ShoppingCarComponent } from './shopping-car/shopping-car.component';
import { OneTripComponent } from './one-trip/one-trip.component';


const routes: Routes = [
  {path: 'trips', component: TripsComponent},
  {path: 'trips/:id', component: OneTripComponent},
  {path: 'new-trip', component: NewTripComponent},
  {path: 'shopping-car', component: ShoppingCarComponent},
  {path: '', component: HomeComponent}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }
