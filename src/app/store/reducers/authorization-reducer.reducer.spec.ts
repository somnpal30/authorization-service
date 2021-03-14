import {authorizationReducer} from './authorization-reducer.reducer';
import {initialAuthorizationState} from '../appStore';

describe('AuthorizationReducer Reducer', () => {
  describe('an unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as any;

      const result = authorizationReducer(initialAuthorizationState, action);

      expect(result).toBe(initialAuthorizationState);
    });
  });
});
