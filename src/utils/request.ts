import axios from 'axios'
import { ElMessage } from 'element-plus'
export function getJson(url: string, data?: any) {
  return request({
    url,
    data,
    method: 'get'
  })
}

export function postJson(url: string, data?: any) {
  return request({
    url,
    data,
    method: 'post'
  })
}


interface Result {
  result?: string
  code: 200 | 601 | number
  msg: string
  data: any
}
// export const DOMAINNAME = "http://192.168.124.9:8080/bs/client/";
export const DOMAINNAME = "/bs/client/";

function request(data: {
  url: string,
  method: 'get' | 'post',
  data: any
}) {
  const res: Promise<Result> = new Promise((resolve, reject) => {
    axios({
      ...data,
      url: DOMAINNAME + data.url
    }).then((res: any) => {
      if (res.data.code == 200) {
        resolve(res.data)
      } else {
        ElMessage.warning(res.data.msg || '接口错误')
        resolve(res.data)
      }
    }).catch(err => {
      ElMessage.warning(err.message)
      reject(err)
    })
  })
  return res
}