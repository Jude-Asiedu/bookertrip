import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AirportsComponent } from './airports/airports.component';

const routes: Routes = [


  {
    path:'',
    redirectTo:'planes',
    pathMatch:'full'
  },
  {
    path:'planes',
    component:AirportsComponent,
    title:'Airports'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
