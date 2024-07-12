import * as process from 'node:process';
import axios from 'axios';
import * as cache from "memory-cache";
import Debug from "debug";
const debug = Debug('api:debug');
const warn = Debug('api:warn');
export class ApiError extends Error {
  constructor (public code:number, message: string) {
    super(message);
    this.code = code;
  }
}

export type GetToken = {
  /**
   * 用于认证的KEY
   */
  key?: string,
  /**
   * 请求地址
   */
  host?: string,
}

/**
 * 获取token
 * @param {Object} options 其他参数
 *    - key api的key
 * @returns 获得的Token
 */
export const getToken = async (options: GetToken): Promise<string> => {
  const host = options.host || process.env.IDS_HOST;
  const key = options.key || process.env.IDS_KEY;
  if (!key) {
    throw new ApiError(-1, '必须的参数key或环境变量API_KEY未设置.')
  }
  const tokenCacheKey = `api-token::${key}`;
  let token = cache.get(tokenCacheKey);
  if (token) {
    return token;
  } else {
    const { data } = await axios.get<any>(`${host}/gen_token?key=${key}`)
    if (data.length && data.length > 0) {
      debug(`获取token成功::${data}`);
      // 过期时间为86400s, 过期时间减去30s, 防止token失效
      cache.put(tokenCacheKey, data, (86400*1000-30*1000));
      return data;
    }
    warn('获取token出错:', data);
    throw new ApiError(-1, data);
  }
}

export * as House from './house/house';
export * as Rs from './rs/rs';
export * as Bks from './bks/bks';
export * as Yjs from './yjs/yjs';
