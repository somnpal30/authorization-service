import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthorizationListComponent} from './authorization-list.component';
import {AuthorizationResolver} from '../../store/authorization.resolver';

const routes: Routes = [
  {
    path: ''
    , component: AuthorizationListComponent
    , resolve: {
      workspace: AuthorizationResolver
    }
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthorizationListRoutingModule {
}
