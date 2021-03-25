import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {finalize, first, tap} from 'rxjs/operators';
import {initialLevelAction} from '../actions/authorization.action';
import {Store} from '@ngrx/store';
import {Injectable} from '@angular/core';

@Injectable()
export class LevelResolver implements Resolve<any> {
  loading = false;

  constructor(private store: Store<any>) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any>  {
    //console.log('level resolver');
    return this.store.pipe(
      tap(() => {
        if (!this.loading) {
          this.loading = true;
          this.store.dispatch(initialLevelAction());
        }
      }),
      first(),
      finalize(() => {
        this.loading = false;
      })
    );
  }

}
