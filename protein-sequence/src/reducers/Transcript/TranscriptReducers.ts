import { Action } from '../../actions';
import { ActionTypes } from '../../actions/types';

export interface TranscriptState {
  data: any;
  loading: boolean;
  error: boolean;
}

const initialState: TranscriptState = {
  data: [],
  loading: false,
  error: false,
};

export const transcriptReducer = (state = initialState, action: Action): TranscriptState => {
  switch (action.type) {
    case ActionTypes.FETCH_TRANSCRIPT_PENDING:
      return {
        ...state,
        data: [],
        loading: true,
        error: false,
      };
    case ActionTypes.FETCH_TRANSCRIPT_FULFILLED:
      return {
        ...state,
        data: action.payload.data,
        loading: false,
        error: false,
      };
    case ActionTypes.FETCH_TRANSCRIPT_REJECTED:
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