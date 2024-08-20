
/**
 * 本科生组织机构查询参数
 */
export type DmQueryParams = {
    /**
     * 代码
     */
    dm?: string,
}

/**
 * 本科生组织机构响应结果
 */
export type DmResult = {
    /**
     * 名称
     */
    MC: string,
    /**
     * 代码
     */
    DM: string,
}