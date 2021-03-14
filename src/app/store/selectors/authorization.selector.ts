import {createFeatureSelector, createSelector} from '@ngrx/store';
import {AuthorizationState} from '../states/authroization.state';




const getAuthState = createFeatureSelector<AuthorizationState>('users');

export const getWorkspace = createSelector(getAuthState, state => {
  console.log("..........",state);
  return state.workspaces;
});

export const isDataLoaded = createSelector(getAuthState,state => state.loaded);
