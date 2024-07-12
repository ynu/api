/**
 * 获取校聘校管人员列表查询参数
 */
export type XpxgListQueryParams = {
    /**
     * 单位
     */
    dep?: string,
}

/**
 * 获取校聘校管人员列表响应结果
 */
export type XpxgListResult = {
    /**
     * 单位
     */
    DEP: string,
    /**
     * 当前状态代码
     */
    DQZTDM: string,
    /**
     * 姓名
     */
    XM: string,
    /**
     * 用人方式代码
     */
    YRFSDM: string,
    /**
     * 职工号
     */
    ZGH: string,
}