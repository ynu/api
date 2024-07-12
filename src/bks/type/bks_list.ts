/**
 * 在校本科生列表查询参数
 */
export type BksListQueryParams = {
    /**
     * 院系代码
     */
    yxdm?: string,
    /**
     * 年级
     */
    nj?: string,
}

/**
 * 在校本科生列表响应结果
 */
export type BksListResult = {
    /**
     * 学号
     */
    XH: string;
    /**
     * 姓名
     */
    XM: string;
}