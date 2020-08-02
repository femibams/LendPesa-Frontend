import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';

import { AccountRoutingModule } from './account-routing.module';
import { AccountComponent } from './account.component';
import { GeneralComponent } from './general/general.component';
import { LoanApplicationComponent } from './loan-application/loan-application.component';


@NgModule({
  declarations: [AccountComponent, GeneralComponent, LoanApplicationComponent],
  imports: [
    CommonModule,
    AccountRoutingModule,
    NgbModule,
    FormsModule
  ],
  exports: [GeneralComponent],
  bootstrap: [GeneralComponent]
})
export class AccountModule { }
