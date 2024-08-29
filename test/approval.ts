import { env } from 'node:process';
import * as cache from 'memory-cache';
import { after, describe, it } from 'node:test';
import { ok } from 'node:assert';
import { Approval } from '../src';
import {ApprovalStatisticsParams} from "../src/approval/type/approval_statistics";

const {
    API_HOST,
    API_KEY,
} = env;

const options = {
    key: API_KEY,
    host: API_HOST,
};
describe('approval-企业微信审批信息', function() {
    after(() => cache.clear());
    it('插入审批统计信息', async () => {
        const params: ApprovalStatisticsParams = {
            template_id: '1',
            template_name: '1',
            count: 1,
            count_time: '1',
        }
        const res = await Approval.addApprovalStatistics(params, options);
        console.log(res);
        ok('1 rows affected');
    });
    it('查询审批统计信息', async () => {
        const params: ApprovalStatisticsParams = {
            template_id: '1',
            template_name: '1',
            count: 1,
            count_time: '1',
        }
        const res = await Approval.getApprovalStatisticsList(params, options);
        console.log(res);
        ok(res.length);
    });
    it('查询审批记录', async () => {
        const params: ApprovalStatisticsParams = {
            template_id: 'C4UAWEDGT6EPqvE8FD8SBxXnGokdByrJcmyYTCsBm',
        }
        const res = await Approval.getApprovalRecordList(params, options);
        console.log(res);
        ok(res.length);
    });
});