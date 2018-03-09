/**
 * Copyright 2017-present OMP
 * 项目：新能源智慧运营
 * 作者：zhaoyf on 2017年12月6日
 * 页面名称：首页
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
    TouchableOpacity,
    InteractionManager,
    Modal,
} from 'react-native';
import TaskDetailsContainer from '../../containers/taskCenter/TaskDetailsContainer';//任务详情
import Common from '../../common/constants';
import UserDefaults from '../../common/UserDefaults';
import Icon from 'react-native-vector-icons/Ionicons';
let {width, height} = Dimensions.get('window');

var thisOjb;
export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            state:"01",
            cue:false,
            dingwei:[
                {top:100,left:180},
                {top:167,left:270},
                {top:148,left:205},
                {top:235,left:156},
                {top:234,left:256},
                {top:321,left:123},
                {top:90,left:32},
                {top:432,left:164},
                {top:400,left:231},
                {top:245,left:145}
            ],
            one:{
                color:"#0099FF",
                fontSize:10
                
            },
            two:{
                fontSize:10
            },
            states:1 
        };
        thisOjb = this;
    };
    //待办点击事件
    oneClick(){
        this.setState({
            state:"01",
            dingwei: [
                {top:100,left:180},
                {top:167,left:270},
                {top:148,left:205},
                {top:235,left:156},
                {top:234,left:256},
                {top:321,left:123},
                {top:90,left:32},
                {top:432,left:164},
                {top:400,left:231},
                {top:245,left:145}
            ],
            one:{
                color:"#0099FF",
                fontSize:10
            },
            two:{
                fontSize:10
            },
            states:1
        })
    };
    twoClick(){
        
        this.setState({
            state:"02",
            dingwei: [
                {top:300,left:180},
                {top:167,left:258},
                {top:389,left:205},
                {top:60,left:112},
                {top:98,left:287},
                {top:89,left:33},
            ],
            one:{
                fontSize:10,
            },
            two:{
                color:"#0099FF",
                fontSize:10,
            },
            states:2         
        })
    };
    // 点击弹出信息 popcue
    PopCue(){
        this.setState({
            cue:true
        });
        
    };
    //点击弹出隐藏
    Close(){
        this.setState({
            cue:false,
        });
    };
    Jump(){
        InteractionManager.runAfterInteractions(() => {
            this.props.navigator.push({
                name: "任务详情",
                component: TaskDetailsContainer,
                passProps: {
                    TaskMark: "001",
                    TaskState: this.state.state,
                }
            })
        });
        this.setState({
            cue:false,
        });
    }
    render() { 
        return (
            <View style={styles._container}>
            <Modal
                    animationType={"slide"}
                    transparent={true}
                    visible={this.state.cue}
                    onRequestClose= {() => {}}
                >
                    <View
                        style={styles._ModalView}
                        // onPress={this.Close.bind(this)}
                    >
                        <View style={styles._ModalCenter}>
                            <View>
                                <View style={styles._ModalTitle}>
                                    {
                                        this.state.state == "01"?<Text style={styles._ModalTitleText}>待办任务</Text>:<Text style={styles._ModalTitleText}>在办任务</Text>
                                    }
                                </View>
                                <View style={styles.__ModalBox}>
                                    <View style={styles.__ModalIconView}><Icon name="md-clipboard" style={styles.__ModalIcon}/></View> 
                                    <View style={styles.__ModalTextView}><Text style={styles.__ModalText1}>任务名称：</Text><Text style={styles.__ModalText2}>粗格栅机巡检任务</Text></View>
                                </View>
                                <View style={styles.__ModalBox}>
                                    <View style={styles.__ModalIconView}><Icon name="md-home" style={styles.__ModalIcon}/></View>
                                    <View style={styles.__ModalTextView}><Text style={styles.__ModalText1}>企业名称：</Text><Text style={styles.__ModalText2}>洪兴钢厂企业</Text></View>
                                </View>
                                <View style={styles.__ModalBox}>
                                    <View style={[styles.__ModalIconView,]}><Icon name="md-pin" style={styles.__ModalIcon}/></View>
                                    <View style={styles.__ModalTextView}><Text style={styles.__ModalText1}>当前距离：</Text><Text style={styles.__ModalText2}>335.38公里</Text></View>
                                </View>
                            </View>
                            <View style={styles._ClickView}>
                                <TouchableOpacity 
                                    style={[styles._Click,styles._Click1]}
                                    onPress={this.Jump.bind(this)}
                                >
                                    {
                                        this.state.state == "01"?<Text style={{color:"#fff"}}>去领取</Text>:<Text style={{color:"#fff"}}>去查看</Text>
                                    }
                                    
                                </TouchableOpacity>
                                <TouchableOpacity 
                                    style={[styles._Click,styles._Click2]}
                                    onPress={this.Close.bind(this)}
                                >
                                    <Text style={{color:"#fff"}}>取消</Text>
                                </TouchableOpacity>
                            </View>

                        </View>
                    </View>
                </Modal>
                {/* 背景图片 */}
                <Image
                    source={require('../../image/home/bj.jpg')} 
                    style={styles._bj}
                   // resizeMode ={"contain"}
                >
                    {/* 定位点 */}
                   { this.state.dingwei.map((item, i) =>
                    <TouchableOpacity
                        key={i}
                        style={[{position:"absolute",zIndex:10,},item]}
                        onPress={this.PopCue.bind(this)}
                    >
                        <Image 
                            source={require('../../image/home/dingwei.png')} 
                            style={[styles._dingwei]}
                            resizeMode ={"contain"}
                        />
                    </TouchableOpacity>
                    )
                    }
                </Image>
                {/* 切换功能 */}
                <View style={styles._bottomSwitch}>
                    <TouchableOpacity
                        style={styles._boxView}
                        onPress={this.oneClick.bind(this)}
                    >
                        <View style={styles._circleView}>
                            <Text style={styles._num}>10</Text>
                        </View>
                        <Text style={this.state.one}>待办</Text>
                    </TouchableOpacity>
                    <View style={styles._partition}></View>
                    <TouchableOpacity
                        style={styles._boxView}
                        onPress={this.twoClick.bind(this)}
                    >
                        <View style={styles._circleView}>
                            <Text style={styles._num}>5</Text>
                        </View>
                        <Text style={this.state.two}>在办</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    };
}
const styles = StyleSheet.create({
    _container: {   // 主页面样式
        flex: 1,
        // backgroundColor:'#e6e6e6'
        backgroundColor:'#fff'
    },
    _bj:{
        width:width,
        flex:1,
        alignItems: "center",
    },
    _dingwei:{
        width:30,
        height:30,
    },
    _bottomSwitch:{
        width:width,
        height:60,
        position:"absolute",
        bottom:0,
        justifyContent:"center",
        alignItems:"center",
        flexDirection:"row",
        backgroundColor:"rgba(255,255,255,0.6)",
    },
    _boxView:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
    },
    _circleView:{
        width:30,
        height:30,
        borderRadius:15,
        justifyContent:"center",
        alignItems:"center",
        borderColor:"#0099FF",
        borderStyle:"solid",
        borderWidth:3
    },
    _num:{
        color:"#FFCC33",
        fontSize:10
    },
    _partition:{
        width:width/4,
        height:5,
        backgroundColor:"#FFCC33"
    },
    _ModalView:{flex:1,backgroundColor:"rgba(0,0,0,0.5)",alignItems:"center",justifyContent:"center",},
    _ModalCenter:{width:width*0.8,backgroundColor:"#fff",borderRadius:10},
    _ModalTitle:{height:30,flexDirection:"row",alignItems:"center",justifyContent:"center",backgroundColor:"#0099ff",borderTopLeftRadius:10,borderTopRightRadius:10},
    _ModalTitleText:{fontSize:15,color:"#fff"},
    __ModalBox:{height:30,marginLeft:30,marginRight:30,flexDirection:"row",alignItems:"center"},
    __ModalIconView:{width:30,justifyContent:"center",alignItems:"center"},
    __ModalIcon:{fontSize:20,marginRight:10},
    __ModalTextView:{flex:1,flexDirection:"row"},
    __ModalText1:{fontSize:15,color:"#ccc"},
    __ModalText2:{fontSize:15,},
    _ClickView:{height:50,borderTopColor:"#e6e6e6",borderTopWidth:1,borderStyle:"solid",flexDirection:"row"},
    _Click:{flex:1,height:30,marginTop:10,marginBottom:10,borderRadius:10,justifyContent:"center",alignItems:"center",},
    _Click1:{backgroundColor:"#0099ff",marginLeft:30,marginRight:15},
    _Click2:{backgroundColor:"#F55152",marginLeft:15,marginRight:30},
});