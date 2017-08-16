
import { Routes } from '@angular/router'
import { HomeComponent } from '../Home/Home'
import { AboutComponent } from '../About/About'
import { NextRunComponent } from '../NextRun/NextRun'
import { AlertComponent } from '../Alert/Alert'
import { ErrorComponent } from '../Error/Error'
import { RouterModule } from '@angular/router';

export const appRoutes: Routes = [  
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'nextrun', component: NextRunComponent },
  { path: 'alert', component: AlertComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', component: ErrorComponent }
];

export const routing = RouterModule.forRoot(appRoutes);