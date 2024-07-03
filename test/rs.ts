import { env } from 'node:process';
import * as cache from 'memory-cache';
import { after, describe, it } from 'node:test';
import { equal, ok } from 'node:assert';
import { Rs } from '../src';
import {JzgListQueryParams} from "../src/rs/type/jzg_list";
import {JzgDetailQueryParams} from "../src/rs/type/jzg_detail";
import {DmQueryParams} from "../src/rs/type/dm";

const {
    API_HOST,
    API_KEY,
} = env;

const options = {
    key: API_KEY,
    host: API_HOST,
};
describe('Rs-人事', function() {
    after(() => cache.clear());
    it('教职工列表查询', async () => {
        const params: JzgListQueryParams = {
            dep: "",
            dqztdm: "",
            yrfsdm: "",
        }
        const res = await Rs.getJzgList(params, options);
        console.log(res)
        ok(Array.isArray(res));
    });
    it('教职工详情查询', async () => {
        const params: JzgDetailQueryParams = {
            zgh: []
        }
        const res = await Rs.getJzgDetail(params, options);
        console.log(res)
        ok(Array.isArray(res));
    });
    it('获得人事系统民族代码', async () => {
        const params: DmQueryParams = {
            dm: '33'
        }
        const res = await Rs.getMzdm(params, options);
        console.log(res)
        ok(Array.isArray(res));
    });
    it('获得人事系统政治面貌代码', async () => {
        const params: DmQueryParams = {
            dm: '13'
        }
        const res = await Rs.getZzmmdm(params, options);
        console.log("政治面貌代码：", res)
        ok(Array.isArray(res));
    });
    it('获得人事系统组织机构代码', async () => {
        const params: DmQueryParams = {
            dm: '1001'
        }
        const res = await Rs.getYxdm(params, options);
        console.log("组织机构代码：", res)
        ok(Array.isArray(res));
    });
    it('人事教职工当前状态代码', async () => {
        const params: DmQueryParams = {
            dm: '01'
        }
        const res = await Rs.getDqztdm(params, options);
        console.log("人事教职工当前状态代码：", res)
        ok(Array.isArray(res));
    });
    it('获得人事系统用人方式代码', async () => {
        const params: DmQueryParams = {
            dm: '214'
        }
        const res = await Rs.getYrfsdm(params, options);
        console.log("人事系统用人方式代码：", res)
        ok(Array.isArray(res));
    });
    it('人事系统学历代码', async () => {
        const params: DmQueryParams = {
            dm: '14'
        }
        const res = await Rs.getXldm(params, options);
        console.log("人事系统学历代码：", res)
        ok(Array.isArray(res));
    });
    it('人事系统专业技术职务级别，党政职务代码', async () => {
        const params: DmQueryParams = {
            dm: '121'
        }
        const res = await Rs.getGbzwjb(params, options);
        console.log("人事系统专业技术职务级别，党政职务代码：", res)
        ok(Array.isArray(res));
    });
});