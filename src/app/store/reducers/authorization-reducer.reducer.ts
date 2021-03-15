import {createReducer, on} from '@ngrx/store';
import * as AuthorizationAction from '../../store/actions/authorization.action';
import {initialAuthorizationState} from '../states/authroization.state';
import {initialAuthroisationProfile} from '../states/authorizationList.state';





export const authorizationReducer = createReducer(
  initialAuthorizationState,
  on(AuthorizationAction.allUserLoaded, (state, action) => {
    return {
      ...state,
      workspaces: action.workspaces,
      loaded: action.loaded
    };
  })
);

export const authorizationProfilesReducer = createReducer(
  initialAuthroisationProfile,
  on(AuthorizationAction.authorizationProfilesLoaded, (state, action) => {
    debugger
    //console.log(state);
    //console.log(action);
    return {
      ...state,
      authorizationProfiles: action.authorizationProfiles
    };
  })
);



