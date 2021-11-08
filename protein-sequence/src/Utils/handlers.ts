import { rest } from 'msw';
import transcriptResponse from '../Utils/transcript_data.json';

export const handlers = [
  rest.get('lookup/symbol/homo_sapiens/BRAF?expand=1', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json(transcriptResponse)
    );
  }),
];