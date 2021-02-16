export interface AuthorizationProfileList {
  authorizationProfiles: AuthorizationProfile[]
}

export interface AuthorizationProfile {
  code: string;
  name: string;
  categoryName: string;
  createdOn: string;
  createdBy: string;
  modifiedOn: string;
  modifiedBy: string;
  type: string;
}
