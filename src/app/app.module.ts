import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {AuthorizationProfileListComponent} from './view/authorization-profile-list/authorization-profile-list.component';
import {DataTableComponent} from './component/data-table/data-table.component';
import {FilterComponent} from './component/filter/filter.component';
import {ButtonModule} from 'primeng/button';
import {OverlayPanelModule} from 'primeng/overlaypanel';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {HttpClientModule} from "@angular/common/http";
import {DividerModule} from 'primeng/divider';
import {CheckboxModule} from 'primeng/checkbox';
import {TableModule} from 'primeng/table';
import {BadgeModule} from 'primeng/badge';
import {ScrollPanelModule} from 'primeng/scrollpanel';
import {RadioButtonModule} from 'primeng/radiobutton';
import {InputTextModule} from 'primeng/inputtext';
import {ListboxModule} from 'primeng/listbox';
import {FormsModule} from "@angular/forms";
import {AccordionModule} from 'primeng/accordion';
import {AddProfileComponent} from './view/add-profile/add-profile.component';
import {UserSelectionComponent} from './component/user-selection/user-selection.component';
import {SetProfileComponent} from './component/set-profile/set-profile.component';
import {AuthorizationComponent} from './component/authorization/authorization.component';

import {FilterPipe} from "./utils/FilterPipe";
import { FilterListComponent } from './component/filter-list/filter-list.component';
@NgModule({
  declarations: [
    AppComponent,
    AuthorizationProfileListComponent,
    DataTableComponent,
    FilterComponent,
    AddProfileComponent,
    UserSelectionComponent,
    SetProfileComponent,
    AuthorizationComponent,
    FilterPipe,
    FilterListComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ButtonModule,
    OverlayPanelModule,
    DividerModule,
    CheckboxModule,
    TableModule,
    BadgeModule,
    FormsModule,
    RadioButtonModule,
    InputTextModule,
    ScrollPanelModule,
    ListboxModule,
    AccordionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
