import {createAction, props} from '@ngrx/store';
import {Workspace} from '../../shared/model/workspace';
import {AuthorizationState} from '../reducers/authorization-reducer.reducer';


export const loadUsersType = createAction('[Authorization List Page] Loading User Types');
export const allUserLoaded
  = createAction('[Authorization List Page] Loaded User Types', props<AuthorizationState>());
