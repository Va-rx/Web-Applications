import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TripsComponent } from './trips/trips.component';
import { NewTripComponent } from './new-trip/new-trip.component';
import { ShoppingCarComponent } from './shopping-car/shopping-car.component';
import { OneTripComponent } from './one-trip/one-trip.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { NotAuthGuard } from './not-auth.guard';
import { PanelComponent } from './panel/panel.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'sign-in', component: SignInComponent, canActivate: [NotAuthGuard]},
  {path: 'sign-up', component: SignUpComponent, canActivate: [NotAuthGuard]},
  {path: 'panel', component: PanelComponent, canActivate: [NotAuthGuard]},
  {path: 'trips', component: TripsComponent},
  {path: 'trips/:id', component: OneTripComponent},
  {path: 'new-trip', component: NewTripComponent, canActivate: [NotAuthGuard]},
  {path: 'shopping-car', component: ShoppingCarComponent},
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }
