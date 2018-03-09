/**
 * Copyright 2017-present bcjb_app
 * 项目:白菜鉴宝
 * 作者:liw on 2017/10/11.
 */
import React from 'react';
import {connect} from 'react-redux'; 
import Mine from '../../pages/mine/Mine';
 
class MineContainer extends React.Component {
    
    render() {
        return (
            <Mine {...this.props} />
        )
    }
}

export default connect((state) => {
    const { MineReducer } = state;
    return {
        MineReducer
    }
})(MineContainer);