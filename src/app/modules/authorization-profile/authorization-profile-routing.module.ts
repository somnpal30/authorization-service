import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthorizationProfileComponent} from './authorization-profile.component';
import {AuthorizationResolver} from '../../store/authorization.resolver';

const routes: Routes = [
  {
    path: '',
    component: AuthorizationProfileComponent
    , resolve: {
      workspace: AuthorizationResolver
    }
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthorizationProfileRoutingModule {
}
