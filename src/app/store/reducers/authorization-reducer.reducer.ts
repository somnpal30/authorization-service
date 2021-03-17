import {createReducer, on} from '@ngrx/store';
import * as AuthorizationAction from '../../store/actions/authorization.action';
import {initialAuthorizationState} from '../states/authroization.state';
import {initialAuthroisationProfile} from '../states/authorizationList.state';
import {initialAttributeState} from '../states/attributeList.state';


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
    //debugger
    //console.log(state);
    //console.log(action);
    return {
      ...state,
      authorizationProfiles: action.authorizationProfiles
    };
  })
);

export const attibuteListReducer = createReducer(initialAttributeState,
  on(AuthorizationAction.setAttribute, (state, action) => {
    console.log(action.attributes)
    console.log(action.attributeType)
    return {
      ...state,
      attributes: action.attributes,
      attributeType: action.attributeType
    };
  }));



