import {AuthorizationProfile} from '../../shared/model/authorizationProfileList';

export interface AuthorisationProfilesState {
  authorizationProfiles: AuthorizationProfile[] |undefined
}

export const initialAuthroisationProfile: AuthorisationProfilesState = {
  authorizationProfiles: undefined
};
