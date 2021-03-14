import {WorkspaceDetails} from '../shared/model/workspace';

export interface AuthorizationState {
  workspaces: WorkspaceDetails[];
  loaded: boolean;
}

export const initialState: AuthorizationState = {
  workspaces: [],
  loaded: false
};
