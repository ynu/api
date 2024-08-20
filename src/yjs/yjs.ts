import axios from 'axios';
import {GetToken, getToken} from "../index";
import {filterNullParams} from "../util";
import {YjsBasicQueryParams, YjsBasicResult} from "./type/yjs_basic"; 
import {YjsListQueryParams, YjsListResult} from "./type/yjs_list";
import {YjsFullQueryParams, YjsFullResult} from "./type/yjs_full";
import {DmQueryParams, DmResult} from "./type/yjs_dm";

/**
 * 查询在校研究生名单
 */
export const getYjsList = async (params: YjsListQueryParams, options: GetToken): Promise<YjsListResult[] | any> => {
    const token = await getToken(options);
    const res = await axios.get(`${options.host}/v1/yjs/list_yjs`, {
        headers: {
            Authorization: token,
        },
        params: filterNullParams(params)
    });
    return res.data.data;
}

/**
 * 查询在校研究生的基本信息
 */
export const getYjsBasic = async (params: YjsBasicQueryParams, options: GetToken): Promise<YjsBasicResult[] | any> => {
    const token = await getToken(options);
    const queryString = params.xh?params.xh.map(item => `xh=${item}`).join('&'):'';
    const res = await axios.get(`${options.host}/v1/yjs/basic_yjs?${queryString}`, {
        headers: {
            Authorization: token,
        },
    });
    return res.data.data;
}

/**
 * 查询在校研究生的详细信息
 */
export const getYjsFull = async (params: YjsFullQueryParams, options: GetToken): Promise<YjsFullResult[] | any> => {
    const token = await getToken(options);
    const queryString = params.xh?params.xh.map(item => `xh=${item}`).join('&'):'';
    const res = await axios.get(`${options.host}/v1/yjs/full_yjs?${queryString}`, {
        headers: {
            Authorization: token,
        },
    });
    return res.data.data;
}

/**
 * 获得在校研究生的组织机构代码
 */
export const getYjsYxdm = async (params: DmQueryParams, options: GetToken): Promise<DmResult[] | any> => {
    const token = await getToken(options);
    const res = await axios.get(`${options.host}/v1/yjs/dm_yxdm`, {
        headers: {
            Authorization: token,
        },
        params: filterNullParams(params),
    });
    return res.data.data;
}

