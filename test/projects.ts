import { env } from 'node:process';
import * as cache from 'memory-cache';
import { after, describe, it } from 'node:test';
import { ok } from 'node:assert';
import { Projects } from '../src';
import {ProjectsBasicParams} from "../src/projects/type/projects_basic";

const {
    API_HOST,
    API_KEY,
} = env;

const options = {
    key: API_KEY,
    host: API_HOST,
};
describe('projects-项目合同', function() {
    after(() => cache.clear());
    it('查询在校研究生的基本信息', async () => {
        const params: ProjectsBasicParams = {
            yxmc: '信息技术中心'
        }
        const res = await Projects.getProjectsBasicList(params, options);
        console.log(res)
        ok(Array.isArray(res));
    });
});