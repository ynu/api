/**
 * 审批统计信息插入和查询参数
 */
export type ApprovalStatisticsParams = {
    /**
     * 模板ID
     */
    template_id?: string,
    /**
     * 模板名称
     */
    template_name?: string,
    /**
     * 数量
     */
    count?: number,
    /**
     * 统计时间
     */
    count_time?: string,
}

/**
 * 查询审批统计信息返回结果
 */
export type ApprovalStatisticsResult = {
    /**
     * 数量
     */
    count: number,
    /**
     * 统计时间
     */
    count_time: string,
    /**
     * 序号
     */
    id: number,
    /**
     * 模板id
     */
    template_id: string,
    /**
     * 模板名称
     */
    template_name: string,
    /**
     * 操作时间
     */
    time: number,
}