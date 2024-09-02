/**
 * 审批模板查询参数
 */
export type ApprovalTemplateParams = {
    /**
     * 模板ID
     */
    template_id?: string;
}

/**
 * 审批模板返回结果
 */
export type ApprovalTemplateResult = {
    /**
     * 模板ID
     */
    template_id: string,
    /**
     * 模板名称
     */
    template_name: string,
    /**
     * 审批用户ID
     */
    userIds: string,
}