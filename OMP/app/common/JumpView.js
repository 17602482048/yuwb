/**
 * Copyright 2017-present OMP
 * 项目：新能源智慧运营
 * 作者：zhaoyf on 2017年12月6日
 * 页面名称：跳转组件
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
import ItemDetailsContainer from '../containers/taskCenter/ItemDetailsContainer';
import ItemDetails2 from '../pages/taskCenter/ItemDetails2';
import ItemDetails3 from '../pages/taskCenter/ItemDetails3';
let {width, height} = Dimensions.get('window');

export default class JumpView extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    };
    
    render() { 
        return (
            <TouchableOpacity 
                style={[{width:width-10,height:30,flexDirection:"row",marginLeft:10,borderBottomColor:"#e6e6e6",borderBottomWidth:1,borderStyle:"solid"},this.props.class]}
                onPress={()=>{
                    let component;
                    switch (this.props.zhuangtai) {
                        case "01":
                        component = ItemDetailsContainer;
                            break;
                        case "02":
                        component = ItemDetails2;
                            break;
                        case "03":
                        component = ItemDetails3;
                            break;
                    
                        default:
                            break;
                    }
                    InteractionManager.runAfterInteractions(() => {
                        this.props.navigator.push({
                            name: "工作项目详情",
                            component: component,
                            passProps: {
                                
                            }
                        })
                    })
                }}
            >
                <View style={{flexDirection:"row",flex:1,alignItems:"center"}}>
                    <Text style={{fontSize:15}}>{this.props.name}</Text>
                    <Text style={{fontSize:15}}>（{this.props.number}）</Text>
                </View>
                <View style={{flexDirection:"row",alignItems:"center"}}>
                    <Text style={{fontSize:15}}>{this.props.state}</Text>
                    <Image style={{height:18,width:18,}} resizeMode ={"contain"} source={require('../image/taskCenter/RightArrow.png')} />
                </View>
            </TouchableOpacity>
        );
    }
}
const styles = StyleSheet.create({
    
});