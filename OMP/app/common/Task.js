/**
 * Copyright 2017-present OMP
 * 项目：新能源智慧运营
 * 作者：zhaoyf on 2017年12月6日
 * 页面名称：订单组件
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
import TaskDetailsContainer from '../containers/taskCenter/TaskDetailsContainer';//任务详情
import WorkOrderContainer from '../containers/taskCenter/WorkOrderContainer';//工单详情

let {width, height} = Dimensions.get('window');
var stateBottom,classVal;
export default class Task extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible:false
        };
        thiz = this;
    };
    Close(){
        this.setState({
            visible:false
        });
    };
    /**
     * 功能：跳转到任务详情页面
     * 参数：1、任务编号   TaskMark
     *      2、任务状态    TaskState  01  待办   02  在办   03   办毕
     *      3、任务类型    巡检 01  工单 02  保养 03
     */
    _taskDetails(TaskMark,Class){
        let component , name;
        switch (Class) {
            case "01":
                component = TaskDetailsContainer;
                name = "任务详情";
                break;
            case "02":
                component = WorkOrderContainer;
                name = "工单详情";
               break;
            case "03":
               
               break;
           default:
               break;
       }
        InteractionManager.runAfterInteractions(() => {
            this.props.navigator.push({
                name: name,
                component: component,
                passProps: {
                    TaskMark: TaskMark,
                    TaskState: this.props.state,
                }
            })
        })
    };
    render() { 
        switch (this.props.state) {
            case "01":
                stateBottom =   <View style={styles._state}>
                                    <View style={styles._rwzt}>
                                        <Text style={styles._text1}>未领取</Text>
                                    </View>
                                    <View style={styles._box1}>
                                        <View style={styles._oneBox}>
                                            <TouchableOpacity
                                                style={styles._oneClick}
                                                onPress={()=>{
                                                    this.setState({
                                                        visible:true
                                                    });
                                                }}
                                            >
                                                <Text style={styles._text2}>领取</Text>
                                            </TouchableOpacity>
                                        </View>
                                        <View style={styles._oneBox}>
                                            <TouchableOpacity
                                                style={styles._oneClick}
                                                onPress={this._taskDetails.bind(this,"001",this.props.class)}
                                            >
                                                <Text style={styles._text2}>查看</Text>
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                </View>
                break;
            case "02":
                stateBottom =   <View style={styles._state}>
                                    <View style={styles._rwzt}>
                                        <Text style={styles._text1}>已开始</Text>
                                    </View>
                                    <View style={styles._box1}>
                                        <View style={styles._oneBox}>
                                            <TouchableOpacity
                                                style={styles._oneClick}
                                                onPress={this._taskDetails.bind(this,"001",this.props.class)}
                                            >
                                                <Text style={styles._text2}>执行</Text>
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                </View>
                break;
            case "03":
                stateBottom =   <View style={styles._state}>
                                    <View style={styles._rwzt}>
                                        <Text style={styles._text1}>已完成</Text>
                                    </View>
                                    <View style={styles._box1}>
                                        <View style={styles._oneBox}>
                                            <TouchableOpacity
                                                style={styles._oneClick}
                                                onPress={this._taskDetails.bind(this,"001",this.props.class)}
                                            >
                                                <Text style={styles._text2}>详情</Text>
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                </View>
                break;
            default:
                break;
        };
        switch (this.props.class) {
            case "01":
                classVal = "巡检";
                break;
            case "02":
                classVal = "工单";
                break;
            case "03":
                classVal = "保养";
                break;
            default:
                break;
        }
        return (
            <View style={styles._taskBox}>
                <Modal
                    animationType={"slide"}
                    transparent={true}
                    visible={this.state.visible}
                    onRequestClose= {() => {}}
                >
                    <TouchableOpacity
                        style={{flex:1,backgroundColor:"rgba(0,0,0,0.5)",alignItems:"center",justifyContent:"center",}}
                        onPress={this.Close.bind(this)}
                    >
                        <Text style={{color:"#fff",fontSize:20}}>领取成功</Text>
                    </TouchableOpacity>
                </Modal>
                <View style={styles._taskName}>
                    <Text style={styles._taskNameText}>{this.props.taskName}</Text>
                </View>
                <View style={styles._box}>
                    <View style={{flex:1,flexDirection:"row"}}><Text style={[styles._text,]}>企业名称：</Text><Text style={styles._text6}>{this.props.companyName}</Text></View>
                </View>
                <View style={styles._box}>
                    <View style={{flex:1,flexDirection:"row"}}><Text style={styles._text}>位置：</Text><Text style={styles._text6}>{this.props.place}</Text></View>
                    <View style={{flex:1,flexDirection:"row"}}><Text style={styles._text}>当前距离：</Text><Text style={styles._text6}>{this.props.distance}</Text></View>
                </View>
                <View style={styles._box}>
                    <View style={{flex:1,flexDirection:"row"}}><Text style={styles._text}>类型：</Text><Text style={styles._text6}>{classVal}</Text></View>
                    <View style={{flex:1,flexDirection:"row"}}><Text style={styles._text}>设备数量：</Text><Text style={styles._text6}>{this.props.equipmentNum}</Text></View>
                    <View style={{flex:1,flexDirection:"row"}}><Text style={styles._text}>项目数量：</Text><Text style={styles._text6}>{this.props.itemNum}</Text></View>
                </View>
                <View style={styles._box}>
                    <View style={{flex:1,flexDirection:"row"}}><Text style={styles._text}>发布时间：</Text><Text style={styles._text6}>{this.props.releaseTime}</Text></View>
                </View>
                <View style={styles._box}>
                    <View style={{flex:1,flexDirection:"row"}}><Text style={styles._text}>计划开始时间：</Text><Text style={styles._text6}>{this.props.planStartTime}</Text></View>
                </View>
                <View style={styles._box}>
                    <View style={{flex:1,flexDirection:"row"}}><Text style={styles._text}>计划结束时间：</Text><Text style={styles._text6}>{this.props.planEndTime}</Text></View>
                </View>

                {stateBottom}
            </View>
        );
    }
}
const styles = StyleSheet.create({
    _taskBox:{
        backgroundColor:"#fff",
        width:width-20,
        marginLeft:10,
        marginRight:10,
        marginTop:10,
        borderRadius:5,
    },
    _taskName:{
        width:width-30,
        flexDirection:"row",
        alignItems:"center",
        margin:5,
        marginBottom:2,
    },
    _taskNameText:{
        color:"#0099ff",
        fontSize:15,
    },
    _box:{
        width:width-30,
        flexDirection:"row",
        alignItems:"center",
        marginLeft:5,
        marginRight:5,
    },
    _text:{
        color:"#ccc",
        fontSize:15,
        //flex:1,
    },
    _text6:{
        fontSize:15,
        //flex:1,
    },
    _state:{
        flex:1,
        flexDirection:"row",
        alignItems:"center",
        width:width-20,
        height:45,
        borderTopColor:"#e6e6e6",
        borderStyle:"solid",
        borderTopWidth:1,
        marginTop:5,
    },
    _rwzt:{
        marginLeft:5,
        flex:1,
    },
    _text1:{
        fontSize:15,
        color:"#ccc",
    },
    _box1:{
        flex:1,
        flexDirection:"row",
        alignItems:"center",
        marginRight:5,
        justifyContent:"flex-end",
    },
    _oneBox:{
        flex:1,
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"flex-end",
    },
    _oneClick:{
        width:60,
        backgroundColor:"#0099FF",
        alignItems:"center",
        justifyContent:"center",
        borderRadius:5,
        height:30
    },
    _text2:{
        fontSize:15,
        color:"#fff",
    }
});