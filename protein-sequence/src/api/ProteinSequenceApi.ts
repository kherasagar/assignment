import Api from './Api';

export const fetchSequence = (seqId: string) => {
  return Api.get(`/sequence/id/${seqId}`, {
    headers: {
      'Content-Type': 'application/json'
    }
  });
};

export const fetchTranscript = (gene: string) => {
  return Api.get(`lookup/symbol/homo_sapiens/${gene}?expand=1`, {
    headers: {
      'Content-Type': 'application/json'
    }
  });
};