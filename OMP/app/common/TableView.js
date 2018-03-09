/**
 * Copyright 2017-present OMP
 * 项目：新能源智慧运营
 * 作者：zhaoyf on 2017年12月6日
 * 页面名称：列表组件
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

export default class TableView extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    };
    
    render() { 
        return (
            <View style={[styles._box,this.props.class,{}]}>
                <Text style={styles._name}>{this.props.name}：</Text>
                <Text style={styles._text}>{this.props.text}</Text>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    _box:{flexDirection:"row",width:width-10,borderBottomColor:"#e6e6e6",borderBottomWidth:1,borderStyle:"solid",marginLeft:10,paddingTop:5,paddingBottom:5,alignItems:"flex-start",},
    _name:{fontSize:15,color:"#bbb"},
    _text:{fontSize:15,paddingLeft:10,paddingRight:10,flex:1},
});