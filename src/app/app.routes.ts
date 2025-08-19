import { AdminModule } from './pages/admin/admin.module';
import { Routes } from '@angular/router';
import { SearchComponent } from './pages/website/search/search.component';
import { BookflightComponent } from './pages/website/bookflight/bookflight.component';
import { MybookingsComponent } from './pages/website/mybookings/mybookings.component';
import { WebsiteLayoutComponent } from './pages/website/website-layout/website-layout.component';
import { LoginComponent } from './pages/admin/login/login.component';
import { SignupComponent } from './pages/admin/signup/signup.component';
import { ResetpasswordComponent } from './pages/admin/resetpassword/resetpassword.component';

export const routes: Routes = [
  {
    path:'',
    redirectTo:'search',
    pathMatch:'full'
  },
  {
    path:'',
    component:WebsiteLayoutComponent,
    children:[

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
        }]
  },
  {
    path:'login',
    component:LoginComponent,
    title:'Login Page'
  },
  {
    path:'reset-passsword',
    component:ResetpasswordComponent,
    title:'Reset Password'
  },
  {
    path:'signup',
    component:SignupComponent,
    title:'Signup Page'
  },
  {
    path:'admin',
    loadChildren:() => import('./pages/admin/admin.module').then(m => m.AdminModule)
  }
];
