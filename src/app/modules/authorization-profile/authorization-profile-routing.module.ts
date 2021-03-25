import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthorizationProfileComponent} from './authorization-profile.component';
import {AuthorizationResolver} from '../../store/resolver/authorization.resolver';
import {ChannelResolver} from '../../store/resolver/channel.resolver';
import {LevelResolver} from '../../store/resolver/level.resolver';

const routes: Routes = [
  {
    path: '',
    component: AuthorizationProfileComponent
    , resolve: {
      workspace: AuthorizationResolver,
      channel: ChannelResolver,
      level : LevelResolver
    }
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthorizationProfileRoutingModule {
}
