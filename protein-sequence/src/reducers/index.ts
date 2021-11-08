import { combineReducers, Reducer } from 'redux';
import { SequenceState, sequenceReducer } from './Sequence/SequenceReducers';
import { TranscriptState, transcriptReducer } from './Transcript/TranscriptReducers';

export interface StoreState {
  sequence: SequenceState;
  transcript: TranscriptState
}

const rootReducer = (): Reducer<StoreState> => combineReducers<StoreState>({
  sequence: sequenceReducer,
  transcript: transcriptReducer
});

export default rootReducer;