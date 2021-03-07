import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthorizationListComponent } from './authorization-list.component';

const routes: Routes = [{ path: '', component: AuthorizationListComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthorizationListRoutingModule { }
