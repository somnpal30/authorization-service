import {createReducer, on} from '@ngrx/store';
import * as AuthorizationAction from '../../store/actions/authorization.action';
import {initialAuthorizationListState, initialAuthorizationState} from '../appStore';

export const authorizationReducerFeatureKey = 'authorizationReducer';

export const authorizationReducer = createReducer(
  initialAuthorizationState,
  on(AuthorizationAction.allUserLoaded, (state, action) => {
   /* console.log(state)
    console.log(action)*/
    return {
      ...state,
      workspaces: action.workspaces,
      isWorkspaceLoaded: action.isWorkspaceLoaded,
     };
  }),
/*  on(AuthorizationAction.loadAuthzList, (state, action) => {
    return {
      ...state,
      workspaces:state.workspaces,
      isWorkspaceLoaded : state.isWorkspaceLoaded,
      authorizationProfiles: action.authorizationProfiles
    };
  })*/
);


export const authorizationListReducer = createReducer(
  initialAuthorizationListState,
  on(AuthorizationAction.loadAuthzList, (state, action) => {
    console.log(state)
     return {
      ...state,
      authorizationProfiles: action.authorizationProfiles
    };
  })
);

