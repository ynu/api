import { Router } from 'express';
import { getZzjg } from './middlewares/standard';

const router = new Router();

// 获取组织机构列表
router.get('/zzjg',
  getZzjg(),
);

export default router;
