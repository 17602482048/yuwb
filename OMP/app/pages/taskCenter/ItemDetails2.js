/**
 * Copyright 2017-present OMP
 * 项目：新能源智慧运营
 * 作者：zhaoyf on 2017年12月6日
 * 页面名称：工作项目详情2
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
    TextInput,
    TouchableOpacity,
    InteractionManager,
    Modal
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Common from '../../common/constants';
import UserDefaults from '../../common/UserDefaults';
import Header from '../../common/Header';
import DetailsBox from '../../common/DetailsBox';
import RapidWarn1 from './RapidWarn1';
import ItemTemplate from '../../common/ItemTemplate';

let {width, height} = Dimensions.get('window');

export default class ItemDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            queren:false,
            backgroundColor:[{},{backgroundColor:"#F55152"}],
            textColor:[{},{color:"#fff"}],
            visible:false,
            NR:"是",
            editable:true

        };
    };
    Close(){
        this.setState({
            visible:false,
        });
    };
    render() { 
        return (
            <View style={styles._container}>
                <Header leftIcon='angle-left' leftIconAction={() => this.props.navigator.pop()} title={'工作项目详情'} />
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
                <TouchableOpacity 
                    style={{width:20,height:20,position:"absolute",top:10,right:10}}
                    onPress={()=>{
                        this.setState({queren:true,visible:true,editable:false})
                    }}>
                    <Image style={{height:20,width:20}} resizeMode ={"contain"} source={require('../../image/taskCenter/file.png')} />
                </TouchableOpacity>
                <View style={{width:width,height:50,flexDirection:"row",borderBottomColor:"#e6e6e6",borderBottomWidth:1,borderStyle:"solid"}}>
                    <View style={{flex:1,justifyContent:"center"}}>
                        <Text style={{fontSize:15,marginLeft:20}}>1#粗格栅机</Text>
                    </View>
                    <View style={{flex:1,alignItems:"flex-end",justifyContent:"center"}}>
                        <Text style={{fontSize:15,marginRight:20}}>项目数量：12</Text>
                    </View>
                </View>
                <ScrollView>
                    <ItemTemplate text={"1#粗格栅机耙齿动作是否以设定程序动作1#粗格栅机耙齿动作是否以设定程序"} YesOrNo={this.state.queren} navigator={this.props.navigator} NR={this.state.NR}/>
                    {/* 温度 */}
                    <View style={[styles._ViewBox,{height:78}]}>
                        <View style={styles._IconView}>
                        {
                            this.state.queren?<Icon name="md-checkmark-circle-outline" style={{fontSize:30,color:"#49CB5F"}}/>:null
                        } 
                       
                        </View>
                        <View style={{flex:9,}}>
                            <View style={{flex:1,flexDirection:"row",borderBottomColor:"#e6e6e6",borderBottomWidth:1,borderStyle:"solid"}}>
                                <View style={{justifyContent:"center",flex:1}}>
                                    <Text style={{margin:5,marginLeft:0,marginRight:10}}>使用工业温度计测量1#粗格栅机隔热板温度</Text>
                                </View>
                                <View style={{flexDirection:"row",justifyContent:"center",alignItems:"center",marginRight:10}}>
                                    <Text >温度:</Text>
                                    <TextInput
                                        // ref="textInput2"
                                        editable={this.state.editable} 
                                        underlineColorAndroid="#fff"
                                        placeholder=""
                                        placeholderTextColor="#ccc"
                                        style={{width:50,height:30,borderColor:"#ddd",borderWidth:1,borderStyle:"solid",marginLeft:10,marginRight:5,fontSize:10,padding:0,paddingLeft:5,paddingRight:5}}
                                        // secureTextEntry={true}
                                        
                                    />
                                    {/* <View style={{width:30,height:20,borderColor:"#ddd",borderWidth:1,borderStyle:"solid",marginLeft:10,marginRight:5}}></View> */}
                                    <Text>℃</Text>
                                </View>
                            </View>
                            <View style={{flex:1,justifyContent:"center"}}>
                                <Text style={{color:"#ccc"}}>
                                    默认值：1000℃  最大值：10000℃  最小值：500℃
                                </Text>
                            </View>
                        </View>
                    </View>
                    {/* 快速 */}
                    <ItemTemplate text={"1#粗格栅机耙齿动作是否以设定程序动作"} YesOrNo={this.state.queren} navigator={this.props.navigator} NR={this.state.NR}/>
                    {/* 设备情况 */}
                    <View style={styles._ViewBox}>
                        <View style={styles._IconView}>
                        {
                            this.state.queren?<Icon name="md-checkmark-circle-outline" style={{fontSize:30,color:"#49CB5F"}}/>:null
                        } 
                        </View>
                        <View style={{flex:9,}}>
                            <View style={{flex:1,flexDirection:"row",borderBottomColor:"#e6e6e6",borderBottomWidth:1,borderStyle:"solid"}}>
                                <View style={{justifyContent:"center",height:40,}}>
                                    <Text style={{marginLeft:0,marginRight:8}}>1#粗格栅机设备情况</Text>
                                </View>
                                <View style={{flexDirection:"row",flex:2,height:40,alignItems:"center"}}>
                                    <TextInput
                                        // ref="textInput2"
                                        editable={this.state.editable} 
                                        underlineColorAndroid="#fff"
                                        placeholder="填写设备的情况"
                                        placeholderTextColor="#ccc"
                                        style={{flex:1,justifyContent:"center",borderColor:"#ddd",borderWidth:1,borderStyle:"solid",height:30,marginRight:10,padding:0,paddingLeft:5,paddingRight:5}}
                                        // secureTextEntry={true}
                                        
                                    />
                                    {/* <View style={{flex:1,justifyContent:"center",borderColor:"#ddd",borderWidth:1,borderStyle:"solid",height:25,marginLeft:10,marginRight:10}}>
                                        <Text style={{color:"#ccc"}}>填写设备的情况</Text>
                                    </View> */}
                                    
                                </View>
                            </View>
                            <View style={{flex:1,justifyContent:"center",marginTop:3,marginBottom:3}}>
                                <Text style={{color:"#ccc"}}>
                                    默认值：情况正常
                                </Text>
                            </View>
                        </View>
                    </View>
                    <ItemTemplate text={"1#粗格栅机耙齿、栅条是否变形、错位"} YesOrNo={this.state.queren} navigator={this.props.navigator}  NR={this.state.NR}/>
                    <ItemTemplate text={"1#粗格栅机耙齿动作是否以设定程序动作1#粗格栅机耙齿动作是否以设定程序"} YesOrNo={this.state.queren} navigator={this.props.navigator}  NR={this.state.NR}/>
                    <ItemTemplate text={"1#粗格栅机耙齿动作是否以设定程序动作"} YesOrNo={this.state.queren} navigator={this.props.navigator} NR={this.state.NR}/>
                    <ItemTemplate text={"1#粗格栅机耙齿、栅条是否变形、错位"} YesOrNo={this.state.queren} />
                    <ItemTemplate text={"1#粗格栅机耙齿动作是否以设定程序动作1#粗格栅机耙齿动作是否以设定程序"} YesOrNo={this.state.queren} navigator={this.props.navigator} NR={this.state.NR}/>
                    <ItemTemplate text={"1#粗格栅机耙齿动作是否以设定程序动作"} YesOrNo={this.state.queren} navigator={this.props.navigator} NR={this.state.NR}/>
                    <ItemTemplate text={"1#粗格栅机耙齿、栅条是否变形、错位"} YesOrNo={this.state.queren} navigator={this.props.navigator} NR={this.state.NR}/>
                    <ItemTemplate text={"1#粗格栅机耙齿动作是否以设定程序动作1#粗格栅机耙齿动作是否以设定程序"} YesOrNo={this.state.queren} navigator={this.props.navigator} NR={this.state.NR}/>
                    <ItemTemplate text={"1#粗格栅机耙齿动作是否以设定程序动作"} YesOrNo={this.state.queren} navigator={this.props.navigator} NR={this.state.NR}/>
                    <ItemTemplate text={"1#粗格栅机耙齿、栅条是否变形、错位"} YesOrNo={this.state.queren} navigator={this.props.navigator} navigator={this.props.navigator} NR={this.state.NR}/>
                    <ItemTemplate text={"1#粗格栅机耙齿动作是否以设定程序动作1#粗格栅机耙齿动作是否以设定程序"} YesOrNo={this.state.queren} navigator={this.props.navigator} NR={this.state.NR}/>
                    <ItemTemplate text={"1#粗格栅机耙齿动作是否以设定程序动作"} YesOrNo={this.state.queren} navigator={this.props.navigator} NR={this.state.NR}/>
                </ScrollView>
                
            </View>
        );
    }
}
const styles = StyleSheet.create({
    _container: {flex: 1,backgroundColor:'#F2F2F2',paddingBottom:10},
    _ViewBox:{width:width-20,backgroundColor:"#fff",margin:10,borderRadius:10,flexDirection:"row",marginBottom:0},
    _IconView:{flex:1,justifyContent:"center",alignItems:"center"},
});