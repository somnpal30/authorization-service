import {createReducer, on} from '@ngrx/store';
import * as AuthorizationAction from '../../store/actions/authorization.action';
import {initialAuthorizationProfileDetailState, initialAuthorizationState} from '../states/authroization.state';
import {initialAuthroizationProfile} from '../states/authorizationList.state';
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
  initialAuthroizationProfile,
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
    console.log(action.attributes);
    console.log(action.attributeType);
    return {
      ...state,
      attributes: action.attributes,
      attributeType: action.attributeType
    };
  }));

export const moduleServiceReducer = createReducer(initialAuthorizationProfileDetailState,
  on(AuthorizationAction.getModules, (state, action) => {
    return {
      ...state,
      moduleAndService: action.moduleAndService
    };
  })
);



