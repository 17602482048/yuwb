/**
 * Copyright 2017-present OMP
 * 项目：新能源智慧运营
 * 作者：zhaoyf on 2017年12月6日
 * 页面名称：任务详情
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

import Common from '../../common/constants';
import UserDefaults from '../../common/UserDefaults';
import Header from '../../common/Header';
import JumpView from '../../common/JumpView';
import TableView from '../../common/TableView';


let {width, height} = Dimensions.get('window');
var bottomView,classVal,zhuangtai;
var val1,val2,val3,val4,val5,val6;
export default class TaskDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible:false,
            TextVal:"",
            transparent:true
        };
    };
    Close(){
        this.setState({
            visible:false,
            TextVal:""
        });
    };
    render() { 
        switch (this.props.TaskState) {
            case "01":
                classVal = "未领取";
                zhuangtai = "01";
                    val1="";val2= "";val3= "";val4= "";val5= "";val6= "";
                bottomView =  <View style={styles._receiveView}>
                                    <TouchableOpacity
                                        style={styles._receiveClick}
                                        onPress={()=>{
                                            this.setState({
                                                visible:true,
                                                TextVal:"领取成功",
                                                transparent:true
                                            });
                                        }}
                                    >
                                        <Text style={styles._receiveText}>领取任务</Text>
                                    </TouchableOpacity>
                            </View>  
                break;
            case "02":
                classVal = "已领取";
                zhuangtai = "02";
                    val1= "巡检中";val2= "巡检中";val3= "巡检中";val4= "未巡检";val5= "未巡检";val6= "未巡检";
                bottomView =  <View style={styles._scanView}>
                                <TouchableOpacity
                                    style={styles._scanClick}
                                    onPress={()=>{
                                        this.setState({
                                            visible:true,
                                            TextVal:"二维码扫描",
                                            transparent:false
                                        });

                                    }}
                                >
                                    <View style={styles._scanBox}>
                                        <Image style={{height:50,width:50}} resizeMode ={"contain"} source={require('../../image/taskCenter/scan.jpg')} />
                                    </View>
                                    <View style={styles._cueView}>
                                        <Text style={styles._cueText}>操作提示</Text>
                                        <Text style={styles._cueText}>一、扫描设备二维码，记录任务开始时间。</Text>
                                        <Text style={styles._cueText}>二、自动匹配设备，进入任务项目页。</Text>
                                        <Text style={styles._cueText}>三、点击此处进行扫描。</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                break;
            case "03":
            zhuangtai = "03";
                classVal = "已完成";
                    val1= "已巡检";
                    val2= "已巡检";
                    val3= "已巡检";
                    val4= "已巡检";
                    val5= "已巡检";
                    val6= "已巡检";
                bottomView = <View></View>
                break;
            default:
                break;
        };
       
        return (
            <View style={styles._container}>
                <Modal
                    animationType={"slide"}
                    transparent={this.state.transparent}
                    visible={this.state.visible}
                    onRequestClose= {() => {}}
                >
                    {
                        this.state.transparent?<TouchableOpacity 
                        style={{flex:1,backgroundColor:"rgba(0,0,0,0.5)",alignItems:"center",justifyContent:"center",}}
                        onPress={this.Close.bind(this)}
                    >
                       <Text style={{color:"#fff",fontSize:20}}>{this.state.TextVal}</Text>
                    
                    </TouchableOpacity>:
                    <View
                        style={{flex:1,backgroundColor:"rgba(0,0,0,0.5)"}}
                    >
                    <Header leftIcon='angle-left' 
                    leftIconAction={() =>{
                        this.setState({
                            visible:false,
                            transparent:true
                        });
                    } } title={'二维码'} />
                        <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
                            <View style={{width:width*0.6,marginLeft:width*0.2,marginRight:width*0.2,height:width*0.6,justifyContent:"center",alignItems:"center",backgroundColor:"#fff"}}>
                                <View style={{width:width*0.6,height:2,backgroundColor:"#F55152"}}></View>
                            </View>
                            <View style={{width:width*0.6,height:18,justifyContent:"center",alignItems:"center",marginTop:20}}>
                                <Text style={{fontSize:15,color:"#fff"}}>放入框内，自动扫描</Text>
                            </View>
                        </View>
                        
                    
                    </View>
                    }
                    
                </Modal>
                 <Header leftIcon='angle-left' leftIconAction={() => this.props.navigator.pop()} title={'任务详情'} />
                {
                    this.props.TaskState == "02"?<TouchableOpacity 
                    style={{width:20,height:20,position:"absolute",top:10,right:10}}
                    onPress={()=>{
                        this.setState({
                            visible:true,
                            TextVal:"提交成功",
                            transparent:true
                        });
                    }}
                >
                    <Image style={{height:20,width:20}} resizeMode ={"contain"} source={require('../../image/taskCenter/file.png')} />
                </TouchableOpacity>:<View></View>
                }
                
                <ScrollView>
                    <View style={styles._ItemBox}>
                        <Image style={{height:20,width:20}} resizeMode ={"contain"} source={require('../../image/taskCenter/file.png')} />
                        <Text style={styles._ItemName}>详细信息</Text>
                    </View>
                    <TableView name={"任务名称"} text={"粗格栅机巡检任"}/>
                    <TableView name={"企业名称"} text={"洪兴钢厂企业"}/>
                    <TableView name={"位        置"} text={"粗格栅机二线"}/>
                    <TableView name={"当前距离"} text={"335.38公里"}/>
                    <TableView name={"任务类型"} text={"巡检"}/>
                    <TableView name={"设备数量"} text={"6"} />
                    <TableView name={"项目数量"} text={"52"} />
                    <TableView name={"状        态"} text={classVal} />
                    <TableView name={"发  起  人"} text={"车间主任"} />
                    <TableView name={"发布时间"} text={"2017-11-28 08:00:00"} />
                    <TableView name={"计划开始时间"} text={"2017-11-28 09:00:00"} />
                    <TableView name={"计划结束时间"} text={"2018-01-28 00:00:00"} />
                    <TableView name={"领取时间"} text={"2018-01-28 10:00:00"} />
                    <TableView name={"实际开始时间"} text={"2017-11-28 09:01:00"} />
                    <TableView name={"实际结束时间"} text={"2018-01-28 00:00:00"} />
                    <TableView name={"任务描述"} text={"对粗格栅机二线的示例计划巡检"} class={{borderBottomColor:"#fff"}}/>
                    <View style={{width:width,height:10,backgroundColor:"#ddd"}}></View>
                    <View style={styles._ItemBox}>
                        <Image style={{height:20,width:20,marginRight:5}} resizeMode ={"contain"} source={require('../../image/taskCenter/device.jpg')} />
                        <Text style={styles._ItemName}>相关设备</Text>
                    </View>
                    <JumpView name={"1#粗格栅机"} state={val1} number={12} navigator={this.props.navigator} zhuangtai={zhuangtai}/>
                    <JumpView name={"PAC加药间机"} state={val2} number={14} navigator={this.props.navigator} zhuangtai={zhuangtai}/>
                    <JumpView name={"紫外线消毒机"} state={val3} number={2} navigator={this.props.navigator} zhuangtai={zhuangtai}/>
                    <JumpView name={"中水回用机"} state={val4} number={12} navigator={this.props.navigator} zhuangtai={zhuangtai}/>
                    <JumpView name={"进水在线检测机"} state={val5}number={5} navigator={this.props.navigator} zhuangtai={zhuangtai}/>
                    <JumpView name={"出水在线检测机"} state={val6} number={7} navigator={this.props.navigator} zhuangtai={zhuangtai} class={{borderBottomColor:"#fff"}}/>

                </ScrollView>
                {bottomView}
            </View>
        );
    }
}
const styles = StyleSheet.create({
    _container: {   // 主页面样式
        flex: 1,
        backgroundColor:'#fff'
    },
    _receiveView:{width:width,height:70,justifyContent:"center",alignItems:"center",},
    _receiveClick:{width:width*0.8,height:50,backgroundColor:"#0099FF",borderRadius:10,justifyContent:"center",alignItems:"center",},
    _receiveText:{color:"#fff",fontSize:18},
    _scanView:{width:width,height:75,justifyContent:"center",alignItems:"center",},
    _scanClick:{width:width*0.9,height:70,justifyContent:"center",alignItems:"center",flexDirection:"row"},
    _scanBox:{width:50,height:50,marginLeft:width*0.1},
    _cueView:{flex:1,marginLeft:10},
    _cueText:{fontSize:10},
    _ItemBox:{flexDirection:"row",width:width*0.95,marginLeft:width*0.025,marginBottom:5,marginTop:5,alignItems:"center",},
    _ItemName:{fontSize:15,color:"#bbb"},
   
});