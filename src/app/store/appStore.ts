import {WorkspaceDetails} from '../shared/model/workspace';
import {AuthorizationProfile} from '../shared/model/authorizationProfileList';

export interface AuthorizationState {
  workspaces: WorkspaceDetails[];
  isWorkspaceLoaded: boolean,
  //authorizationProfiles: AuthorizationProfile[]
}

export const initialAuthorizationState: AuthorizationState = {
  workspaces: [],
  isWorkspaceLoaded: false,
  //authorizationProfiles: []
};

export interface AuthorizationListState {
  authorizationProfiles: AuthorizationProfile[];
}

export const initialAuthorizationListState: AuthorizationListState = {
  authorizationProfiles: []
};
