import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {RemoteDataService} from '../../shared/service/remote-data.service';
import {allUserLoaded, initializeLoadAuthzListAction, loadAuthzList, loadUsersType} from '../actions/authorization.action';
import {concatMap, exhaustMap, map} from 'rxjs/operators';
import {State} from '@ngrx/store';

@Injectable()
export class AuthenticationEffect {

  constructor(private actions$: Actions, private remoteService: RemoteDataService, private state: State<any>) {
  }

  getWorkspaces$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(loadUsersType),
      concatMap((action) => {
        return this.remoteService.loadWorkspaces().pipe(
          map((data) => {
            return allUserLoaded({workspaces: data, isWorkspaceLoaded: true});
          })
        );
      })
    );
  });

  getAuthorizationList$ = createEffect(() => {

    return this.actions$.pipe(
      ofType(initializeLoadAuthzListAction),
      exhaustMap((action) => {
        return this.remoteService.loadAuthorizationProfiles().pipe(
          map((data) => {
            console.log(this.state)
            return loadAuthzList({authorizationProfiles: data});
          })
        );
      })
    );
  });

}
