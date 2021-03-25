import {createAction, props} from '@ngrx/store';
import {AuthorizationProfileDetailState, AuthorizationState, CategoryState} from '../states/authroization.state';
import {AuthorizationProfilesState} from '../states/authorizationList.state';
import {AttributeState} from '../states/attributeList.state';
import {Attribute, ServiceDetails} from '../../shared/model/serviceDetails';


export const loadUsersType = createAction('[Authorization List Page] Loading User Types');
export const allUserLoaded
  = createAction('[Authorization List Page] Loaded User Types', props<AuthorizationState>());

export const initializeLoadAuthorizationProfiles
  = createAction('[Authorization List Page] Authorization List Loading');

export const authorizationProfilesLoaded
  = createAction('[Authorization List Page] Authorization List Loaded',
  props<AuthorizationProfilesState>());

export const setAttribute = createAction('[Service Preference] Set Selected Attribute',
  props<AttributeState>());

export const initializeGetModules = createAction('[Authorization Profile] Loading Module and Services',
  props<CategoryState>());

export const getModules = createAction('[Authorization Profile] Loading Module and Services',
  props<AuthorizationProfileDetailState>());

export const initialLevelAction = createAction('[Authorization Profile] Start Loading Levels')
export const initialChannelAction = createAction('[Authorization Profile] Start Loading Channels')

export const levelAction = createAction('[Authorization Profile] Levels Loaded',props<{ levels: Attribute[] }>())
export const channelAction = createAction('[Authorization Profile] Channels Loaded',props<{ channels: Attribute[] }>())
