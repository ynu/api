/**
 * 教职工详情查询参数
 */
export type JzgDetailQueryParams = {
    /**
     * 职工号集合
     */
    zgh?: string[]
}

/**
 * 教职工详情返回结果参数
 */
export type JzgDetailResultParams = {
    /**
     * 院系代码
     */
    YXDM: string,
    /**
     * 民族代码
     */
    MZDM: string,
    /**
     * 姓名
     */
    XM: string,
    /**
     * 政治面貌代码
     */
    ZZMMDM: string,
    /**
     * 当前状态代码
     */
    DQZTDM: string,
    /**
     * 职工号
     */
    ZGH: string,
    /**
     * 用人方式代码
     */
    YRFSDM: string,
    /**
     * 最高学历代码
     */
    ZGXLDM: string,
    /**
     * 专业技术职务级别代码
     */
    ZYJSZWJBDM: string,
}