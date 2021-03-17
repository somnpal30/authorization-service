import {AuthorizationState} from './states/authroization.state';
import {AuthorisationProfilesState} from './states/authorizationList.state';
import {attibuteListReducer, authorizationProfilesReducer, authorizationReducer} from './reducers/authorization-reducer.reducer';

export interface ApplicationState {
  authorizationState: AuthorizationState,
  authorizationProfileList: AuthorisationProfilesState
}


export const applicationReducer = {
  users: authorizationReducer,
  authProfiles: authorizationProfilesReducer,
  attrib: attibuteListReducer
};

