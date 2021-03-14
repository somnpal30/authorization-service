import {WorkspaceDetails} from '../shared/model/workspace';

export interface AuthorizationState {
  workspaces: WorkspaceDetails[];
}

export const initialState: AuthorizationState = {
  workspaces: []
};
