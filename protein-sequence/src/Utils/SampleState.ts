import React from 'react';
import { StoreState } from '../reducers/index';
import { sampleSequenceResponse } from './SequenceData';
import { sampleTranscriptResponse } from './TranscriptData';

export const sampleState: Partial<StoreState> = {
    sequence: {
      data: sampleSequenceResponse,
      loading: false,
      error: false
    },
    transcript: {
      data: sampleTranscriptResponse,
      loading: false,
      error: false
    }
};