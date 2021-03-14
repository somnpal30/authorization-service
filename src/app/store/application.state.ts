import {AuthorizationState} from './states/authroization.state';
import {AuthroizationProfileListState} from './states/authorizationList.state';
import {authorizationProfilesReducer, authorizationReducer} from './reducers/authorization-reducer.reducer';

export interface ApplicationState {
  authorizationState: AuthorizationState,
  authorizationProfileList: AuthroizationProfileListState
}


export const applicationReducer = {
  users: authorizationReducer,
  authorizationProfiles: authorizationProfilesReducer
};
