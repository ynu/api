/**
 * 在校本科生基本信息查询参数
 */
export type BksBasicQueryParams = {
    /**
     * 学号集合
     */
    xh?: string[]
}

/**
 * 在校本科生基本信息响应结果
 */
export type BksBasicResult = {
    /**
     * 班级代码
     */
    BJDM: string;
    /**
     * 班级
     */
    BJMC: string;
    /**
     * 培养层级
     */
    PYCC: string;
    /**
     * 培养层次代码
     */
    PYCCDM: string;
    /**
     * 入学年级
     */
    RXNJ: string;
    /**
     * 是否在籍
     */
    SFZJ: string;
    /**
     * 是否在校
     */
    SFZX: string;
    /**
     * 性别
     */
    XB: string;
    /**
     * 性别代码
     */
    XBDM: string;
    /**
     * 学号
     */
    XH: string;
    /**
     * 学籍状态
     */
    XJZT: string;
    /**
     * 学籍状态代码
     */
    XJZTDM: string;
    /**
     * 姓名
     */
    XM: string;
    /**
     * 姓名拼音
     */
    XMPY: string;
    /**
     * 校区
     */
    XQ: string;
    /**
     * 学生类别
     */
    XSLB: string;
    /**
     * 学生类别代码
     */
    XSLBDM: string;
    /**
     * 校区代码
     */
    XXXQDM: string;
    /**
     * 学制
     */
    XZ: number;
    /**
     * 现在年级
     */
    XZNJ: string;
    /**
     * 预计毕业日期,yyyy-MM-dd
     */
    YJBYRQ: string;
    /**
     * 院系代码
     */
    YXDM: string;
    /**
     * 院系
     */
    YXMC: string;
    /**
     * 专业代码
     */
    ZYDM: string;
    /**
     * 专业
     */
    ZYMC: string;
}