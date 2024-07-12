import {BksBasicResult} from "./bks_basic";

/**
 * 在校本科生详细信息查询参数
 */
export type BksFullQueryParams = {
    /**
     * 学号集合
     */
    xh?: string[]
}

/**
 * 在校本科生详细信息响应结果
 */
export type BksFullResult = BksBasicResult & {
    /**
     * 出生日期
     */
    CSRQ: string;
    /**
     * 国家地区
     */
    GJDQ: string;
    /**
     * 国家地区代码
     */
    GJDQDM: string;
    /**
     * 民族
     */
    MZ: string;
    /**
     * 民族代码
     */
    MZDM: string;
    /**
     * 身份证件号
     */
    SFZJH: string;
    /**
     * 身份证件类型
     */
    SFZJLX: string;
    /**
     * 身份证件类型代码
     */
    SFZJLXDM: string;
    /**
     * 政治面貌
     */
    ZZMM: string;
    /**
     * 政治面貌代码
     */
    ZZMMDM: string;
}