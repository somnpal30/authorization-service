import {createFeatureSelector, createSelector} from '@ngrx/store';
import {AuthorizationProfileDetailState, AuthorizationState,} from '../states/authroization.state';
import {AuthorizationProfilesState} from '../states/authorizationList.state';


//export const selectAuthStateFeature = (state: ApplicationState) => state.authorizationState;
//export const selectAuthProfileStateFeature = (state: ApplicationState) => state.authorizationProfileList;


const getAuthState = createFeatureSelector<AuthorizationState>('users');
const getAuthProfileState = createFeatureSelector<AuthorizationProfilesState>('authProfiles');
const getModuleServiceState = createFeatureSelector<AuthorizationProfileDetailState>('moduleServices');

export const getWorkspace = createSelector(getAuthState, state => {
  //debugger
  console.log('..........', state);
  return state.workspaces;
});

export const isDataLoaded = createSelector(getAuthState, state => state.loaded);

export const getAuthorizationProfile = createSelector(getAuthProfileState, state => {
  return state.authorizationProfiles;
});

export const getModuleServiceSelector = createSelector(getModuleServiceState, state => state.moduleAndService);

