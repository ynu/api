/*
eslint-disable no-underscore-dangle
 */
import { expect } from 'chai';
import { getYhtsByTimespan } from '../src/middlewares/library';
import { createRequest, createResponse } from 'node-mocks-http';

describe('Standard Middlewares', () => {
  describe('getZzjg()', () => {
    it('正确获取数据', async () => {
      const req = createRequest();
      const res = createResponse();
      await getYhtsByTimespan(
        '2016-10-28 00:00:00',
        '2016-10-29 00:00:00',
        (result, req2, res2) => res2.send(result),
      )(req, res);
      // const result = res._getData();
      // console.log(result);
      // expect(result.ret).to.eql(SUCCESS);
      // expect(result.data.length).to.above(0);
    });
  });
});
