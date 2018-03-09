/**
 * Copyright 2017-present OMP
 * 项目：新能源智慧运营
 * 作者：zhaoyf on 2017年12月6日
 * 页面名称：列表组件
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
import Icon from 'react-native-vector-icons/Ionicons';
let {width, height} = Dimensions.get('window');

export default class ClickView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            borderColor:[{backgroundColor:"#e6e6e6",},{backgroundColor:"#e6e6e6",},{backgroundColor:"#e6e6e6",}],
            color:[{},{},{}],
            color2:[{color:"#fff"},{color:"#fff"},{color:"#fff"}],
        };
    };
    _click(index){
        switch (index) {
            case "一般":
                this.setState({
                    borderColor:[{backgroundColor:"#49CB5F"},{backgroundColor:"#e6e6e6",},{backgroundColor:"#e6e6e6",}],
                    color:[{color:"#fff"},{},{}],
                });
                break;
            case "重大":
                this.setState({
                    borderColor:[{backgroundColor:"#e6e6e6",},{backgroundColor:"#2FA2F5"},{backgroundColor:"#e6e6e6",}],
                    color:[{},{color:"#fff"},{}],
                });
                break;
            case "紧急":
                this.setState({
                    borderColor:[{backgroundColor:"#e6e6e6",},{backgroundColor:"#e6e6e6",},{backgroundColor:"#F55152"}],
                    color:[{},{},{color:"#fff"}],
                });
                break;
        
            default:
                break;
        }
    }
    render() { 
        
        return (
            
            <View style={{flexDirection:"row",marginTop:10}}>
                {
                    this.props.name.map((item, i) =>
                    this.props.editable?
                        <TouchableOpacity 
                            style={[styles._box,this.state.borderColor[i]]}
                            onPress={this._click.bind(this,item)}
                        >   
                            <Text style={[this.state.color[i]]}>{item}</Text>
                            
                            {/* <Icon name={"ios-checkmark-outline"} style={[{fontSize:22,marginLeft:10,},this.state.color2[i]]}/> */}
                        </TouchableOpacity>:
                    <View 
                        style={[styles._box,this.state.borderColor[i]]}
                    >   
                        <Text style={[this.state.color[i]]}>{item}</Text>
                        
                        {/* <Icon name={"ios-checkmark-outline"} style={[{fontSize:22,marginLeft:10,},this.state.color2[i]]}/> */}
                    </View>
                    )
                }
                
            </View>
        );
    }
}
const styles = StyleSheet.create({
    _box:{flexDirection:"row",flex:1,borderRadius:8,height:35,justifyContent:"center",alignItems:"center",marginLeft:10,marginRight:10,},
});