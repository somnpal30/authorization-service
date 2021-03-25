import {createReducer, on} from '@ngrx/store';
import * as AuthorizationAction from '../../store/actions/authorization.action';
import {defaultServiceDetailState, initialAuthorizationProfileDetailState, initialAuthorizationState} from '../states/authroization.state';
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

export const attributeListReducer = createReducer(initialAttributeState,
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

export const serviceReducer = createReducer(
  defaultServiceDetailState,
  on(AuthorizationAction.levelAction, (state, action) => {
    console.log(AuthorizationAction.levelAction.type);
    return {
      ...state,
      levels: action.levels
    };
  }),
  on(AuthorizationAction.channelAction, (state, action) => {
    console.log(AuthorizationAction.channelAction.type);
    return {
      ...state,
      channels: action.channels

    };
  }),
);


export const applicationReducer = {
  users: authorizationReducer,
  authProfiles: authorizationProfilesReducer,
  attrib: attributeListReducer,
  moduleServices: moduleServiceReducer,
  services: serviceReducer,

};





