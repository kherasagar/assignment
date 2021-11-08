import { Action } from '../../actions';
import { ActionTypes } from '../../actions/types';

export interface SequenceState {
  data: any;
  loading: boolean;
  error: boolean;
}

const initialState: SequenceState = {
  data: [],
  loading: false,
  error: false,
};

export const sequenceReducer = (state = initialState, action: Action): SequenceState => {
  switch (action.type) {
    case ActionTypes.FETCH_SEQUENCE_PENDING:
      return {
        ...state,
        data: [],
        loading: true,
        error: false,
      };
    case ActionTypes.FETCH_SEQUENCE_FULFILLED:
      return {
        ...state,
        data: [].concat(...action.payload),
        loading: false,
        error: false,
      };
    case ActionTypes.FETCH_SEQUENCE_REJECTED:
      return {
        ...state,
        data: [],
        loading: false,
        error: true,
      };
    default:
      return state;
  }
};