import { returnCodes, composeData } from 'ynu-ws-client';
import { client, interfaces } from '../config';
import { SUCCESS, SERVER_FAILED } from 'nagu-validates';

// 时间范围内应还图书借阅信息查询
export const getYhtsByTimespan = (
  startTime,
  endTime,
  success = (result, req, res, next) => next(),
  fail = (err, req, res) => res.send(err),
) => async (req, res) => {
  try {
    const params = [{
      key: 'start_YHRQ',
      value: startTime,
    }, {
      key: 'end_YHRQ',
      value: endTime,
    }];
    const result = await client.invoke(interfaces.yhts_by_timespan, 1, 10, params);
    console.log(result);
    if (result.returnCode === returnCodes.SUCCESS) {
      console.log(result);
      // res.send({ ret: SUCCESS, data: composeData(result.data) });
    } else if (result.returnCode === returnCodes.SUCCESS_WHITOUT_DATA) {
      res.send({ ret: SUCCESS, data: [] });
    } else {
      res.send({ ret: result.returnCode, msg: result.message });
    }
  } catch (e) {
    res.send({ ret: SERVER_FAILED, msg: e });
  }
};

export default getYhtsByTimespan;
