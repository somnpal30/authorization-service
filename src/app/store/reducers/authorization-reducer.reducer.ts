import {createReducer, on} from '@ngrx/store';
import {WorkspaceDetails} from '../../shared/model/workspace';
import * as AuthorizationAction from '../../store/actions/authorization.action';

export const authorizationReducerFeatureKey = 'authorizationReducer';

export interface AuthorizationState {
  workspaces: WorkspaceDetails[];
  isWorkspaceLoaded: boolean
}

export const initialState: AuthorizationState = {
  workspaces: [],
  isWorkspaceLoaded: false
};


export const authorizationReducer = createReducer(
  initialState,
  on(AuthorizationAction.allUserLoaded, (state, action) => {
    return {
      ...state,
      workspaces: action.workspaces,
      isWorkspaceLoaded: action.isWorkspaceLoaded
    };
  })
);

