import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';
import { ContactListComponent } from './contact-list/contact-list.component';
import { ContactFormComponent } from './contact-list/contact-form/contact-form.component';
import { SingleContactComponent } from './contact-list/single-contact/single-contact.component';
import { AuthGuardService } from './services/auth-guard.service';
import { ErrorPageComponent } from './error-page/error-page.component';



const Routes: Routes = [
  { path: 'auth/signup', component: SignupComponent },
  { path: 'auth/signin', component: SigninComponent },
  { path: 'contacts', canActivate: [AuthGuardService], component: ContactListComponent },
  { path: 'contacts/new', canActivate: [AuthGuardService], component: ContactFormComponent },
  { path: 'contacts/view/:id', canActivate: [AuthGuardService], component: SingleContactComponent },
  { path: 'error-page', canActivate: [AuthGuardService], component: ErrorPageComponent },
  { path: '', redirectTo: 'contacts', pathMatch: 'full' },
  { path: '**', redirectTo: 'error-page' }
];

@NgModule({
  imports: [RouterModule.forRoot(Routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
