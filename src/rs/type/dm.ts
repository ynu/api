/**
 * 人事系统代码查询参数，包括民族，政治面貌，组织机构，教职工当前状态，用人方式，学历，专业技术职务级别，党政职务代码
 */
export type DmQueryParams = {
    /**
     * 代码
     */
    dm?: string,
}

/**
 * 人事系统代码返回结果参数，包括民族，政治面貌，组织机构，教职工当前状态，用人方式，学历
 */
export type DmResultParams = {
    /**
     * 名称
     */
    MC: string,
    /**
     * 代码
     */
    DM: string,
}

/**
 * 人事系统专业技术职务级别，党政职务代码返回结果参数
 */
export type DmDqztdmResultParams = {
    /**
     * 类属
     */
    LS: string,
} & DmResultParams