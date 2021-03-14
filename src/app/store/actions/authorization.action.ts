import {createAction, props} from '@ngrx/store';
import {AuthorizationState} from '../states/authroization.state';
import {AuthroizationProfileListState} from '../states/authorizationList.state';



export const loadUsersType = createAction('[Authorization List Page] Loading User Types');
export const allUserLoaded
  = createAction('[Authorization List Page] Loaded User Types', props<AuthorizationState>());

export const initializeLoadAuthzListAction = createAction('[Authorization List Page] Loading Authorization List');
export const loadAuthzList = createAction('[Authorization List Page] Loaded Authorization List', props<AuthroizationProfileListState>());


