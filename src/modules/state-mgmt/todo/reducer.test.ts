import { reducer } from './reducer';
import { initialState } from './state';
import { actions } from './actions';
import { getTodo_1 } from '../../../test/entities';

describe('todo reducer', () => {
  it('should return state without mutations when no switch case matches', () => {
    expect(reducer(initialState, { type: null, payload: null })).toBe(initialState);
  });

  it('should return a new state ActionType.FETCH_LIST_SUCCESS', () => {
    const todo = getTodo_1();
    expect(reducer(undefined, actions.fetchListSuccess([todo]))).toEqual({ ...initialState, todoMap: { [todo._id]: todo } });
  });
});
