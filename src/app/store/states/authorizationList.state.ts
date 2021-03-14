import {AuthorizationProfile} from '../../shared/model/authorizationProfileList';

export interface AuthroizationProfileListState {
  authorizationProfiles: AuthorizationProfile[]
}

export const intialAuthroizationProfile: AuthroizationProfileListState = {
  authorizationProfiles: []
};
