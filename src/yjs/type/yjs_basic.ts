/**
 * 在校研究生基本信息查询参数
 */
export type YjsBasicQueryParams = {
    /**
     * 学号集合
     */
    xh?: string[]
}

/**
 * 在校研究生基本信息响应结果
 */
export type YjsBasicResult = {
    /**
     * 离校标志
     */
    LXBZ: string;
    /**
     * 离校标志代码
     */
    LXBZDM: string;
    /**
     * 年级
     */
    NJDM: string;
    /**
     * 培养层次
     */
    PYCC: string;
    /**
     * 培养层次代码
     */
    PYCCDM: string;
    /**
     * 培养方式
     */
    PYFS: string;
    /**
     * 培养方式代码
     */
    PYFSDM: string;
    /**
     * 入学季节
     */
    RXJJ: string;
    /**
     * 入学季节代码
     */
    RXJJDM: string;
    /**
     * 入学年月
     */
    RXNY: number;
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
     * 校区代码
     */
    XQDM: string;
    /**
     * 学生类别
     */
    XSLB: string;
    /**
     * 学生类别代码
     */
    XSLBDM: string;
    /**
     * 学习方式
     */
    XXFS: string;
    /**
     * 学习方式代码
     */
    XXFSDM: string;
    /**
     * 学制
     */
    XZDM: string;
    /**
     * 预计毕业时间
     */
    YJBYSJ: number;
    /**
     * 院系
     */
    YXMC: string;
    /**
     * 院系代码
     */
    YXDM: string;
    /**
     * 专业
     */
    ZY: string;
    /**
     * 专业代码
     */
    ZYDM: string;
}