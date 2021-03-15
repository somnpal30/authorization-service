import {AuthorizationProfile} from '../../shared/model/authorizationProfileList';

export interface AuthorisationProfilesState {
  authorizationProfiles: AuthorizationProfile[]
}

export const initialAuthroisationProfile: AuthorisationProfilesState = {
  authorizationProfiles: []
};
