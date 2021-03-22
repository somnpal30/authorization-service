import {createAction, props} from '@ngrx/store';
import {AuthorizationProfileDetailState, AuthorizationState, CategoryState} from '../states/authroization.state';
import {AuthorizationProfilesState} from '../states/authorizationList.state';
import {AttributeState} from '../states/attributeList.state';


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

export const initializeGetModules = createAction('[Authorization Profile] Loading Module and Services', props<CategoryState>());
export const getModules = createAction('[Authorization Profile] Loading Module and Services', props<AuthorizationProfileDetailState>());

