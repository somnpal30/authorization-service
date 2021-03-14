import {createFeatureSelector, createSelector} from '@ngrx/store';
import {AuthorizationListState, AuthorizationState} from '../appStore';


const getAuthState = createFeatureSelector<AuthorizationState>('users');
const getAuthListState = createFeatureSelector<AuthorizationListState>('authzList');

export const getWorkspace = createSelector(getAuthState, state => {
  return state.workspaces;
});

export const isWorkspaceLoaded = createSelector(getAuthState, state => {
  return state.isWorkspaceLoaded;
});

export const getAuthorizationList = createSelector(getAuthListState, state => {
  return state.authorizationProfiles;
});
