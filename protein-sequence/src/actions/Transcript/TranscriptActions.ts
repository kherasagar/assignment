import { Dispatch } from 'redux';
import { AppThunk } from '../../configureStore';
import { ActionTypes } from '../types';
import * as api from '../../api/ProteinSequenceApi';
import { AxiosResponse } from 'axios';
import { Action } from 'redux';

export const fetchTranscript = (gene: string): AppThunk => {
  return (dispatch: Dispatch) => {
    return dispatch({
      type: ActionTypes.FETCH_TRANSCRIPT,
      payload: api.fetchTranscript(gene)
    });
  };
};

export interface FetchTranscriptFulfilledAction extends Action<ActionTypes.FETCH_TRANSCRIPT_FULFILLED> {
  readonly payload: AxiosResponse;
}
export type FetchTranscriptRejectedAction = Action<ActionTypes.FETCH_TRANSCRIPT_REJECTED>;
export type FetchTranscriptPendingAction = Action<ActionTypes.FETCH_TRANSCRIPT_PENDING>;

export type FetchTranscriptAction =
  | FetchTranscriptPendingAction
  | FetchTranscriptRejectedAction
  | FetchTranscriptFulfilledAction;