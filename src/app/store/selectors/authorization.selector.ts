import {createFeatureSelector, createSelector} from '@ngrx/store';
import {AuthorizationState} from '../reducers/authorization-reducer.reducer';


const getAuthState = createFeatureSelector<AuthorizationState>('users');

export const getWorkspace = createSelector(getAuthState, state => {
  return state.workspaces;
});

export const isWorkspaceLoaded = createSelector(getAuthState, state => {
  return state.isWorkspaceLoaded;
});
