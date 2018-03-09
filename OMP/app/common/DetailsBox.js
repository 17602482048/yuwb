/**
 * Copyright 2017-present OMP
 * 项目：新能源智慧运营
 * 作者：zhaoyf on 2017年12月6日
 * 页面名称：详情条框组件
 */
import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Dimensions,
    TouchableOpacity,
    InteractionManager,
    Image,
    Modal,
} from 'react-native';

import Common from './constants';
import UserDefaults from './UserDefaults';

let {width, height} = Dimensions.get('window');

export default class DetailsBox extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    };
    
    render() { 
        return (
            <View style={{width:width-20,backgroundColor:"#fff",margin:10,borderRadius:10,marginBottom:0}}>
                <Text style={{margin:20,marginTop:10,marginBottom:10,fontSize:16}}>{this.props.text}</Text>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    
});