import {createReducer, on} from '@ngrx/store';
import {Workspace} from '../../shared/model/workspace';
import * as AuthorizationAction from '../../store/actions/authorization.action';

export const authorizationReducerFeatureKey = 'authorizationReducer';

export interface AuthorizationState {
  workspace: Workspace | undefined;
}

export const initialState: AuthorizationState = {
  workspace: undefined
};


export const authorizationReducer = createReducer(
  initialState,
  on(AuthorizationAction.allUserLoaded, (state, action) => {
    return {
      ...state,
      workspace: action.workspace
    };
  })
);

