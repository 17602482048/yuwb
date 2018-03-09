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
    TextInput,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Common from '../../common/constants';
import UserDefaults from '../../common/UserDefaults';
import Header from '../../common/Header';
import TableView from '../../common/TableView';
let {width, height} = Dimensions.get('window');

export default class RapidWarn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible:false,
            editable:true
        };
        thiz = this;
    };
    Close(){
        this.setState({
            visible:false,
            editable:false
        });
    };
    render() { 
       
        return (
            <View style={styles._container}>
                <Header leftIcon='angle-left' leftIconAction={() => this.props.navigator.pop()} title={'快速报障'} />
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
                <ScrollView>
                    <TableView name={"任务编号"} text={"201711301140227"}/>
                    <TableView name={"设备名称"} text={"1#粗格栅机"}/>
                    <TableView name={"设备位置"} text={"粗格栅机二线"}/>
                    <TableView name={"报  障  人"} text={"张三"}/>
                    <TableView name={"保障时间"} text={"2017-11-28 08:00:00"}/>
                    <TableView name={"发生故障时间"} text={"2017-11-28 07:00:00"}/>
                    <View style={{width:width,height:10,backgroundColor:"#ddd"}}></View>
                    <TextInput
                        editable={false}
                        style={{width:width-20,marginLeft:10,height:200,borderColor:"#e6e6e6",borderStyle:"solid",borderWidth:1,marginTop:10,height:200,backgroundColor:'#fff',padding:15}}
                        underlineColorAndroid="#fff"
                        placeholder="1#粗格栅机运转动作是否点动正常 发生异常"
                        textAlignVertical='top' 
                        clearButtonMode='always'
                        // placeholderTextColor="#ccc"
                        multiline={true}
                        maxLength={200}
                    />
                    <View style={{flexDirection:"row",marginTop:10}}>
                        <View style={[styles._box,{backgroundColor:"#e6e6e6",}]}>   
                            <Text>一般</Text>
                        </View>
                        <View style={[styles._box,{backgroundColor:"#2FA2F5",}]}>   
                            <Text style={{color:"#fff"}}>重大</Text>
                        </View>
                        <View style={[styles._box,{backgroundColor:"#e6e6e6",}]}>   
                            <Text>紧急</Text>
                        </View>
                    </View>
                </ScrollView>
                {/* <View style={styles._receiveView}>
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
                </View>  */}
            </View>

        );
    }
}
const styles = StyleSheet.create({
    _container: { flex: 1,backgroundColor:'#fff'},
    // _receiveView:{width:width,height:70,justifyContent:"center",alignItems:"center",},
    // _receiveClick:{width:width*0.8,height:50,backgroundColor:"#0099FF",borderRadius:10,justifyContent:"center",alignItems:"center",},
    // _receiveText:{color:"#fff",fontSize:18},
    _box:{flexDirection:"row",flex:1,borderRadius:8,height:35,justifyContent:"center",alignItems:"center",marginLeft:10,marginRight:10,},
});