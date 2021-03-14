import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {select, Store} from '@ngrx/store';

import {finalize, first, tap} from 'rxjs/operators';
import {loadUsersType} from '../actions/authorization.action';
import {isDataLoaded} from '../selectors/authorization.selector';


@Injectable()
export class AuthorizationResolver implements Resolve<any> {

  loading = false;

  constructor(private store: Store<any>) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    return this.store.pipe(
      select(isDataLoaded),
      tap((loadingStatus ) => {
        console.log('workspaceLoaded ', loadingStatus);
        if (!this.loading && !loadingStatus) {
          this.loading = true;
          this.store.dispatch(loadUsersType());
        }

      }),
      first(),
      finalize(() => {
        this.loading = false;
        console.log('finalize');
      })
    );
  }

}
