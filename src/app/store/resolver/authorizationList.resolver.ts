import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {Store} from '@ngrx/store';
import {finalize, first, tap} from 'rxjs/operators';

import {Injectable} from '@angular/core';
import {initializeLoadAuthzListAction} from '../actions/authorization.action';

@Injectable()
export class AuthorizationListResolver implements Resolve<any> {
  loading = false;

  constructor(private store: Store<any>) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any {
    return this.store.pipe(
      tap(() => {
        if (!this.loading) {
          this.loading = true;
          this.store.dispatch(initializeLoadAuthzListAction());
        }
      }),
      first(),
      finalize(() => {
        this.loading = false;
      })
    );
  }

}
