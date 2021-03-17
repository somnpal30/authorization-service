import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {AuthorizationProfileRoutingModule} from './authorization-profile-routing.module';
import {AuthorizationProfileComponent} from './authorization-profile.component';
import {UserSelectionComponent} from '../../components/user-selection/user-selection.component';
import {UiModule} from '../ui.module';
import {SetProfileComponent} from '../../components/set-profile/set-profile.component';
import {AuthorizationComponent} from '../../components/authorization/authorization.component';
import {FilterListComponent} from '../../components/filter-list/filter-list.component';
import {ServicePreferenceComponent} from '../../components/service-preference/service-preference.component';


@NgModule({
  declarations: [
    AuthorizationProfileComponent,
    UserSelectionComponent,
    SetProfileComponent,
    AuthorizationComponent,
    FilterListComponent,
    ServicePreferenceComponent],
  imports: [
    CommonModule,
    AuthorizationProfileRoutingModule,
    UiModule
  ]
})
export class AuthorizationProfileModule {
}
