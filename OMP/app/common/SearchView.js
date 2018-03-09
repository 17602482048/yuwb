/**
 * Copyright 2017-present OMP
 * 项目：新能源智慧运营
 * 作者：zhaoyf on 2017年12月6日
 * 页面名称：搜索组件
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
import Icon from 'react-native-vector-icons/Ionicons';
let {width, height} = Dimensions.get('window');

export default class SearchView extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    };
    
    render() { 
        return (
            <View style={[styles._search,{flexDirection:"row"}]}>
                        <View style={{flex:1.2,borderColor:"#ccc",borderStyle:"solid",borderWidth:1,flexDirection:"row",justifyContent:"center",alignItems:"center"}}>
                            <Text style={{flex:3,marginLeft:8}}>全部</Text>
                            <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
                            <Icon name="md-arrow-dropdown" />
                            </View>
                        </View>
                        <View style={{flex:4,flexDirection:"row",justifyContent:"center",alignItems:"center",}}>
                            <View style={{alignItems:"flex-end",marginLeft:10}}><Text style={{fontSize:15}}>日期：</Text></View>
                            <View style={{flex:2,borderColor:"#ccc",borderWidth:1,borderStyle:"solid",height:30,justifyContent:"center",alignItems:"center",flexDirection:"row"}}>
                                <Text style={{flex:2.5}}></Text>
                                <View style={{flex:1.5,borderLeftColor:"#ccc",borderLeftWidth:1,borderStyle:"solid",height:30,justifyContent:"center",alignItems:"center"}}>
                                    <Icon name="md-calendar" style={{fontSize:20}}/>
                                </View>
                            </View>
                            <Text style={{}}> — </Text>
                            <View style={{flex:2,borderColor:"#ccc",borderWidth:1,borderStyle:"solid",height:30,justifyContent:"center",alignItems:"center",flexDirection:"row"}}>
                                <Text style={{flex:2.5}}></Text>
                                <View style={{flex:1.5,borderLeftColor:"#ccc",borderLeftWidth:1,borderStyle:"solid",height:30,justifyContent:"center",alignItems:"center"}}>
                                    <Icon name="md-calendar" style={{fontSize:20}}/>
                                </View>
                            </View>
                        </View>
                        <TouchableOpacity
                            style={{height:30,marginLeft:10,width:60,backgroundColor:"blue",justifyContent:"center",alignItems:"center",borderRadius:10}}
                        >
                            <Text style={{color:"#fff",}}>搜索</Text>
                        </TouchableOpacity>
                    </View>
        );
    }
}
const styles = StyleSheet.create({
    _search:{
        width:width-20,
        height:30,
        marginLeft:10,
        marginRight:10,
        marginTop:10,
    }
});