import Client, { returnCodes, composeData } from 'ynu-ws-client';
import { wsToken, interfaces } from '../config';
import { SUCCESS, SERVER_FAILED } from 'nagu-validates';

const client = new Client(wsToken);

export const getZzjg = () => async (req, res) => {
  try {
    const result = await client.invoke(interfaces.zzjg, 1, 200, []);
    if (result.returnCode === returnCodes.SUCCESS) {
      res.send({ ret: SUCCESS, data: composeData(result.data) });
    } else if (result.returnCode === returnCodes.SUCCESS_WHITOUT_DATA) {
      res.send({ ret: SUCCESS, data: [] });
    } else {
      res.send({ ret: result.returnCode, msg: result.message });
    }
  } catch (e) {
    res.send({ ret: SERVER_FAILED, msg: e });
  }
};

export default getZzjg;
