import reduxMockStore from 'redux-mock-store';
import { middlewares } from '../configureStore';
import { ThunkDispatch } from 'redux-thunk';
import { Action } from '../actions';
import { StoreState } from '../reducers';

type DispatchExts = ThunkDispatch<StoreState, undefined, Action>;

// mock store supports full state or partial for ease in unit testing
export const mockStore = reduxMockStore<StoreState | Partial<StoreState>, DispatchExts>(middlewares);

export function assertActionsToBeExactly (
  actions: { type: string }[],
  expectedActionTypes: string[],
): void {
  const actionTypes = actions.map(obj => obj.type);
  expect(actionTypes).toStrictEqual(expectedActionTypes);
}