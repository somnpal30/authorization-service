import {AuthorizationProfile} from '../../shared/model/authorizationProfileList';

export interface AuthorizationProfilesState {
  authorizationProfiles: AuthorizationProfile[]
}

export const initialAuthroizationProfile: AuthorizationProfilesState = {
  authorizationProfiles: []
};
