import {AuthorizationState} from './states/authroization.state';
import {AuthorizationProfilesState} from './states/authorizationList.state';

export interface ApplicationState {
  authorizationState: AuthorizationState,
  authorizationProfileList: AuthorizationProfilesState
}



