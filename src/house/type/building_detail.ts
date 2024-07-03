/**
 * 资实处房产系统的楼栋信息查询参数
 */
export type BuildingDetailQueryParams = {
    /**
     * 名称
     */
    name?: string,
}

/**
 * 资实处房产系统的楼栋信息返回结果参数
 */
export type BuildingDetailResultParams = {
    /**
     * 取得方式
     */
    acquisition_mode: string,
    /**
     * 资产编号
     */
    asset_number: string,
    /**
     * 楼栋名称
     */
    building_name: string,
    /**
     * 楼栋编号
     */
    building_number: string,
    /**
     * 总建筑面积
     */
    built_up_area: number,
    /**
     * 代码
     */
    code: string,
    /**
     * 总层数
     */
    floor_total: number,
    /**
     * 全称
     */
    name: string,
    /**
     * 地上层数
     */
    overground_floor_number: number,
    /**
     * 产权形式
     */
    property_right_type: string,
    /**
     * 坐落位置
     */
    seating_position: string,
    /**
     * 地下层数
     */
    underground_floor_number: number,
    /**
     * 总使用面积
     */
    use_area: number,
}