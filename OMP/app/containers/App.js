/**
 * Copyright 2017-present bcjb_app
 * 项目:白菜鉴宝
 * 作者:liw on 2017/10/11.
 */
import React from 'react';
import {
    StyleSheet,
    View,
    StatusBar,
    Component,
    //BackAndroid,
    BackHandler ,
    ToastAndroid,
    Platform
    } from 'react-native';
import hookNavigator from './HookNavigator';
import {Navigator} from 'react-native-deprecated-custom-components';
import Main from '../pages/Main';
import UserDefaults from '../common/UserDefaults'; 
import Util from '../common/Utils'; 
import API from '../common/Api'; 
import Common from '../common/constants';
import SplashScreen from 'react-native-splash-screen';
lastBackPressed = 0;
const isIOS = Platform.OS == "ios";
class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            registrationId: 'registrationId',
        }
    }
  //绑定监听事件
   componentDidMount(){
//       // do anything while splash screen keeps, use await to wait for an async task.

    // BackAndroid.addEventListener('hardwareBackPress',this.onBackAndroid);
     BackHandler.addEventListener('hardwareBackPress',this.onBackAndroid);
//     //判断token是否过期
//     UserDefaults.cachedObject(Common.loginToken.LOGIN_TOKEN)
//     .then((token) => {
//         if (token != '' && token != undefined) {
//             let URL = API.VALIDATE_TOKEN + '?token=' + token;
//             Util.get(URL, (data) => {
             
//                 data.data.token=token;
               
//             // 返回数据存储到本地
//             UserDefaults.setObject(Common.loginToken.LOGIN_TOKEN, data.data.token);
//             UserDefaults.setObject(Common.userData.USER_DATA, data);
  
//             }, (error) => { 
//                 // 退出登陆
//                 UserDefaults.clearCachedObject(Common.loginToken.LOGIN_TOKEN);
//                 UserDefaults.clearCachedObject(Common.userData.USER_DATA);
//             });
//         }
//     });
//       SplashScreen.hide();
   }

    //通过ref访问Navigator
    onNavigatorRef = (ref) => {
        this.navigator = ref;
        if (ref) {
            hookNavigator(ref);
        }
    };

    //功能实现
    onBackAndroid = () => {
        const nav = this.navigator;
        const routers = nav.getCurrentRoutes();
        const now = Date.now();

        //返回上一级页面
        if (routers.length > 1) {
            nav.pop();
            return true;
        }

        //根页面双击退出
        if (now - this.lastBackPressed < 2000) {
            //最近2秒内按过2次back键，可以退出应用。
            BackAndroid.exitApp();
            return false;
        }
        else{
            this.lastBackPressed = now;
            ToastAndroid.show('再按一次退出应用',ToastAndroid.SHORT);
            return true;
        }
    };

    render() {
        return (
            <View style={{flex: 1}}>
                {isIOS ?(
                    <View style={styles._topView}></View>
                ):(
                    <View/>
                )}
                <StatusBar
                    backgroundColor="#061420"
                    barStyle="light-content"
                    />
                <Navigator
                    initialRoute={{name: 'TabBarView', component: Main}}
                    configureScene={()=>{
                        return  Navigator.SceneConfigs.PushFromRight;
                    }}
                    renderScene={(route, navigator) => {
                        let Component = route.component;
                        return (
                            <Component navigator = {navigator} route = {route} {...route.passProps} />
                        )
                    }}
                    ref={this.onNavigatorRef}
                    />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    _topView: {     // 最顶端标题框View
        backgroundColor: '#FABE3B',
        height: 20,
    }
})

export default App;