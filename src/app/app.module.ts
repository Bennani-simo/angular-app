import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';
import { ContactListComponent } from './contact-list/contact-list.component';
import { SingleContactComponent } from './contact-list/single-contact/single-contact.component';
import { ContactFormComponent } from './contact-list/contact-form/contact-form.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AuthService } from './services/auth.service';
import { ContactService } from './services/contact.service';
import { AuthGuardService } from './services/auth-guard.service';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    SigninComponent,
    ContactListComponent,
    SingleContactComponent,
    ContactFormComponent,
    NavbarComponent,
  ],
  imports: [
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule

  ],
  providers: [
    AuthService,
    ContactService,
    AuthGuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
