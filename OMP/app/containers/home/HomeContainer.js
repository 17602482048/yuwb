/**
 * Copyright 2017-present bcjb_app
 * 项目:白菜鉴宝
 * 作者:liw on 2017/10/11.
 */
import React from 'react';
import {connect} from 'react-redux'; 
import Home from '../../pages/home/Home';
 
class HomeContainer extends React.Component {
    
    render() {
        return (
            <Home {...this.props} />
        )
    }
}

export default connect((state) => {
    const { HomeReducer } = state;
    return {
        HomeReducer
    }
})(HomeContainer);