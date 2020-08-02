import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RecaptchaModule, RecaptchaFormsModule } from 'ng-recaptcha';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { HomeComponent } from './components/site/home/home.component';
import { EligibilityComponent } from './components/site/eligibility/eligibility.component';
import { CreateProfileComponent } from './components/site/create-profile/create-profile.component';
import { AccountModule } from './account/account.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    EligibilityComponent,
    CreateProfileComponent
  ],
  imports: [
    BrowserModule,
    AccountModule,
    AppRoutingModule,
    NgbModule,
    RecaptchaModule,
    RecaptchaFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
