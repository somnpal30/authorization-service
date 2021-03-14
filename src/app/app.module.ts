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
import {ActionReducer, MetaReducer, StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import * as Reducer from './store/reducers/authorization-reducer.reducer';
import {AuthenticationEffect} from './store/effects/authentication.effect';
import {AuthorizationResolver} from './store/resolver/authorization.resolver';
import {AuthorizationListResolver} from './store/resolver/authorizationList.resolver';

export const reducers = {
  users: Reducer.authorizationReducer,
  authzList: Reducer.authorizationListReducer
};

export function debug(reducer: ActionReducer<any>): ActionReducer<any> {
  return function(state, action) {
    if(environment.production){
      console.log('state', state);
      console.log('action', action);
    }


    return reducer(state, action);
  };
}

export const metaReducers: MetaReducer<any>[] = [debug];


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
    // StoreDevtoolsModule.instrument({maxAge: 25, logOnly: environment.production}),
    StoreModule.forRoot(reducers, {metaReducers}),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    EffectsModule.forRoot([
      AuthenticationEffect
    ]),


  ],
  providers: [AuthorizationResolver, AuthorizationListResolver],
  bootstrap: [AppComponent]
})
export class AppModule {
}

