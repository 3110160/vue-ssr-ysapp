import request from '@/utils/request';

// 获取hotGoods
export const getHot = ()=>{
  return request.get('/home/hotGoods')
}