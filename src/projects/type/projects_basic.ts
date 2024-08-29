/**
 * 项目合同的基本信息查询参数
 */
export type ProjectsBasicParams = {
    /**
     * 院系名称
     */
    yxmc: string,
}

/**
 * 项目合同的基本信息响应结果
 */
export type ProjectsBasicResult = {
    /**
     * 采购方式
     */
    CAIGFS: string,
    /**
     * 采购项目名称
     */
    CHUGSJ: string,
    /**
     * 供货商
     */
    GONGYSMC: string,
    /**
     * 合同标的
     */
    HETBD: string,
    /**
     * 合同金额
     */
    HETJE: number,
    /**
     * 合同自编号
     */
    JIAFHTZBH: string,
    /**
     * 合同ID
     */
    RECID: string,
    /**
     * 项目负责人
     */
    XIANGMFZR: string,
    /**
     * 项目经办人
     */
    XIANGMJBRBYTE: string,
    /**
     * 采购部门
     */
    YONGHDW: string,
    /**
     * 采购组织形式
     */
    ZUZXS: string,
}