import {createAction, props} from '@ngrx/store';
import {AuthorizationState} from '../appStore';


export const loadUsersType = createAction('[Authorization List Page] Loading User Types');
export const allUserLoaded
  = createAction('[Authorization List Page] Loaded User Types', props<AuthorizationState>());
