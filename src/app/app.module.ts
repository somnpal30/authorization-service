import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {environment} from '../environments/environment';
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import {AuthorizationEffect} from './store/effects/authorization.effect';
import {AuthorizationResolver} from './store/resolver/authorization.resolver';

import {AuthorizationProfileResolver} from './store/resolver/authorizationProfile.resolver';
import {FormsModule} from '@angular/forms';
import {ChannelResolver} from './store/resolver/channel.resolver';
import {LevelResolver} from './store/resolver/level.resolver';
import {applicationReducer} from './store/reducers/authorization-reducer.reducer';
import {CanDeactivateGuard} from './shared/utils/can-deactivate.guard';
import {CustomHttpInterceptor} from './shared/utils/CustomHttpInterceptor';

import {LoaderComponent} from './components/loader/loader.component';


@NgModule({
  declarations: [
    AppComponent,
    LoaderComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    AppRoutingModule,
    StoreModule.forRoot(applicationReducer),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    EffectsModule.forRoot([
      AuthorizationEffect,
    ]),


  ],
  providers: [
    AuthorizationResolver,
    AuthorizationProfileResolver,
    ChannelResolver,
    LevelResolver,
    CanDeactivateGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: CustomHttpInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}


