import {createAction, props} from '@ngrx/store';
import {AuthorizationState} from '../states/authroization.state';



export const loadUsersType = createAction('[Authorization List Page] Loading User Types');
export const allUserLoaded
  = createAction('[Authorization List Page] Loaded User Types', props<AuthorizationState>());
