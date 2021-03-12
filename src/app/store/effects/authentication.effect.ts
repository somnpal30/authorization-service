import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {RemoteDataService} from '../../shared/service/remote-data.service';
import {allUserLoaded, loadUsersType} from '../actions/authorization.action';
import {concatMap, map} from 'rxjs/operators';

@Injectable()
export class AuthenticationEffect {

  constructor(private actions$: Actions, private remoteService: RemoteDataService) {
  }

  /*  loadUserTypes$ = createEffect(() => {
      return this.actions$.pipe(
        ofType(loadUsersType),
        concatMap((action) =>
          this.remoteDataService.loadWorkspace().pipe(map(workspace => {
            console.log('log 1 : ', workspace);
            return allUserLoaded({workspace});
          }))
        )
      );
    });*/

  getUserTypes$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(loadUsersType),
      concatMap((action) => {
        //console.log(action)
        return this.remoteService.loadWorkspace().pipe(
          map((data) => {
            //console.log(data);
            return allUserLoaded({workspace: data});
          })
        );
      })
    );
  });

}
