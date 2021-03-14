import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthorizationListComponent} from './authorization-list.component';
import {AuthorizationResolver} from '../../store/resolver/authorization.resolver';
import {AuthorizationListResolver} from '../../store/resolver/authorizationList.resolver';

const routes: Routes = [
  {
    path: ''
    , component: AuthorizationListComponent
    , resolve: {
      authorizationResolver: AuthorizationResolver,
      authorizationListResolver: AuthorizationListResolver
    }
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthorizationListRoutingModule {
}
