import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/site/home/home.component';
import { EligibilityComponent } from './components/site/eligibility/eligibility.component';
import { CreateProfileComponent } from './components/site/create-profile/create-profile.component';



const routes: Routes = [
  {
    path: 'home', 
    component: HomeComponent
  },
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'check-eligibility',
    component: EligibilityComponent
  },
  {
    path: 'create-profile',
    component: CreateProfileComponent
  },
  { path: 'account', loadChildren: () => import('./account/account.module').then(m => m.AccountModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
