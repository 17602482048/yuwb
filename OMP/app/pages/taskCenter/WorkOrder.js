/**
 * Copyright 2017-present OMP
 * 项目：新能源智慧运营
 * 作者：zhaoyf on 2017年12月6日
 * 页面名称：工单详情
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
    InteractionManager,
    Modal,
} from 'react-native';

import Common from '../../common/constants';
import UserDefaults from '../../common/UserDefaults';
import Header from '../../common/Header';
import JumpView from '../../common/JumpView';
import TableView from '../../common/TableView';
import ClauseView from '../../common/ClauseView';
import WorkReport from './WorkReport';
let {width, height} = Dimensions.get('window');

export default class WorkOrder extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible:false,
            TextVal:"",
            yincang:false,
            transparent:true,
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
                classVal = "已完成";
                bottomView = <View style={styles._receiveView}>
                <TouchableOpacity
                    style={styles._receiveClick}
                    onPress={()=>{
                        InteractionManager.runAfterInteractions(() => {
                            this.props.navigator.push({
                                name: "工作报告",
                                component: WorkReport,
                                passProps: {
                                    woqu:"02"
                                }
                            })
                        })
                    }}
                >
                    <Text style={styles._receiveText}>查看报告</Text>
                </TouchableOpacity>
        </View>
                break;
            default:
                break;
        }
        return (
            <View style={styles._container}>
                <Modal
                    animationType={"slide"}
                    transparent={this.state.transparent}
                    visible={this.state.visible}
                    onRequestClose= {() => {}}
                >
                    {/* <TouchableOpacity
                        style={{flex:1,backgroundColor:"rgba(0,0,0,0.5)",alignItems:"center",justifyContent:"center",}}
                        onPress={this.Close.bind(this)}
                    >
                        <Text style={{color:"#fff",fontSize:20}}>{this.state.TextVal}</Text>
                    </TouchableOpacity> */}
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
                            transparent:true,
                            yincang:true,
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
                 <Header leftIcon='angle-left' leftIconAction={() => this.props.navigator.pop()} title={'工单详情'} />
                {
                    this.props.TaskState == "02"?<TouchableOpacity 
                    style={{width:20,height:20,position:"absolute",top:10,right:10}}
                    onPress={()=>{
                        this.setState({
                            visible:true,
                            TextVal:"提交成功"
                        });
                    }}
                >
                    <Image style={{height:20,width:20}} resizeMode ={"contain"} source={require('../../image/taskCenter/file.png')} />
                </TouchableOpacity>:<View></View>
                }
                
                <ScrollView>
                    <View style={styles._ItemBox}>
                        <Image style={{height:20,width:20}} resizeMode ={"contain"} source={require('../../image/taskCenter/file.png')} />
                        <Text style={styles._ItemName}>工单信息</Text>
                    </View>
                    <TableView name={"工单名称"} text={"排水泵维修工单"}/>
                    <TableView name={"企业名称"} text={"建龙刚才企业"}/>
                    <TableView name={"设备名称"} text={"排水泵"}/>
                    <TableView name={"位        置"} text={"水务环保二线"}/>
                    <TableView name={"当前距离"} text={"135.38公里"}/>
                    <TableView name={"任务类型"} text={"工单"}/>
                    <TableView name={"设备数量"} text={"1"} />
                    <TableView name={"状        态"} text={classVal} />
                    <TableView name={"发  起  人"} text={"车间主任"} />
                    <TableView name={"发布时间"} text={"2017-11-28 08:00:00"} />
                    <TableView name={"计划开始时间"} text={"2017-11-28 09:00:00"} />
                    <TableView name={"计划结束时间"} text={"2018-01-28 00:00:00"} />
                    <TableView name={"领取时间"} text={"2018-01-28 10:00:00"} />
                    <TableView name={"实际开始时间"} text={"2017-11-28 09:01:00"} />
                    <TableView name={"实际结束时间"} text={"2018-01-28 00:00:00"} />
                    <TableView name={"任务描述"} text={"排水泵堵死，更换排水泵清理污垢"} class={{borderBottomColor:"#fff"}}/>
                    <View style={{width:width,height:10,backgroundColor:"#ddd"}}></View>
                    <View style={styles._ItemBox}>
                        <Image style={{height:20,width:20,marginRight:5}} resizeMode ={"contain"} source={require('../../image/taskCenter/device.jpg')} />
                        <Text style={styles._ItemName}>工器具</Text>
                    </View>
                    {/* <ClauseView Icon={false} content={"扳手：2个   钳子：1个  锤子：1个"}/>
                    <ClauseView Icon={false} content={"电钻：1个   梅花螺丝刀：1个"}/> */}
                    <View style={[styles._ItemBox,{flexWrap:"wrap"}]}>
                    <View style={styles._ToolBox}>
                            <Text style={styles._ToolText}>扳手：2个</Text>
                        </View>
                        <View style={styles._ToolBox}>
                            <Text style={styles._ToolText}>钳子：1个</Text>
                        </View>
                        <View style={styles._ToolBox}>
                            <Text style={styles._ToolText}>锤子：1个</Text>
                        </View>
                        <View style={styles._ToolBox}>
                            <Text style={styles._ToolText}>电钻：1个</Text>
                        </View>
                        <View style={styles._ToolBox}>
                            <Text style={styles._ToolText}>梅花螺丝刀：1个</Text>
                        </View>
                    </View>
                    <View style={{width:width,height:10,backgroundColor:"#ddd"}}></View>
                    <View style={styles._ItemBox}>
                        <Image style={{height:20,width:20,marginRight:5}} resizeMode ={"contain"} source={require('../../image/taskCenter/device.jpg')} />
                        <Text style={styles._ItemName}>工作步骤</Text>
                    </View>
                    <ClauseView Icon={false} content={"1.观察和调查故障现象"}/>
                    <ClauseView Icon={false} content={"2.分析故障原因一初步确定故障范围、缩小故障部位"}/>
                    <ClauseView Icon={false} content={"3.确定故障的部位一判断故障点"}/>
                    <ClauseView Icon={false} content={"4.使用合理工具进行维修"} class={{borderBottomColor:"#fff"}}/>
                    <View style={{width:width,height:10,backgroundColor:"#ddd"}}></View>
                    <View style={styles._ItemBox}>
                        <Image style={{height:20,width:20,marginRight:5}} resizeMode ={"contain"} source={require('../../image/taskCenter/device.jpg')} />
                        <Text style={styles._ItemName}>注意事项</Text>
                    </View>
                        <ClauseView Icon={true} content={"戴好安全帽，系好帽带，并正确使用个人劳动防护用品"}/>
                        <ClauseView Icon={true} content={"严格执行操作规程，不得违章指挥和违章作业"}/>
                        <ClauseView Icon={true} content={"穿拖鞋、高跟鞋、赤脚或赤膊不准进入施工现场"}/>
                        <ClauseView Icon={true} content={"穿硬底鞋不得进行登高作业"} class={{borderBottomColor:"#fff"}}/>
                        <View style={{width:width,height:10,backgroundColor:"#ddd"}}></View>
                    <View style={styles._ItemBox}>
                        <Image style={{height:20,width:20,marginRight:5}} resizeMode ={"contain"} source={require('../../image/taskCenter/device.jpg')} />
                        <Text style={styles._ItemName}>安全提示</Text>
                    </View>
                        <ClauseView Icon={true} content={"施工现场设置临时消防车道，保证消防车辆畅通行驶"}/>
                        <ClauseView Icon={true} content={"临时消防水泵房设专人值班管理，保证消防供水"}/>
                        <ClauseView Icon={true} content={"严禁施工现场动火、动焊与铺设保温材料等交叉作业"}/>
                        <ClauseView Icon={true} content={"在施建筑工程严禁住人或办公"} class={{borderBottomColor:"#fff"}}/>

                </ScrollView>
                {/* {bottomView} */}
                {this.state.yincang?<View style={styles._receiveView}>
                    <TouchableOpacity
                        style={styles._receiveClick}
                        onPress={()=>{
                            InteractionManager.runAfterInteractions(() => {
                                this.props.navigator.push({
                                    name: "工作报告",
                                    component: WorkReport,
                                    passProps: {
                                        woqu:"01"
                                    }
                                })
                            })
                        }}
                    >
                        <Text style={styles._receiveText}>填写报告</Text>
                    </TouchableOpacity>
                </View>:bottomView} 
            </View>
        );
    }
}
const styles = StyleSheet.create({
    _container: { flex: 1,backgroundColor:'#fff'},
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
    _ToolBox:{height:30,borderRadius:10,backgroundColor:"#ddd",marginLeft:8,marginTop:5,marginBottom:5,justifyContent:"center",alignItems:"center",borderStyle:"dotted",borderColor:"#aaa",borderWidth:2},
    _ToolText:{fontSize:15,marginLeft:5,marginRight:5},
});