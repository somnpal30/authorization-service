import {createFeatureSelector, createSelector} from '@ngrx/store';
import {AuthorizationState} from '../appStore';



const getAuthState = createFeatureSelector<AuthorizationState>('users');

export const getWorkspace = createSelector(getAuthState, state => {
  console.log("..........",state);
  return state.workspaces;
});
