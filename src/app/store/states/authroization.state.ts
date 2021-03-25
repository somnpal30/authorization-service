import {WorkspaceDetails} from '../../shared/model/workspace';
import {ModuleAndServices} from '../../shared/model/moduleAndServices';
import {Attribute, ServiceDetails} from '../../shared/model/serviceDetails';


export interface AuthorizationState {
  workspaces: WorkspaceDetails[];
  loaded: boolean;
}

export const initialAuthorizationState: AuthorizationState = {
  workspaces: [],
  loaded: false
};

export interface CategoryState {
  category: string;
}

export const initialCategoryState: CategoryState = {
  category: ''
};

export interface AuthorizationProfileDetailState {
  moduleAndService: ModuleAndServices | undefined;
}

export const initialAuthorizationProfileDetailState: AuthorizationProfileDetailState = {
  moduleAndService: undefined
};



export const defaultServiceDetailState: ServiceDetails = {
  channels: [],
  levels: []
};
