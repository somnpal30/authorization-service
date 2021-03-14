import {createAction, props} from '@ngrx/store';
import {AuthorizationListState, AuthorizationState} from '../appStore';


export const loadUsersType = createAction('[Authorization List Page] Loading User Types');
export const allUserLoaded
  = createAction('[Authorization List Page] Loaded User Types', props<AuthorizationState>());


export const initializeLoadAuthzListAction = createAction('[Authorization List Page] Loading Authorization List');

export const loadAuthzList = createAction('[Authorization List Page] Loaded Authorization List', props<AuthorizationListState>());

