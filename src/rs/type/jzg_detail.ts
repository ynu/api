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
 * 教职工详情响应结果
 */
export type JzgDetailResult = {
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

/**
 * 教职工详情响应结果
 */
export type JzgFullDetailResult = JzgDetailResult & {
    /**
     * 毕业日期
     */
    BYRQ: string;
    /**
     * 毕业学校
     */
    BYXX: string;
    /**
     * 参加党派日期
     */
    CJDPRQ: string;
    /**
     * 参加工作日期
     */
    CJGZRQ: string;
    /**
     * 出生日期
     */
    CSRQ: string;
    /**
     * 当前状态
     */
    DQZT: string;
    /**
     * 党政职务
     */
    DZZW: string;
    /**
     * 党政职务级别
     */
    DZZWJB: string;
    /**
     * 党政职务级别代码
     */
    DZZWJBDM: string;
    /**
     * 二级学科
     */
    EJXK: string;
    /**
     * 二级学科代码
     */
    EJXKDM: string;
    /**
     * 岗位名称
     */
    GWMC: string;
    /**
     * 婚姻状况
     */
    HYZK: string;
    /**
     * 婚姻状况代码
     */
    HYZKDM: string;
    /**
     * 籍贯
     */
    JG: string;
    /**
     * 籍贯代码
     */
    JGDM: string;
    /**
     * 教师资格证号
     */
    JSZGZH: string;
    /**
     * 教职工类别
     */
    JZGLB: string;
    /**
     * 教职工类别代码
     */
    JZGLBDM: string;
    /**
     * 来校日期
     */
    LXRQ: string;
    /**
     * 民族
     */
    MZ: string;
    /**
     * 年龄
     */
    NL: number;
    /**
     * 身份证件号
     */
    SFZJH: string;
    /**
     * 身份证件类型代码
     */
    SFZJLXDM: string;
    /**
     * 身份证件类型
     */
    SHZJLX: string;
    /**
     * 手机
     */
    SJ: string;
    /**
     * 院系名称
     */
    YXMC: string;
    /**
     * 性别
     */
    XB: string;
    /**
     * 姓名拼音
     */
    XMPY: string;
    /**
     * 研究方向
     */
    YJFX: string;
    /**
     * 一级学科
     */
    YJXK: string;
    /**
     * 一级学科代码
     */
    YJXKDM: string;
    /**
     * 用人方式
     */
    YRFS: string;
    /**
     * 最高学历
     */
    ZGXL: string;
    /**
     * 最高学位
     */
    ZGXW: string;
    /**
     * 最高学位代码
     */
    ZGXWDM: string;
    /**
     * 专业技术职务
     */
    ZYJSZW: string;
    /**
     * 专业技术职务级别
     */
    ZYJSZWJB: string;
    /**
     * 专业技术职务级别代码
     */
    ZYJSZWJBDM: string;
    /**
     * 专业技术职务评定日期
     */
    ZYJSZWPDRQ: string;
    /**
     * 政治面貌
     */
    ZZMM: string;
}