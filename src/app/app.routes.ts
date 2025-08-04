import { AdminModule } from './pages/admin/admin.module';
import { Routes } from '@angular/router';
import { SearchComponent } from './pages/website/search/search.component';
import { BookflightComponent } from './pages/website/bookflight/bookflight.component';
import { MybookingsComponent } from './pages/website/mybookings/mybookings.component';

export const routes: Routes = [
  {
    path:'',
    redirectTo:'search',
    pathMatch:'full'
  },
  {
    path:'search',
    component:SearchComponent,
    title:'Seach Flights'
  },
  {
    path:'book-flights',
    component:BookflightComponent,
    title:'Book a Flight'
  },
  {
    path:'my-bookings',
    component:MybookingsComponent,
    title:'My Bookings'
  },
  {
    path:'admin',
    loadChildren:() => import('./pages/admin/admin.module').then(m => m.AdminModule)
  }
];
