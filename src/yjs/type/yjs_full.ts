import {YjsBasicResult} from "./yjs_basic";

/**
 * 在校研究生详细信息查询参数
 */
export type YjsFullQueryParams = {
    /**
     * 学号集合
     */
    xh?: string[]
}

/**
 * 在校研究生详细信息响应结果
 */
export type YjsFullResult = YjsBasicResult & {
    /**
     * 出生日期
     */
    CSRQ: number;
    /**
     * 导师职工号
     */
    DSZGH: string;
    /**
     * 邮箱
     */
    DZYX: string;
    /**
     * 国家地区
     */
    GJDQ: string;
    /**
     * 国家地区代码
     */
    GJDQDM: string;
    /**
     * 户口所在地
     */
    HKSZD: string;
    /**
     * 户口所在地代码
     */
    HKSZDDM: string;
    /**
     * 籍贯
     */
    JG: string;
    /**
     * 籍贯代码
     */
    JGDM: string;
    /**
     * 民族
     */
    MZ: string;
    /**
     * 民族代码
     */
    MZDM: string;
    /**
     * 手机
     */
    SJHM: string;
    /**
     * 证件号码
     */
    ZJHM: string;
    /**
     * 证件类型
     */
    ZJLX: string;
    /**
     * 证件类型代码
     */
    ZJLXDM: string;
    /**
     * 政治面貌
     */
    ZZMM: string;
    /**
     * 政治面貌代码
     */
    ZZMMDM: string;
}