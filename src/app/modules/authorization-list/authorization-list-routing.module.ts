import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthorizationListComponent} from './authorization-list.component';
import {AuthorizationResolver} from '../../store/resolver/authorization.resolver';
import {AuthorizationProfileResolver} from '../../store/resolver/authorizationProfile.resolver';

const routes: Routes = [
  {
    path: ''
    , component: AuthorizationListComponent
    , resolve: {
      workspace: AuthorizationResolver,
      authProfile : AuthorizationProfileResolver
    }
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthorizationListRoutingModule {
}
