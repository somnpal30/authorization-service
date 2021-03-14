import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {RemoteDataService} from '../../shared/service/remote-data.service';
import {allUserLoaded, loadUsersType} from '../actions/authorization.action';
import {concatMap, map} from 'rxjs/operators';

@Injectable()
export class AuthenticationEffect {

  constructor(private actions$: Actions, private remoteService: RemoteDataService) {
  }

  getUserTypes$ = createEffect(() => {
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

}
