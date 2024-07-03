/**
 * 资实处房产系统的房间信息查询参数
 */
export type RoomDetailQueryParams = {
    /**
     * 全称
     */
    name?: string,
    /**
     * 楼栋
     */
    building?: string,
    /**
     * 单位代码
     */
    unitcode?: string,
    /**
     * 跳过的记录数,需要搭配limit一起使用
     */
    offset?: string,
    /**
     * 从offset位置开始返回的记录数,需要搭配offset一起使用
     */
    limit?: string,
}

/**
 * 资实处房产系统的房间信息返回结果参数
 */
export type RoomDetailResultParams = {
    /**
     * 所属楼栋
     */
    building: string,
    /**
     * 所在楼栋名称
     */
    building_text: string,
    /**
     * 建筑面积
     */
    built_up_area: number,
    /**
     * 代码
     */
    code: string,
    /**
     * 套内面积
     */
    inside_built_area: number,
    /**
     * 高基表大类
     */
    large_class_code: string,
    /**
     * 高基表中类
     */
    middle_class_code: string,
    /**
     * 全称
     */
    name: string,
    /**
     * 房屋状况简要说明
     */
    room_desc: string,
    /**
     * 房间名称
     */
    room_name: string,
    /**
     * 房号
     */
    room_number: string,
    /**
     * 房屋分类（小类）
     */
    small_class_code: string,
    /**
     * 组织机构
     */
    unitcode: string,
    /**
     * 使用面积
     */
    use_area: number,
}