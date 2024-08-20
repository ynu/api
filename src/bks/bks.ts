import axios from 'axios';
import {GetToken, getToken} from "../index";
import {filterNullParams} from "../util";
import {BksBasicQueryParams, BksBasicResult} from "./type/bks_basic";
import {BksListQueryParams, BksListResult} from "./type/bks_list";
import {BksFullQueryParams, BksFullResult} from "./type/bks_full";
import {DmQueryParams, DmResult} from "./type/bks_dm";

/**
 * 查询在校本科生名单
 */
export const getBksList = async (params: BksListQueryParams, options: GetToken): Promise<BksListResult[] | any> => {
    const token = await getToken(options);
    const res = await axios.get(`${options.host}/v1/bks/list_bks`, {
        headers: {
            Authorization: token,
        },
        params: filterNullParams(params)
    });
    return res.data.data;
}

/**
 * 查询在校本科生的基本信息
 */
export const getBksBasic = async (params: BksBasicQueryParams, options: GetToken): Promise<BksBasicResult[] | any> => {
    const token = await getToken(options);
    const queryString = params.xh?params.xh.map(item => `xh=${item}`).join('&'):'';
    const res = await axios.get(`${options.host}/v1/bks/basic_bks?${queryString}`, {
        headers: {
            Authorization: token,
        },
    });
    return res.data.data;
}

/**
 * 查询在校本科生的详细信息
 */
export const getBksFull = async (params: BksFullQueryParams, options: GetToken): Promise<BksFullResult[] | any> => {
    const token = await getToken(options);
    const queryString = params.xh?params.xh.map(item => `xh=${item}`).join('&'):'';
    const res = await axios.get(`${options.host}/v1/bks/full_bks?${queryString}`, {
        headers: {
            Authorization: token,
        },
    });
    return res.data.data;
}

/**
 * 获得本科生的组织机构代码
 */
export const getBksYxdm = async (params: DmQueryParams, options: GetToken): Promise<DmResult[] | any> => {
    const token = await getToken(options);
    const res = await axios.get(`${options.host}/v1/bks/dm_yxdm`, {
        headers: {
            Authorization: token,
        },
        params: filterNullParams(params),
    });
    return res.data.data;
}

