/**
 * Copyright 2017-present bcjb_app
 * 项目:白菜鉴宝
 * 作者:liw on 2017/10/11.
 */
import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Dimensions,
    ListView,
    Image,
    RefreshControl,
    ScrollView,
    TouchableHighlight,
    TouchableOpacity,
    InteractionManager
} from 'react-native';

import Common from '../../common/constants';
import UserDefaults from '../../common/UserDefaults';
import Header from '../../common/Header';

let {width, height} = Dimensions.get('window');
/**
 * 首页
 */
export default class Mine extends Component {
    render() { 
        return (
            <View style={styles._container}>
                <Header title={"我的"}/>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    _container: {   // 主页面样式
        flex: 1,
        backgroundColor:'#fff'
    },
});