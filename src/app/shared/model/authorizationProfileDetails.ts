export declare module AuthorizationProfileDetail {

  export interface Attribute {
    attributeType: string;
    attributeValues: string[];
  }

  export interface Privilege {
    code: string;
    gatewayTypes: string[];
    attributes: Attribute[];
  }

  export interface Module {
    name: string;
    privileges: Privilege[];
  }

  export interface AuthorizationProfile {
    source: string;
    name: string;
    authorizationProfileCode: string;
    code: string;
    userType: string;
    modules: Module[];
  }

}

