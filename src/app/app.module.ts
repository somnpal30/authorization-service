import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import {EntityDataModule} from '@ngrx/data';
import {entityConfig} from './entity-metadata';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {environment} from '../environments/environment';
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import {AuthorizationEffect} from './store/effects/authorization.effect';
import {AuthorizationResolver} from './store/resolver/authorization.resolver';
import {applicationReducer} from './store/application.state';


@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    EntityDataModule.forRoot(entityConfig),
    StoreModule.forRoot(applicationReducer),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    EffectsModule.forRoot([
      AuthorizationEffect
    ]),


  ],
  providers: [AuthorizationResolver],
  bootstrap: [AppComponent]
})
export class AppModule {
}
