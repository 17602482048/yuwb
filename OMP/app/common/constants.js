 /**
  * 常量
 * Copyright 2017-present bcjb_app
 * 项目:白菜鉴宝
 * 作者:liw on 2017/10/11.
 */
import {Dimensions,Platform} from 'react-native';
let deploymentKey= "";
//判断运行环境做的分支处理
if(Platform.OS == 'ios'){
    deploymentKey = "8QxnmZWFQezcKweMqMHrexSXbmRhmCT3QXG2o";
} else {
    deploymentKey = "AMK2u4Ny3ecnPNIr579tKGjaBLpfmCT3QXG2o";
}
   
let window = {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    deploymentKey:deploymentKey,
    isUpdate:false
};
// 是否登录成功
let loginToken = {
    LOGIN_TOKEN: 'LOGIN_TOKEN',
};
// 用户基本信息
let userData = {
    USER_DATA: 'USER_DATA',
};
export default {
    window: window,
    userData:userData,
    loginToken:loginToken 
}
 

