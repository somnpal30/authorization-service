import {createReducer, on} from '@ngrx/store';
import * as AuthorizationAction from '../../store/actions/authorization.action';
import {initialState} from '../appStore';

export const authorizationReducerFeatureKey = 'authorizationReducer';


export const authorizationReducer = createReducer(
  initialState,
  on(AuthorizationAction.allUserLoaded, (state, action) => {
    return {
      ...state,
      workspaces: action.workspaces,
      loaded: action.loaded
    };
  })
);

