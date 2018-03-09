/**
 * Copyright 2017-present OMP
 * 项目：新能源智慧运营
 * 作者：zhaoyf on 2017年12月6日
 * 页面名称：条款组件
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

export default class JumpView extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    };
    
    render() { 
        return (
            <View style={[{width:width-20,height:38,flexDirection:"row",marginLeft:10,alignItems:"center",},]}>
                {this.props.Icon?<View style={{flexDirection:"row",alignItems:"center",height:12,width:12,marginRight:8,}}>
                    <Image style={{height:12,width:12,}} resizeMode ={"contain"}  source={require('../image/taskCenter/dian.jpg')}/>
                </View>:null}
                <View style={[{flexDirection:"row",width:width-8,alignItems:"center",borderBottomColor:"#e6e6e6",borderBottomWidth:1,borderStyle:"solid"},this.props.class]}>
                    <Text style={{fontSize:15,marginBottom:5,marginTop:5}}>{this.props.content}</Text>
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    
});