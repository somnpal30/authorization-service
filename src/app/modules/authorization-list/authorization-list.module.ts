import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {AuthorizationListRoutingModule} from './authorization-list-routing.module';
import {AuthorizationListComponent} from './authorization-list.component';
import {FilterComponent} from '../../components/filter/filter.component';
import {UiModule} from '../ui.module';
import {DataTableComponent} from '../../components/data-table/data-table.component';
import {AuthorizationResolver} from '../../store/authorization.resolver';


@NgModule({
  declarations: [AuthorizationListComponent, FilterComponent, DataTableComponent],
  imports: [
    CommonModule,
    AuthorizationListRoutingModule,
    UiModule
  ],
  providers: [
    AuthorizationResolver
  ]
})
export class AuthorizationListModule {
}
