import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {Store} from '@ngrx/store';
import {AppStore} from './appStore';
import {finalize, first, tap} from 'rxjs/operators';
import {loadUsersType} from './actions/authorization.action';


@Injectable()
export class AuthorizationResolver implements Resolve<any> {

  loading = false;

  constructor(private store: Store<AppStore>) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    return this.store.pipe(
      tap(() => {
        if (!this.loading) {
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
