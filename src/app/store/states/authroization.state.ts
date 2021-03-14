import {WorkspaceDetails} from '../../shared/model/workspace';

export interface AuthorizationState {
  workspaces: WorkspaceDetails[];
  loaded: boolean;
}

export const initialAuthorizationState: AuthorizationState = {
  workspaces: [],
  loaded: false
};

