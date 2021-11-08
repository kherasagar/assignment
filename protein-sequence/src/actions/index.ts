import { FetchSequenceAction } from './Sequence/SequenceActions';
import { FetchTranscriptAction } from './Transcript/TranscriptActions';

export type Action =
    FetchSequenceAction |
    FetchTranscriptAction;
