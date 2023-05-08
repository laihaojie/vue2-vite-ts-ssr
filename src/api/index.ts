import { Get, Post, service } from 'lingman-web'

export const Api = {
  // 测试接口Get
  testGet: () => Get('/api'),

  // 测试接口Post
  tesPost: data => Post('/api/account/post', data),

  // 登录接口
  login: data => service({ url: '/api/account/login', method: 'post', data }),
  // login: (data) => Post('/api/account/login', data),

  // 获取登录用户信息
  getUserInfo: () => Get<UserInfo>('/api/account/info'),
}
