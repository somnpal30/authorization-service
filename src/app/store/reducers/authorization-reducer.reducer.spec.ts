import {initialState, authorizationReducer} from './authorization-reducer.reducer';

describe('AuthorizationReducer Reducer', () => {
  describe('an unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as any;

      const result = authorizationReducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });
});
