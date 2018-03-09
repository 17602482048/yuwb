/**
 * Copyright 2017-present OMP
 * 项目：新能源智慧运营
 * 作者：zhaoyf on 2017年12月6日
 * 页面名称：项目泪飙
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
import RapidWarn1 from '../pages/taskCenter/RapidWarn1';
import Common from './constants';
import UserDefaults from './UserDefaults';
import Icon from 'react-native-vector-icons/Ionicons';
let {width, height} = Dimensions.get('window');

export default class ItemTemplate extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tabClick:true,
            backgroundColor:[{backgroundColor:"#49CB5F"},{}],
            textColor:[{color:"#fff"},{}],
            hid:false,
            NR:this.props.NR
        };
    };
    // 判断图标的显示
    panduan(){
        if(this.props.YesOrNo){
            if (this.state.hid) {
                return (<Icon name="md-close-circle" style={{fontSize:30,color:"#F55152"}}/>);
            } else {
                return (<Icon name="md-checkmark-circle-outline" style={{fontSize:30,color:"#49CB5F"}}/>);
            }
            
        } else {
            return null;
        }
    };
    // 判断是否可选
    panduan2(){
        if(this.props.YesOrNo){
            return (
            <View style={{flexDirection:"row",width:100,justifyContent:"center",alignItems:"center"}}>
                 <View 
                style={[{width:40,height:25,justifyContent:"center",alignItems:"center",marginLeft:5,marginRight:5},]}
                >
                    <Text></Text>
                </View>
                <View 
                style={[{width:40,height:25,justifyContent:"center",alignItems:"center",marginLeft:5,marginRight:5},]}
                >
                    <Text>{this.state.NR}</Text>
                </View>
            </View>
            );
        } else {
            return (
            <View style={{flexDirection:"row",width:100,justifyContent:"center",alignItems:"center"}}>
                <TouchableOpacity 
                    style={[{width:40,height:25,backgroundColor:"#ccc",justifyContent:"center",alignItems:"center",marginLeft:5,marginRight:5},this.state.backgroundColor[0]]}
                    onPress={()=>{
                        this.setState({
                            backgroundColor:[{backgroundColor:"#49CB5F"},{}],
                            textColor:[{color:"#fff"},{}],
                            hid:false,
                            NR:"是"
                        });
                    }}
                >
                    <Text style={[this.state.textColor[0]]}>是</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    style={[{width:40,height:25,backgroundColor:"#ccc",justifyContent:"center",alignItems:"center",marginLeft:5,marginRight:5},this.state.backgroundColor[1]]}
                    onPress={()=>{
                        this.setState({
                            backgroundColor:[{},{backgroundColor:"#F55152"}],
                            textColor:[{},{color:"#fff"}],
                            hid:true,
                            NR:"否"
                        });
                    }}
                >
                    <Text style={[,this.state.textColor[1]]}>否</Text>
                </TouchableOpacity>
            </View>
            );
        }
    };
    render() { 
        return (
            <View style={styles._ViewBox}>
                {/* 图标部分 */}
                <View style={styles._IconView}>
                    {this.panduan()} 
                </View>
                {/* 文字部分 */}
                <View style={{flex:9,}}>
                    <View style={{flex:1,flexDirection:"row"}}>
                        <View style={{flex:1,justifyContent:"center"}}>
                            <Text style={{margin:5,marginLeft:0,marginRight:10}}>{this.props.text}</Text>
                        </View>
                        {this.panduan2()}
                    </View>
                    {this.state.hid?<View style={{flex:1,justifyContent:"center",alignItems:"flex-end",borderTopColor:"#e6e6e6",borderTopWidth:1,borderStyle:"solid"}}>
                                <TouchableOpacity 
                                    style={{width:100,height:25,borderRadius:10,justifyContent:"center",alignItems:"center",backgroundColor:"#F55152",marginTop:5,marginBottom:8,marginRight:8}}
                                    onPress={()=>{
                                        InteractionManager.runAfterInteractions(() => {
                                            this.props.navigator.push({
                                                name: "快速报障",
                                                component: RapidWarn1,
                                                passProps: {

                                                }
                                            })
                                        })
                                    }}
                                >
                                    <Text style={{color:"#fff"}}>
                                        快速报障
                                    </Text>
                                </TouchableOpacity>
                            </View>:null
                    }
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    _ViewBox:{width:width-20,backgroundColor:"#fff",margin:10,borderRadius:10,flexDirection:"row",marginBottom:0},
    _IconView:{flex:1,justifyContent:"center",alignItems:"center",marginTop:8,marginBottom:8},
});