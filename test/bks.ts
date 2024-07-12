import { env } from 'node:process';
import * as cache from 'memory-cache';
import { after, describe, it } from 'node:test';
import { ok } from 'node:assert';
import { Bks } from '../src';
import {BksListQueryParams} from "../src/bks/type/bks_list";
import {BksBasicQueryParams} from "../src/bks/type/bks_basic";

const {
    API_HOST,
    API_KEY,
} = env;

const options = {
    key: API_KEY,
    host: API_HOST,
};
describe('bks-本科生', function() {
    after(() => cache.clear());
    it('查询在校本科生名单', async () => {
        const params: BksListQueryParams = {
            yxdm: "",
            nj: "",
        };
        const res = await Bks.getBksList(params, options);
        console.log(res);
        ok(Array.isArray(res));
    });
    it('查询在校本科生的基本信息', async () => {
        const params: BksBasicQueryParams = {
            xh: [""]
        }
        const res = await Bks.getBksBasic(params, options);
        console.log(res)
        ok(Array.isArray(res));
    });
    it('查询在校本科生的详细信息', async () => {
        const params: BksBasicQueryParams = {
            xh: [""]
        }
        const res = await Bks.getBksFull(params, options);
        console.log(res)
        ok(Array.isArray(res));
    });
});