/**
 * Copyright 2017-present bcjb_app
 * 项目:白菜鉴宝
 * 作者:liw on 2017/10/11.
 */
import React from 'react';
import {connect} from 'react-redux'; 
import Ranking from '../../pages/ranking/Ranking';
 
class RankingContainer extends React.Component {
    
    render() {
        return (
            <Ranking {...this.props} />
        )
    }
}

export default connect((state) => {
    const { RankingReducer } = state;
    return {
        RankingReducer
    }
})(RankingContainer);