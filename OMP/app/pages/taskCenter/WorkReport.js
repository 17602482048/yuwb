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
import Icon from 'react-native-vector-icons/Ionicons';
import Common from '../../common/constants';
import UserDefaults from '../../common/UserDefaults';
import Header from '../../common/Header';
import TableView from '../../common/TableView';
let {width, height} = Dimensions.get('window');
var xiamian;
export default class RapidWarn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible:false,
            TextVal:"",
            yincang:false,
        };
    };
    Close(){
        this.setState({
            visible:false,
            TextVal:""
        });
    };
    render() { 
       if(this.props.woqu == "01"){
            xiamian = <View style={styles._receiveView}>
                        <TouchableOpacity
                            style={styles._receiveClick}
                            onPress={()=>{
                                this.setState({
                                    visible:true,
                                });
                            }}
                        >
                            <Text style={styles._receiveText}>保存</Text>
                        </TouchableOpacity>
                    </View>
       } else {
            xiamian = null;
       }
        return (
            <View style={styles._container}>
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
                        <Text style={{color:"#fff",fontSize:20}}>保存成功</Text>
                    </TouchableOpacity>
                </Modal>
                <Header leftIcon='angle-left' leftIconAction={() => this.props.navigator.pop()} title={'工作报告'} />
                <ScrollView>
                    <TableView name={"工单编号"} text={"201711301140227"}/>
                    <TableView name={"工单名称"} text={"排水泵维修任工单"}/>
                    <TableView name={"设备名称"} text={"排水泵"}/>
                    <TableView name={"设备位置"} text={"水务环保二线"}/>
                    <TableView name={"维  修  人"} text={"张三"}/>
                    {
                        this.props.woqu == "02"?<TableView name={"工作用时"} text={"2小时"}/>:null
                    }
                    {/*  */}
                    <TableView name={"汇报内容"} text={"汇报内容汇报内容汇报内容汇报内容汇报内容汇报内汇报内容汇报内容汇报内容汇报内容汇报内容汇报内汇报内容汇报内容汇报内容汇报内容汇报内容汇报内汇报内容汇报内容汇报内容汇报内容汇报内容汇报内汇报内容汇报内容汇报内容汇报内容汇报内容汇报内汇报内容汇报内容汇报内容汇报内容汇报内容汇报内"}/>
                    <View style={{width:width,height:10,backgroundColor:"#ddd"}}></View>
                    <View style={{width:400,marginLeft:(width-400)/2,height:200,borderColor:"#ccc",borderStyle:"solid",borderWidth:1,marginTop:10,justifyContent:"center",alignItems:"center"}}>
                        <Text style={{margin:5,fontSize:20}}>添加故障维修后的图片</Text>
                    </View>
                    
                </ScrollView>
                {xiamian}
            </View>

        );
    }
}
const styles = StyleSheet.create({
    _container: { flex: 1,backgroundColor:'#fff'},
    _receiveView:{width:width,height:70,justifyContent:"center",alignItems:"center",},
    _receiveClick:{width:width*0.8,height:50,backgroundColor:"#0099FF",borderRadius:10,justifyContent:"center",alignItems:"center",},
    _receiveText:{color:"#fff",fontSize:18},
});