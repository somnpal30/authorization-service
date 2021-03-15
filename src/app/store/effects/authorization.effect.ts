import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {RemoteDataService} from '../../shared/service/remote-data.service';
import {
  allUserLoaded,
  authorizationProfilesLoaded,
  initializeLoadAuthorizationProfiles,
  loadUsersType
} from '../actions/authorization.action';
import {concatMap, exhaustMap, map} from 'rxjs/operators';

@Injectable()
export class AuthorizationEffect {

  constructor(private actions$: Actions, private remoteService: RemoteDataService) {
  }

  getUserTypes$ = createEffect(() => {
    console.log("1")
    return this.actions$.pipe(
      ofType(loadUsersType),
      concatMap(() => {
        return this.remoteService.loadWorkspaces().pipe(
          map((data) => {
            return allUserLoaded({workspaces: data, loaded: true});
          })
        );
      })
    );
  });
  getAuthorizationList$ = createEffect(() => {
    console.log('2');
    return this.actions$.pipe(
      ofType(initializeLoadAuthorizationProfiles),
      exhaustMap(() => {
        return this.remoteService.loadAuthorizationProfiles().pipe(
          map((data) => {
            return authorizationProfilesLoaded({authorizationProfiles: data});
          })
        );
      })
    );
  });
}
