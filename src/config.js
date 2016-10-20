export const port = process.env.PORT || 3000;
export const host = process.env.WEBSITE_HOSTNAME || `localhost:${port}`;

// 连接WS服务器的用户名和密码
export const wsToken = {
  username: process.env.WS_USERNAME,
  password: process.env.WS_PASSWORD,
};

// 接口ID
export const interfaces = {
  // 获取组织机构列表
  zzjg: '810000001',
};
