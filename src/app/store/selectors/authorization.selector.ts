import {createFeatureSelector, createSelector} from '@ngrx/store';
import {AuthorizationState} from '../states/authroization.state';
import {AuthorisationProfilesState} from '../states/authorizationList.state';


//export const selectAuthStateFeature = (state: ApplicationState) => state.authorizationState;
//export const selectAuthProfileStateFeature = (state: ApplicationState) => state.authorizationProfileList;


const getAuthState = createFeatureSelector<AuthorizationState>('users');
const getAuthProfileState = createFeatureSelector<AuthorisationProfilesState>('authProfiles');

export const getWorkspace = createSelector(getAuthState, state => {
  //debugger
  console.log('..........', state);
  return state.workspaces;
});

export const isDataLoaded = createSelector(getAuthState, state => state.loaded);

export const getAuthorizationProfile = createSelector(getAuthProfileState, state => {
  return state.authorizationProfiles;
});

