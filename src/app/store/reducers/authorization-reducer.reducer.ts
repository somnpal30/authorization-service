import {createReducer, on} from '@ngrx/store';
import * as AuthorizationAction from '../../store/actions/authorization.action';
import {initialAuthorizationState} from '../states/authroization.state';
import {intialAuthroizationProfile} from '../states/authorizationList.state';


export const authorizationReducerFeatureKey = 'authorizationReducer';


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
  intialAuthroizationProfile,
  on(AuthorizationAction.loadAuthzList, (state, action) => {
    console.log(action)
    return {
      ...state,
      authorizationProfiles: [...action.authorizationProfiles]
    };
  })
);
