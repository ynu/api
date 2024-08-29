/**
 * 审批记录查询参数
 */
export type ApprovalRecordParams = {
    /**
     * 申请人
     */
    appplyer?: string;
    /**
     * 审批单号
     */
    sp_no?: string;
    /**
     * 模板ID
     */
    template_id?: string;
}

/**
 * 审批记录返回结果
 */
export type ApprovalRecordResult = {
    /**
     * 提交内容
     */
    apply_content: string;
    /**
     * 申请时间
     */
    apply_time: string;
    /**
     * 申请者
     */
    applyer: string;
    /**
     * 备注id
     */
    commentid: string;
    /**
     * 备注文本内容
     */
    content: string;
    /**
     * 备注附件id
     */
    mediaid: string;
    /**
     * 审批意见
     */
    record_speech: string;
    /**
     * 审批节点状态申请单状态：1-审批中；2-已通过；3-已驳回；4-已撤销；6-通过后撤销；7-已删除；10-已支付
     */
    record_spstatus: string;
    /**
     * 审批时间
     */
    record_time: string;
    /**
     * 审批节点人
     */
    record_userid: string;
    /**
     * 模板名称
     */
    sp_name: string;
    /**
     * 审批单号
     */
    sp_no: string;
    /**
     * 审批状态 1审批中；2 已通过；3已驳回；4已取消；6通过后撤销；10已支付
     */
    sp_status: string;
    /**
     * 模板id
     */
    template_id: string;
    /**
     * 备注提交时间
     */
    time: string;
    /**
     * 备注人userid
     */
    userid: string;
}