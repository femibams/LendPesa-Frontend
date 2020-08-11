import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AccountComponent } from './account.component';
import { GeneralComponent } from './general/general.component';
import { LoanApplicationComponent } from './loan-application/loan-application.component';
import { BusinessLoanApplicationComponent } from './business-loan-application/business-loan-application.component';

const routes: Routes = [
  { 
    path: 'general', 
    component: AccountComponent,
    children: [
      { path: '', component: GeneralComponent },
    ]
  },
  {
    path: 'application', 
    component: AccountComponent,
    children: [
      { path: '', component: LoanApplicationComponent }
    ] 
  },
  {
    path: 'business-application', 
    component: AccountComponent,
    children: [
      { path: '', component: BusinessLoanApplicationComponent }
    ] 
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountRoutingModule { }
