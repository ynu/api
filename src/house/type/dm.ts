/**
 * 资实处房产系统代码查询参数，包括组织机构，高基表，产权性质，取得方式
 */
export type DmQueryParams = {
    /**
     * 代码
     */
    code?: string,
}

/**
 * 资实处房产系统代码返回结果参数，包括产权性质，取得方式
 */
export type DmResultParams = {
    /**
     * 名称
     */
    name: string,
    /**
     * 代码
     */
    code: string,
}

/**
 * 资实处房产系统代码返回结果参数，包括组织机构，高基表
 */
export type DmUnitAndClassResultParams = {
    /**
     * 父级代码
     */
    parentcode: string,
} & DmResultParams