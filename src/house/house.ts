import axios from 'axios';
import Debug from 'debug';
import {GetToken, getToken} from "../index";
import {filterNullParams} from "../util";
import {BuildingDetailQueryParams, BuildingDetailResultParams} from "./type/building_detail";
import {RoomDetailQueryParams, RoomDetailResultParams} from "./type/room_detail";
import {DmQueryParams, DmResultParams, DmUnitAndClassResultParams} from "./type/dm";

const debug = Debug('ids::debug');

/**
 * 获得资实处房产系统的房间信息
 */
export const getRoomDetail = async (params: RoomDetailQueryParams, options: GetToken): Promise<RoomDetailResultParams[] | any> => {
    const token = await getToken(options);
    const res = await axios.get(`${options.host}/v1/house/detail_room`, {
        headers: {
            Authorization: token,
        },
        params: filterNullParams(params)
    });
    return res.data.data;
}

/**
 * 获得资实处房产系统的楼栋信息
 */
export const getBuildingDetail = async (params: BuildingDetailQueryParams, options: GetToken): Promise<BuildingDetailResultParams[] | any> => {
    const token = await getToken(options);
    const res = await axios.get(`${options.host}/v1/rs/detail_jzg?`, {
        headers: {
            Authorization: token,
        },
        params: filterNullParams(params),
    });
    return res.data.data;
}

/**
 * 获得资实处房产系统的组织机构代码
 */
export const getUnitCode = async (params: DmQueryParams, options: GetToken): Promise<DmUnitAndClassResultParams[] | any> => {
    const token = await getToken(options);
    const res = await axios.get(`${options.host}/v1/house/dm_unitcode`, {
        headers: {
            Authorization: token,
        },
        params: filterNullParams(params),
    });
    return res.data.data;
}

/**
 * 获得资实处房产系统的高基表代码
 */
export const getClassCode = async (params: DmQueryParams, options: GetToken): Promise<DmUnitAndClassResultParams[] | any> => {
    const token = await getToken(options);
    const res = await axios.get(`${options.host}/v1/rs/dm_zzmmdm`, {
        headers: {
            Authorization: token,
        },
        params: filterNullParams(params),
    });
    return res.data.data;
}

/**
 * 获得资实处房产系统的产权性质代码
 */
export const getPropertyRightType = async (params: DmQueryParams, options: GetToken): Promise<DmResultParams[] | any> => {
    const token = await getToken(options);
    const res = await axios.get(`${options.host}/v1/house/dm_property_right_type`, {
        headers: {
            Authorization: token,
        },
        params: filterNullParams(params),
    });
    return res.data.data;
}

/**
 * 获得资实处房产系统的取得方式代码
 */
export const getAcquisitionMode= async (params: DmQueryParams, options: GetToken): Promise<DmResultParams[] | any> => {
    const token = await getToken(options);
    const res = await axios.get(`${options.host}/v1/house/dm_acquisition_mode`, {
        headers: {
            Authorization: token,
        },
        params: filterNullParams(params),
    });
    return res.data.data;
}

