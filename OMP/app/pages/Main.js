/**
 * Copyright 2017-present bcjb_app
 * 项目:白菜鉴宝
 * 作者:liw on 2017/10/11.
 */
import React, {Component} from 'react';
import {
    StyleSheet,
    Platform,
    Dimensions,
    TouchableOpacity,
    InteractionManager,
    View,
    Text,
    Image
} from 'react-native';
import TabNavigator from 'react-native-tab-navigator';
import Icon from 'react-native-vector-icons/Ionicons';

import HomeContainer from "../containers/home/HomeContainer";
import TaskCenterContainer from "../containers/taskCenter/TaskCenterContainer";//equipment
import EquipmentContainer from "../containers/equipment/EquipmentContainer";
import RankingContainer from "../containers/ranking/RankingContainer";
import MineContainer from "../containers/mine/MineContainer";

let {width, height} = Dimensions.get('window');
let thiz;
export default class TarBarView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedTab: "home",
            isCircleRefresh:true,
            isHomeRefresh:true,
            y:15,

        };
        thiz=this;

    }
    // componentDidMount() {
    //     this.changePosition();
    // }

    // changePosition(){
    //     setInterval(()=>{
    //         this.setState({y:15})
    //     },500)
    // }

    render() {
        return (
            <View style={{flex:1}}>
                <TabNavigator tabBarStyle={styles.tabs}>
                    {/*--首页--*/}
                    {this.renderTabBarItem('首页', require('../image/home/homeNav.png'), require('../image/home/homeNav1.png'), 'home', <HomeContainer
                        OnPass={this.OnPass}  circleRefresh={(isCircleRefresh,isHomeRefresh)=>{this.circleRefresh(isCircleRefresh,isHomeRefresh)}}     superiorState={this.state} navigator={this.props.navigator} {...this.props} />)}
                    {/*--任务中心--*/}
                    {this.renderTabBarItem('任务中心', require('../image/home/expertNav.png'), require('../image/home/expertNav1.png'), 'taskCenter', <TaskCenterContainer
                        superiorState={this.state} navigator={this.props.navigator} {...this.props} />)}
                    {/*--设备管理--*/}
                    {this.renderTabBarItem('设备管理', require('../image/home/expertNav.png'), require('../image/home/expertNav1.png'), 'experts', <EquipmentContainer
                        superiorState={this.state} navigator={this.props.navigator} {...this.props} />)}
                    {/*--排名--*/}
                    {this.renderTabBarItem('排名',require('../image/home/circleNav.png'), require('../image/home/circleNav1.png'), 'circle', <RankingContainer
                        OnPass={this.OnPass}  circleRefresh={(isCircleRefresh,isHomeRefresh)=>{this.circleRefresh(isCircleRefresh,isHomeRefresh)}}  superiorState={this.state} navigator={this.props.navigator} {...this.props}/>)}
                    {/*--我的--*/}
                    {this.renderTabBarItem('我的', require('../image/home/myNav.png'), require('../image/home/myNav1.png'), 'mine', <MineContainer
                        OnPass={this.OnPass}  circleRefresh={(isCircleRefresh,isHomeRefresh)=>{this.circleRefresh(isCircleRefresh,isHomeRefresh)}}   superiorState={this.state} navigator={this.props.navigator} {...this.props}/>)}

                </TabNavigator>
                
            </View>
        );
    }


    /**
     * 刷新圈子列表
     *
     * @author wuyh
     */
    circleRefresh(isCircleRefresh,isHomeRefresh){
        thiz.setState({
            isCircleRefresh:isCircleRefresh,
            isHomeRefresh:isHomeRefresh
        });
    }




    /**
     * 选中菜单
     *
     * @author wuyh
     * @param name 菜单名称
     * @param item
     */
    jump(name){
        InteractionManager.runAfterInteractions(() => {
            this.props.navigator.push({
                name: name,
                component: IdentifyContainer,
                passProps: {
                    ...this.props,
                    type: 'normal',
                    OnPass:this.OnPass,
                }
            })
        })
    }


    OnPass(selectedTab) {
        thiz.setState({
            selectedTab: selectedTab,
        })
    }

    renderTabBarItem(title, iconName, selectedIconName, selectedTab, component, isShowNum) {
        return (
            <TabNavigator.Item
                title={title}
                titleStyle={styles.renderNavigation}
                selected={this.state.selectedTab === selectedTab}
                selectedTitleStyle={styles.renderSelectedNavigation}
                renderIcon={() => <Image style={styles.identifyImgStyle1} source={iconName}/>}
                renderSelectedIcon={() => <Image style={styles.identifyImgStyle1} source={selectedIconName}/>}
                onPress={() => this.OnPass(selectedTab)}
            >
                {component}
            </TabNavigator.Item>
        )
    }

}

const styles = StyleSheet.create({
    iconStyle: {
        width: Platform.OS === 'ios' ? 30 : 25,
        height: Platform.OS === 'ios' ? 30 : 25
    },
    renderNavigation: {
        color: "#CCCCCC",
        fontSize: 13,
    },
    identifyImgStyle: {

    },
    identifyImgStyle1: {
        height:20,
        width: 20,
        zIndex:1000,
    },
    renderNavigationIcon: {
        color: "#CCCCCC",
        fontSize: 27,
    },
    renderSelectedNavigation: {
        color: "#0099FF",

    },
    badgeView: {
        width: 22,
        height: 15,
        // backgroundColor: '#f85959',
        backgroundColor:'#fff',
        borderWidth: 1,
        marginLeft: 10,
        marginTop: 3,
        borderColor: '#FFF',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,
        padding: 1,
    },
    badgeText: {
        color: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 8,
        borderRadius: 6,
    },
    tabs: {
        height: 50,
        flexDirection: 'row',
        paddingTop: 5,
        borderWidth: 1,
        borderTopWidth: 0,
        borderLeftWidth: 0,
        borderRightWidth: 0,
        borderBottomColor: 'rgba(0,0,0,0.05)',
    },
});