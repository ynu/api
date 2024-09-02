import axios from 'axios';
import Debug from 'debug';
import {GetToken, getToken} from "../index";
import {filterNullParams} from "../util";
import {ApprovalStatisticsParams, ApprovalStatisticsResult} from "./type/approval_statistics";
import {ApprovalRecordParams, ApprovalRecordResult} from "./type/approval_record";
import {ApprovalTemplateParams, ApprovalTemplateResult} from "./type/approval_template";

const debug = Debug('ids::debug');

/**
 * 插入审批统计信息
 */
export const addApprovalStatistics = async (params: ApprovalStatisticsParams, options: GetToken): Promise<any> => {
    const token = await getToken(options);
    const res = await axios.post(`${options.host}/v1/it/wecom/approval_create`, filterNullParams(params),{
        headers: {
            Authorization: token,
        },
    })
    return res.data.data;
}

/**
 * 查询审批统计信息
 */
export const getApprovalStatisticsList = async (params: ApprovalStatisticsParams, options: GetToken): Promise<ApprovalStatisticsResult[] | any> => {
    const token = await getToken(options);
    const res = await axios.get(`${options.host}/v1/it/wecom/approval_statistics`, {
        headers: {
            Authorization: token,
        },
        params: filterNullParams(params)
    });
    return res.data.data;
}

/**
 * 查询项审批记录
 */
export const getApprovalRecordList = async (params: ApprovalRecordParams, options: GetToken): Promise<ApprovalRecordResult[] | any> => {
    const token = await getToken(options);
    const res = await axios.get(`${options.host}//v1/it/wecom/record`, {
        headers: {
            Authorization: token,
        },
        params: filterNullParams(params)
    });
    return res.data.data;
}

/**
 * 查询审批模板
 */
export const getApprovalTemplateList = async (params: ApprovalTemplateParams, options: GetToken): Promise<ApprovalTemplateResult[] | any> => {
    const token = await getToken(options);
    const res = await axios.get(`${options.host}//v1/it/wecom/approval_temp_query`, {
        headers: {
            Authorization: token,
        },
        params: filterNullParams(params)
    });
    return res.data.data;
}

