import request from './request'

export const getUserInfo = async () => {
  return await request({
    method: 'get',
    url: '/users/youzizi1'
  })
}
