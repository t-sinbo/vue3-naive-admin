import { defAxios as request } from '@/utils/http'

export const login = (data) => {
  return request({
    url: '/auth/login',
    method: 'post',
    data,
  })
}F

export const refreshToken = () => {
  return request({
    url: '/auth/refreshToken',
    method: 'post',
  })
}
