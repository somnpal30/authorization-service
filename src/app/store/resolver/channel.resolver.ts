import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';
import {Store} from '@ngrx/store';
import {finalize, first, tap} from 'rxjs/operators';
import {initialChannelAction} from '../actions/authorization.action';

@Injectable()
export class ChannelResolver implements Resolve<any> {
  loading = false;

  constructor(private store: Store<any>) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    //console.log('level resolver');
    return this.store.pipe(
      tap(() => {
        if (!this.loading) {
          this.loading = true;
          this.store.dispatch(initialChannelAction());
        }
      }),
      first(),
      finalize(() => {
        this.loading = false;
      })
    );
  }
}
