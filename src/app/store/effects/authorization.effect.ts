import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {RemoteDataService} from '../../shared/service/remote-data.service';
import {
  allUserLoaded,
  authorizationProfilesLoaded,
  getModules,
  initializeGetModules,
  initializeLoadAuthorizationProfiles,
  loadUsersType
} from '../actions/authorization.action';
import {concatMap, exhaustMap, map} from 'rxjs/operators';
import {ModuleAndServices} from '../../shared/model/moduleAndServices';
import {AuthorizationProfileDetail} from '../../shared/model/authorizationProfileDetails';
import AuthorizationProfile = AuthorizationProfileDetail.AuthorizationProfile;

@Injectable()
export class AuthorizationEffect {

  constructor(private actions$: Actions, private remoteService: RemoteDataService) {
  }

  getUserTypes$ = createEffect(() => {
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
        console.log(data.category);
        return this.remoteService.loadModuleAndServiceDetails().pipe(
          map((value) => {
            return getModules({moduleAndService: value});
          })
        );
      })
    );
  });


}


