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
import { OneTripComponent } from './one-trip/one-trip.component';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from './environments/environment';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { AuthService } from './auth.service';
import { PanelComponent } from './panel/panel.component';


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    TripsComponent,
    NewTripComponent,
    HomeComponent,
    ShoppingCarComponent,
    FiltersComponent,
    OneTripComponent,
    SignInComponent,
    SignUpComponent,
    PanelComponent
  ],
  imports: [
    RouterModule,
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
