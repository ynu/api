/**
 * 教职工列表查询参数
 */
export type JzgListQueryParams = {
    /**
     * 单位
     */
    dep?: string,
    /**
     * 当前状态代码
     */
    dqztdm?: string,
    /**
     * 用人方式代码
     */
    yrfsdm?: string,
}

/**
 * 教职工列表返回结果参数
 */
export type JzgListResultParams = {
    /**
     * 姓名
     */
    XM: string,
    /**
     * 职工号
     */
    ZGH: string,
}