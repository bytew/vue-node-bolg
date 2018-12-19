/**
 * Created by bytewang on 2018/7/15.
 */
import axios from 'axios';
import qs from 'qs'
import { Loading } from 'element-ui';
import { MessageBox } from 'element-ui';
import { Message } from 'element-ui';


//axios.defaults.baseURL = "http://192.168.123.120:80"
axios.defaults.baseURL = "/";

if(location.href.indexOf('http://localhost')>=0){
  axios.defaults.baseURL = "http://localhost:8081";
}else if(location.href.indexOf('http://www.bytewang.cn')>=0){
  axios.defaults.baseURL = "http://www.bytewang.cn";
}
axios.defaults.headers = {
  'X-Requested-With': 'XMLHttpRequest',
};

export default (api, data, fn, loadText, errFn) => {
  /**
   * @api 接口地址
   * @data 发送数据
   * @fn 请求成功回调函数
   * @loadText 加载提示文本
   * @errFn 处理请求结果时报错的处理函数
   * */
  let loadingInstance = {
    close(){
    }
  };
  if(loadText){
    loadingInstance= Loading.service({text:loadText||"",fullscreen: false });
  }


  var qs = require('querystring')

  axios.post(api, data)
    .then((res) => {
      loadingInstance.close();
      console.log(res.data)
      fn(res.data)
      // if (res.data.flag != 0) {
      //   if (errFn) {
      //     errFn(res.data.msg,res.data);
      //   }else{
      //     MessageBox.alert(
      //       res.data.msg, '提示', {
      //         confirmButtonText: '确定',
      //         callback: action => {
      //
      //         }
      //       }
      //     );
      //   }
      // } else {
      //   fn(res.data);
      // }
    })
    .catch((error) => {
      loadingInstance.close();
      let msg=error.message ||""
      if(msg.indexOf("Network error") >=0){
        MessageBox.alert(
          "连接不到服务器", '提示', {
            confirmButtonText: '确定',
            callback: action => {
              if (errFn) {
                errFn(error);
              }
            }
          }
        );
      }else{
        if (errFn) {
          errFn(error);
        }else{
          MessageBox.alert(
            "错误信息："+msg, '出错', {
              confirmButtonText: '确定',
              callback: action => {
              }
            }
          );
        }
      }
      console.log('error', error, fn);
    });
}
