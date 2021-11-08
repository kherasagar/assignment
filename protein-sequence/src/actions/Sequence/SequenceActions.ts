import { Dispatch } from 'redux';
import { AppThunk } from '../../configureStore';
import { ActionTypes } from '../types';
import * as api from '../../api/ProteinSequenceApi';
import { Action } from 'redux';

export const fetchSequence = (seqIds: string[]): AppThunk => {
  return (dispatch: Dispatch) => {
    const requests = [];
    const _fetchCodingPolicies = (seqId: string) => {
      return api.fetchSequence(
        seqId
      ).then(response => {
        return response.data;
      });
    };

    for (let i=0; i< seqIds.length;i++) {
      requests.push(_fetchCodingPolicies(seqIds[i]));
    }

    return dispatch({
      type: ActionTypes.FETCH_SEQUENCE,
      payload: Promise.all(requests)
    });
  };
};

export interface FetchSequenceFulfilledAction extends Action<ActionTypes.FETCH_SEQUENCE_FULFILLED> {
  readonly payload: any;
}
export type FetchSequenceRejectedAction = Action<ActionTypes.FETCH_SEQUENCE_REJECTED>;
export type FetchSequencePendingAction = Action<ActionTypes.FETCH_SEQUENCE_PENDING>;

export type FetchSequenceAction =
  | FetchSequencePendingAction
  | FetchSequenceRejectedAction
  | FetchSequenceFulfilledAction;