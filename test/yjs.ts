import { env } from 'node:process';
import * as cache from 'memory-cache';
import { after, describe, it } from 'node:test';
import { ok } from 'node:assert';
import { Yjs } from '../src';
import {YjsListQueryParams} from "../src/yjs/type/yjs_list";
import {YjsBasicQueryParams} from "../src/yjs/type/yjs_basic";
import {DmQueryParams} from "../src/yjs/type/yjs_dm";

const {
    API_HOST,
    API_KEY,
} = env;

const options = {
    key: API_KEY,
    host: API_HOST,
};
describe('yjs-研究生', function() {
    after(() => cache.clear());
    it('查询在校研究生名单', async () => {
        const params: YjsListQueryParams = {
            yxdm: "",
            nj: "",
        };
        const res = await Yjs.getYjsList(params, options);
        console.log(res);
        ok(Array.isArray(res));
    });
    it('查询在校研究生的基本信息', async () => {
        const params: YjsBasicQueryParams = {
            xh: [""]
        }
        const res = await Yjs.getYjsBasic(params, options);
        console.log(res)
        ok(Array.isArray(res));
    });
    it('查询在校研究生的详细信息', async () => {
        const params: YjsBasicQueryParams = {
            xh: [""]
        }
        const res = await Yjs.getYjsFull(params, options);
        console.log(res)
        ok(Array.isArray(res));
    });
    it('查询本科生的组织架构信息', async () => {
        const params: DmQueryParams = {
            dm: ""
        }
        const res = await Yjs.getYjsYxdm(params, options);
        console.log(res)
        ok(Array.isArray(res));
    });
});