import { NowRequest, NowResponse } from '@vercel/node';

export default (request: NowRequest, response: NowResponse) =>
  response.status(200).json({ ok: true });