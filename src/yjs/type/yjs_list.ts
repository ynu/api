/**
 * 在校研究生列表查询参数
 */
export type YjsListQueryParams = {
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
 * 在校研究生列表响应结果
 */
export type YjsListResult = {
    /**
     * 学号
     */
    XH: string;
    /**
     * 姓名
     */
    XM: string;
}