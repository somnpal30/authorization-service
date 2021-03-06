import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {RemoteDataService} from '../../shared/service/remote-data.service';
import {
  allUserLoaded,
  authorizationProfilesLoaded,
  channelAction,
  getModules,
  initialChannelAction,
  initializeGetModules,
  initializeLoadAuthorizationProfiles,
  initialLevelAction,
  levelAction,
  loadUsersType,
} from '../actions/authorization.action';
import {catchError, exhaustMap, map, mergeMap} from 'rxjs/operators';
import {EMPTY} from 'rxjs';
import {ATTRIBUTE_TYPE} from '../../shared/utils/application.util';

@Injectable()
export class AuthorizationEffect {

  constructor(private actions$: Actions, private remoteService: RemoteDataService) {
  }

  getUserTypes$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(loadUsersType),
      mergeMap((action) => {
        //console.log(action);
        return this.remoteService.loadWorkspaces().pipe(
          map((data) => {
              return allUserLoaded({workspaces: data, loaded: true});
            }
          ), catchError((e) => {
            console.error('unable to call remote api.', e);
            return EMPTY;
          })
        );
      }),
    );
  });


  getAuthorizationList$ = createEffect(() => {
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


  getModulesAndServices$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(initializeGetModules),
      exhaustMap((data) => {
        //console.log(data.category);
        return this.remoteService.loadModuleAndServiceDetails().pipe(
          map((value) => {
            return getModules({moduleAndService: value});
          })
        );
      })
    );
  });


  levelEffect$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(initialLevelAction),
      mergeMap((data) => {
        return this.remoteService.loadServices(ATTRIBUTE_TYPE.LEVEL).pipe(
          map(value => {
            console.log(value);
            return levelAction({levels: value.levels});
          })
        );
      })
    );
  });

  channelEffect$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(initialChannelAction),
      mergeMap((data) => {
        return this.remoteService.loadServices(ATTRIBUTE_TYPE.GATEWAY).pipe(
          map(value => {
            console.log(value);
            return channelAction({channels: value.channels});
          })
        );
      })
    );
  });

}


