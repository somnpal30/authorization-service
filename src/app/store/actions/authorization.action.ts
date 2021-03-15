import {createAction, props} from '@ngrx/store';
import {AuthorizationState} from '../states/authroization.state';
import {AuthorisationProfilesState} from '../states/authorizationList.state';


export const loadUsersType = createAction('[Authorization List Page] Loading User Types');
export const allUserLoaded
  = createAction('[Authorization List Page] Loaded User Types', props<AuthorizationState>());

export const initializeLoadAuthorizationProfiles
  = createAction('[Authorization List Page] Authorization List Loading');

export const authorizationProfilesLoaded
  = createAction('[Authorization List Page] Authorization List Loaded',
  props<AuthorisationProfilesState>());


