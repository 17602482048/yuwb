/**
 * Copyright 2017-present OMP
 * 项目：新能源智慧运营
 * 作者：zhaoyf on 2017年12月6日
 * 页面名称：工作项目详情
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
import Icon from 'react-native-vector-icons/Ionicons';
import Common from '../../common/constants';
import UserDefaults from '../../common/UserDefaults';
import Header from '../../common/Header';
import DetailsBox from '../../common/DetailsBox';

let {width, height} = Dimensions.get('window');

export default class ItemDetails extends Component {
    render() { 
        return (
            <View style={styles._container}>
                <Header leftIcon='angle-left' leftIconAction={() => this.props.navigator.pop()} title={'工作项目详情'} />
                <View style={{width:width,height:50,flexDirection:"row",borderBottomColor:"#e6e6e6",borderBottomWidth:1,borderStyle:"solid"}}>
                    <View style={{flex:1,justifyContent:"center"}}>
                        <Text style={{fontSize:15,marginLeft:20}}>1#粗格栅机</Text>
                    </View>
                    <View style={{flex:1,alignItems:"flex-end",justifyContent:"center"}}>
                        <Text style={{fontSize:15,marginRight:20}}>项目数量：12</Text>
                    </View>
                </View>
                {/* 未领取 */}
                <ScrollView>
                    <DetailsBox text={"1#粗格栅机耙齿动作是否以设定程序动作"}/>
                    <DetailsBox text={"1#粗格栅机耙齿、栅条是否变形、错位"}/>
                    <DetailsBox text={"1#粗格栅机耙齿动作是否以设定程序动作1#粗格栅机耙齿动作是否以设定程序"}/>
                    <DetailsBox text={"1#粗格栅机耙齿、栅条是否变形、错位"}/>
                    <DetailsBox text={"1#粗格栅机耙齿动作是否以设定程序动作"}/>
                    <DetailsBox text={"1#粗格栅机耙齿动作是否以设定程序动作1#粗格栅机耙齿动作是否以设定程序"}/>
                    <DetailsBox text={"1#粗格栅机耙齿动作是否以设定程序动作"}/>
                    <DetailsBox text={"1#粗格栅机耙齿、栅条是否变形、错位"}/>
                    <DetailsBox text={"1#粗格栅机耙齿动作是否以设定程序动作"}/>
                    <DetailsBox text={"1#粗格栅机耙齿动作是否以设定程序动作1#粗格栅机耙齿动作是否以设定程序"}/>
                    <DetailsBox text={"1#粗格栅机耙齿、栅条是否变形、错位"}/>
                    <DetailsBox text={"1#粗格栅机耙齿动作是否以设定程序动作"}/>
                    <DetailsBox text={"1#粗格栅机耙齿动作是否以设定程序动作1#粗格栅机耙齿动作是否以设定程序"}/>
                </ScrollView>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    _container: {   // 主页面样式
        flex: 1,
        backgroundColor:'#F2F2F2',
        paddingBottom:10
        // backgroundColor:'#fff'
    },
});