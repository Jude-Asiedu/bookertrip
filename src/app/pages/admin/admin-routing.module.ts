import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AirportsComponent } from './airports/airports.component';
import { LayoutComponent } from './layout/layout.component';
import { AllFlightsComponent } from './all-flights/all-flights.component';
import { BookingsComponent } from './bookings/bookings.component';
import { CityComponent } from './city/city.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'admin',
    pathMatch:'full'
  },
  {
    path:'admin',
    component:LayoutComponent,
    children:[
      {
          path:'airports',
          component:AirportsComponent,
          title:'Airports'
      },
      {
          path:'all-flights',
          component:AllFlightsComponent,
          title:'All Flights'
      },
      {
          path:'all-bookings',
          component:BookingsComponent,
          title:'All Bookings'
      },
      {
          path:'city',
          component:CityComponent,
          title:'City'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
