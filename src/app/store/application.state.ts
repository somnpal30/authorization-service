import {AuthorizationState} from './states/authroization.state';
import {AuthorizationProfilesState} from './states/authorizationList.state';
import * as ApplicationReducer from './reducers/authorization-reducer.reducer';

export interface ApplicationState {
  authorizationState: AuthorizationState,
  authorizationProfileList: AuthorizationProfilesState
}


export const applicationReducer = {
  users: ApplicationReducer.authorizationReducer,
  authProfiles: ApplicationReducer.authorizationProfilesReducer,
  attrib: ApplicationReducer.attibuteListReducer,
  moduleServices: ApplicationReducer.moduleServiceReducer
};

