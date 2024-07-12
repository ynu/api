import axios from 'axios';
import Debug from 'debug';
import {GetToken, getToken} from "../index";
import {filterNullParams} from "../util";
import {JzgListQueryParams, JzgListResult} from "./type/jzg_list";
import {JzgDetailQueryParams, JzgDetailResult, JzgFullDetailResult} from "./type/jzg_detail";
import {DmQueryParams, DmResult, DmDqztdmResult} from "./type/dm";
import {XpxgListQueryParams, XpxgListResult} from "./type/xpxg_list";

const debug = Debug('ids::debug');

/**
 * 教职工列表查询
 */
export const getJzgList = async (params: JzgListQueryParams, options: GetToken): Promise<JzgListResult[] | any> => {
    const token = await getToken(options);
    const res = await axios.get(`${options.host}/v1/rs/list_jzg`, {
        headers: {
            Authorization: token,
        },
        params: filterNullParams(params)
    });
    return res.data.data;
}

/**
 * 教职工详情查询
 */
export const getJzgDetail = async (params: JzgDetailQueryParams, options: GetToken): Promise<JzgDetailResult[] | any> => {
    const token = await getToken(options);
    const queryString = params.zgh?params.zgh.map(item => `zgh=${item}`).join('&'):'';
    const res = await axios.get(`${options.host}/v1/rs/detail_jzg?${queryString}`, {
        headers: {
            Authorization: token,
        },
    });
    return res.data.data;
}

/**
 * 教职工详情查询-全字段
 */
export const getJzgFullDetail = async (params: JzgDetailQueryParams, options: GetToken): Promise<JzgFullDetailResult[] | any> => {
    const token = await getToken(options);
    const queryString = params.zgh?params.zgh.map(item => `zgh=${item}`).join('&'):'';
    const res = await axios.get(`${options.host}/v1/rs/full_jzg?${queryString}`, {
        headers: {
            Authorization: token,
        },
    });
    return res.data.data;
}

/**
 * 获得人事系统民族代码
 */
export const getMzdm = async (params: DmQueryParams, options: GetToken): Promise<DmResult[] | any> => {
    const token = await getToken(options);
    const res = await axios.get(`${options.host}/v1/rs/dm_mzdm`, {
        headers: {
            Authorization: token,
        },
        params: filterNullParams(params),
    });
    return res.data.data;
}

/**
 * 获得人事系统政治面貌代码
 */
export const getZzmmdm = async (params: DmQueryParams, options: GetToken): Promise<DmResult[] | any> => {
    const token = await getToken(options);
    const res = await axios.get(`${options.host}/v1/rs/dm_zzmmdm`, {
        headers: {
            Authorization: token,
        },
        params: filterNullParams(params),
    });
    return res.data.data;
}

/**
 * 获得人事系统组织机构代码
 */
export const getYxdm = async (params: DmQueryParams, options: GetToken): Promise<DmResult[] | any> => {
    const token = await getToken(options);
    const res = await axios.get(`${options.host}/v1/rs/dm_yxdm`, {
        headers: {
            Authorization: token,
        },
        params: filterNullParams(params),
    });
    return res.data.data;
}

/**
 * 获得人事教职工当前状态代码
 */
export const getDqztdm = async (params: DmQueryParams, options: GetToken): Promise<DmResult[] | any> => {
    const token = await getToken(options);
    const res = await axios.get(`${options.host}/v1/rs/dm_dqztdm`, {
        headers: {
            Authorization: token,
        },
        params: filterNullParams(params),
    });
    return res.data.data;
}

/**
 * 获得人事系统用人方式代码
 */
export const getYrfsdm = async (params: DmQueryParams, options: GetToken): Promise<DmResult[] | any> => {
    const token = await getToken(options);
    const res = await axios.get(`${options.host}/v1/rs/dm_yrfsdm`, {
        headers: {
            Authorization: token,
        },
        params: filterNullParams(params),
    });
    return res.data.data;
}

/**
 * 获得人事系统学历代码
 */
export const getXldm = async (params: DmQueryParams, options: GetToken): Promise<DmResult[] | any> => {
    const token = await getToken(options);
    const res = await axios.get(`${options.host}/v1/rs/dm_xldm`, {
        headers: {
            Authorization: token,
        },
        params: filterNullParams(params),
    });
    return res.data.data;
}

/**
 * 获得人事系统专业技术职务级别，党政职务代码
 */
export const getGbzwjb = async (params: DmQueryParams, options: GetToken): Promise<DmDqztdmResult[] | any> => {
    const token = await getToken(options);
    const res = await axios.get(`${options.host}/v1/rs/dm_gbzwjb`, {
        headers: {
            Authorization: token,
        },
        params: filterNullParams(params),
    });
    return res.data.data;
}

/**
 * 获得人获取校聘校管人员列表
 */
export const getXpxgList = async (params: XpxgListQueryParams, options: GetToken): Promise<XpxgListResult[] | any> => {
    const token = await getToken(options);
    const res = await axios.get(`${options.host}/v1/rs/lis_xpxg`, {
        headers: {
            Authorization: token,
        },
        params: filterNullParams(params),
    });
    return res.data.data;
}



