import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthorizationProfileComponent } from './authorization-profile.component';

const routes: Routes = [{ path: '', component: AuthorizationProfileComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthorizationProfileRoutingModule { }
