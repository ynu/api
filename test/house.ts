import { env } from 'node:process';
import * as cache from 'memory-cache';
import { after, describe, it } from 'node:test';
import { equal, ok } from 'node:assert';
import { House } from '../src';
import {DmQueryParams} from "../src/house/type/dm";
import {RoomDetailQueryParams} from "../src/house/type/room_detail";
import {BuildingDetailQueryParams} from "../src/house/type/building_detail";

const {
    API_HOST,
    API_KEY,
} = env;

const options = {
    key: API_KEY,
    host: API_HOST,
};
describe('House-资实处房产系统', function() {
    after(() => cache.clear());
    it('获得资实处房产系统的房间信息', async () => {
        const params: RoomDetailQueryParams = {
            name: "教室",
            building: "",
            unitcode: "",
            offset: "0",
            limit: "1",
        }
        const res = await House.getRoomDetail(params, options);
        console.log(res)
        ok(Array.isArray(res));
    });
    it('获得资实处房产系统的楼栋信息', async () => {
        const params: BuildingDetailQueryParams = {
            name: ''
        }
        const res = await House.getBuildingDetail(params, options);
        console.log(res)
        ok(Array.isArray(res));
    });
    it('获得资实处房产系统的组织机构代码', async () => {
        const params: DmQueryParams = {
            code: ''
        }
        const res = await House.getUnitCode(params, options);
        console.log(res)
        ok(Array.isArray(res));
    });
    it('获得资实处房产系统的高基表代码', async () => {
        const params: DmQueryParams = {
            code: ''
        }
        const res = await House.getClassCode(params, options);
        console.log(res)
        ok(Array.isArray(res));
    });
    it('获得资实处房产系统的产权性质代码', async () => {
        const params: DmQueryParams = {
            code: ''
        }
        const res = await House.getPropertyRightType(params, options);
        console.log(res)
        ok(Array.isArray(res));
    });
    it('获得资实处房产系统的产权性质代码', async () => {
        const params: DmQueryParams = {
            code: ''
        }
        const res = await House.getAcquisitionMode(params, options);
        console.log(res)
        ok(Array.isArray(res));
    });
});