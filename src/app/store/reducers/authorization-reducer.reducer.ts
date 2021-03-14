import {createReducer, on} from '@ngrx/store';
import * as AuthorizationAction from '../../store/actions/authorization.action';
import {initialAuthorizationState} from '../states/authroization.state';


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

