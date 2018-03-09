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
    Image,
    ScrollView,
    InteractionManager,
    TouchableOpacity,
    RefreshControl,
    Modal,
} from 'react-native';

import Common from '../../common/constants';
import UserDefaults from '../../common/UserDefaults';
import Header from '../../common/Header';
import Task from '../../common/Task';
import SearchView from '../../common/SearchView';
import Icon from 'react-native-vector-icons/Ionicons';
import ScrollableTabView,{DefaultTabBar} from 'react-native-scrollable-tab-view';


let {width, height} = Dimensions.get('window');
let tabList = ['待办','在办','办毕'];//子菜单名称
export default class TaskCenter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        };
        thiz = this;
    };
    
    render() { 
        return (
            <View style={styles._container}>
                <Header title={"任务中心"}/>
                <ScrollableTabView
                    renderTabBar={() =>  <DefaultTabBar/> }
                    tabBarBackgroundColor="#fcfcfc"
                    tabBarUnderlineStyle={{backgroundColor:'#0099FF'}}
                    tabBarActiveTextColor="#0099FF"
                    // tabBarInactiveTextColor="#222"
                    tabBarPosition='top'
                    prerenderingSiblingsNumber={Infinity}
                >
                    <View tabLabel={"待办"} >
                        {/* 搜索组件 */}
                        <SearchView/>
                        {/* 任务列表 */}
                        <ScrollView style={styles._ScrollView}>
                            <Task
                                taskName={"20171130140227 粗格栅机巡检任务"}
                                companyName={"洪兴钢厂企业"}
                                place={"粗格栅机二线"}
                                distance={"335.38公里"}
                                class={"01"}//巡检 01  工单 02  保养 03
                                equipmentNum={"6"}
                                itemNum={"52"}
                                releaseTime={"2017-11-28 08:00:00"}
                                planStartTime={"2017-11-28 09:00:00"}
                                planEndTime={"2018-01-28 00:00:00"}
                                state={"01"}//未领取 01  已开始 02  已完成 03
                                navigator={this.props.navigator}
                            />
                            <Task
                                taskName={"20171130140228 排水泵维修工单"}
                                companyName={"建龙钢厂企业"}
                                place={"水务环保二线"}
                                distance={"135.38公里"}
                                class={"02"}//巡检 01  工单 02  保养 03
                                equipmentNum={"1"}
                                itemNum={"1"}
                                releaseTime={"2017-11-28 08:00:00"}
                                planStartTime={"2017-11-28 09:00:00"}
                                planEndTime={"2018-01-28 00:00:00"}
                                state={"01"}//未领取 01  已开始 02  已完成 03
                                navigator={this.props.navigator}
                            />
                        </ScrollView>
                    </View>
                    <View tabLabel={"在办"} >
                        {/* 搜索组件 */}
                        <SearchView/>
                        {/* 任务列表 */}
                        <ScrollView style={styles._ScrollView}>
                            <Task
                                taskName={"20171130140227 粗格栅机巡检任务"}
                                companyName={"洪兴钢厂企业"}
                                place={"粗格栅机二线"}
                                distance={"335.38公里"}
                                class={"01"}//巡检 01  工单 02  保养 03
                                equipmentNum={"6"}
                                itemNum={"52"}
                                releaseTime={"2017-11-28 08:00:00"}
                                planStartTime={"2017-11-28 09:00:00"}
                                planEndTime={"2018-01-28 00:00:00"}
                                state={"02"}//未领取 01  已开始 02  已完成 03
                                navigator={this.props.navigator}
                            />
                            <Task
                                taskName={"20171130140228 排水泵维修工单"}
                                companyName={"建龙钢厂企业"}
                                place={"水务环保二线"}
                                distance={"135.38公里"}
                                class={"02"}//巡检 01  工单 02  保养 03
                                equipmentNum={"1"}
                                itemNum={"1"}
                                releaseTime={"2017-11-28 08:00:00"}
                                planStartTime={"2017-11-28 09:00:00"}
                                planEndTime={"2018-01-28 00:00:00"}
                                state={"02"}//未领取 01  已开始 02  已完成 03
                                navigator={this.props.navigator}
                            />
                        </ScrollView>
                    </View>
                    <View tabLabel={"办毕"} >
                    {/* 搜索组件 */}
                        <SearchView/>
                        {/* 任务列表 */}
                        <ScrollView style={styles._ScrollView}>
                            <Task
                                taskName={"20171130140227 粗格栅机巡检任务"}
                                companyName={"洪兴钢厂企业"}
                                place={"粗格栅机二线"}
                                distance={"335.38公里"}
                                class={"01"}//巡检 01  工单 02  保养 03
                                equipmentNum={"6"}
                                itemNum={"52"}
                                releaseTime={"2017-11-28 08:00:00"}
                                planStartTime={"2017-11-28 09:00:00"}
                                planEndTime={"2018-01-28 00:00:00"}
                                state={"03"}//未领取 01  已开始 02  已完成 03
                                navigator={this.props.navigator}
                            />
                            <Task
                                taskName={"20171130140228 排水泵维修工单"}
                                companyName={"建龙钢厂企业"}
                                place={"水务环保二线"}
                                distance={"135.38公里"}
                                class={"02"}//巡检 01  工单 02  保养 03
                                equipmentNum={"1"}
                                itemNum={"1"}
                                releaseTime={"2017-11-28 08:00:00"}
                                planStartTime={"2017-11-28 09:00:00"}
                                planEndTime={"2018-01-28 00:00:00"}
                                state={"03"}//未领取 01  已开始 02  已完成 03
                                navigator={this.props.navigator}
                            />
                        </ScrollView>
                    </View>
                </ScrollableTabView>
            </View>
        );
    };
};

const styles = StyleSheet.create({
    _container: {   // 主页面样式
        flex: 1,
        backgroundColor:'#fff'
        //backgroundColor:'#e6e6e6'
    },
    _ScrollView:{
        width:width,
        marginTop:10,
        backgroundColor:"#e6e6e6",
        marginBottom:50,
        height:height-230
    },
    
});