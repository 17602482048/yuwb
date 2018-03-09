/**
 * Copyright 2017-present OMP
 * 项目：新能源智慧运营
 * 作者：zhaoyf on 2017年12月6日
 * 页面名称：任务中心
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

export default class Equipment extends Component {
    render() { 
        return (
            <View style={styles._container}>
            <Header title={"设备管理"}/>
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