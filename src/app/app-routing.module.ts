import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';



const routes: Routes = [
  //{ path: 'add', component: AddContactComponent },
  //{ path: 'edit', component: EditContactComponent },
  //{ path: 'home', component: HomeContactComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
