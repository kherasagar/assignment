import { sequenceReducer, SequenceState } from './SequenceReducers';
import { ActionTypes } from '../../actions/types';
import { okResponse } from '../../Utils/AxiosUtils';
import sequenceResponse from '../../Utils/Sequence_data.json';

describe('SequenceReducer', () => {
  const defaultState: SequenceState = {
    data: [],
    loading: false,
    error: false
  };

  it('should handle FETCH_SEQUENCE_PENDING action', () => {
    const expectedState = {
      ...defaultState,
      data: [],
      loading: true,
      error: false
    };

    const actualState = sequenceReducer(defaultState, { type: ActionTypes.FETCH_SEQUENCE_PENDING });

    expect(actualState).toEqual(expectedState);
  });

  it('should handle FETCH_SEQUENCE_REJECTED action', () => {
    const expectedState = {
      ...defaultState,
      data: [],
      loading: false,
      error: true
    };

    const actualState = sequenceReducer(defaultState, { type: ActionTypes.FETCH_TRANSCRIPT_REJECTED });

    expect(actualState).toEqual(expectedState);
  });

  it('should handle FETCH_TRANSCRIPT_FULFILLED action', () => {
    const expectedState = {
      ...defaultState,
      data: sequenceResponse,
      loading: false,
      error: false
    };

    const actualState = sequenceReducer(defaultState, {
      type: ActionTypes.FETCH_SEQUENCE_FULFILLED,
      payload: okResponse(sequenceResponse)
    });

    expect(actualState).toEqual(expectedState);
  });
});
