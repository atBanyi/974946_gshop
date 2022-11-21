/*
* ajax请求模块
*  返回值 promise对象
* */
import axios from "axios";
export default function ajax(url = '', data = {}, type = 'GET') {
    return new Promise(function (resolve, reject) {// 最终返回的数据是response.data
        // 执行异步请求
        let promise
        if (type === 'GET') {
// 准备 url query 参数数据
            let dataStr = '' //数据拼接字符串
            Object.keys(data).forEach(key => {
                dataStr += key + '=' + data[key] + '&'
            })
            if (dataStr !== '') {
                dataStr = dataStr.substring(0, dataStr.lastIndexOf('&'))
                url = url + '?' + dataStr
            }
// 发送 get 请求
            promise = axios.get(url)
        } else {
// 发送 post 请求
            promise = axios.post(url, data)
        }
        // 成功回调
        promise.then(response => {
            resolve(response.data)
        }).catch(error => {
            // 失败调用reject()
                reject(error)
            })
    })
}
