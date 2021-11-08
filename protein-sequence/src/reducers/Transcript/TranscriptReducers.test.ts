import { transcriptReducer, TranscriptState } from './TranscriptReducers';
import { ActionTypes } from '../../actions/types';
import { okResponse } from '../../Utils/AxiosUtils';
import transcriptResponse from '../../Utils/transcript_data.json';

describe('TranscriptReducer', () => {
  const defaultState: TranscriptState = {
    data: [],
    loading: false,
    error: false
  };

  it('should handle FETCH_TRANSCRIPT_PENDING action', () => {
    const expectedState = {
      ...defaultState,
      data: [],
      loading: true,
      error: false
    };

    const actualState = transcriptReducer(defaultState, { type: ActionTypes.FETCH_TRANSCRIPT_PENDING });

    expect(actualState).toEqual(expectedState);
  });

  it('should handle FETCH_TRANSCRIPT_REJECTED action', () => {
    const expectedState = {
      ...defaultState,
      data: [],
      loading: false,
      error: true
    };

    const actualState = transcriptReducer(defaultState, { type: ActionTypes.FETCH_TRANSCRIPT_REJECTED });

    expect(actualState).toEqual(expectedState);
  });

  it('should handle FETCH_TRANSCRIPT_FULFILLED action', () => {
    const expectedState = {
      ...defaultState,
      data: transcriptResponse,
      loading: false,
      error: false
    };

    const actualState = transcriptReducer(defaultState, {
      type: ActionTypes.FETCH_TRANSCRIPT_FULFILLED,
      payload: okResponse(transcriptResponse)
    });

    expect(actualState).toEqual(expectedState);
  });
});
