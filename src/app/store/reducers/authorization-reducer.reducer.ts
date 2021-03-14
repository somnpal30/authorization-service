import {createReducer, on} from '@ngrx/store';
import {WorkspaceDetails} from '../../shared/model/workspace';
import * as AuthorizationAction from '../../store/actions/authorization.action';

export const authorizationReducerFeatureKey = 'authorizationReducer';

export interface AuthorizationState {
  workspaces: WorkspaceDetails[];
}

export const initialState: AuthorizationState = {
  workspaces: []
};


export const authorizationReducer = createReducer(
  initialState,
  on(AuthorizationAction.allUserLoaded, (state, action) => {
    return {
      ...state,
      workspaces: action.workspaces
    };
  })
);

