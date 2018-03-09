/**
 * Copyright 2017-present OMP
 * 项目：新能源智慧运营
 * 作者：zhaoyf on 2017年12月6日
 */
import React from 'react';
import {connect} from 'react-redux'; 
import ItemDetails from '../../pages/taskCenter/ItemDetails';
 
class ItemDetailsContainer extends React.Component {
    
    render() {
        return (
            <ItemDetails {...this.props} />
        )
    }
}

export default connect((state) => {
    const { ItemDetailsReducer } = state;
    return {
        ItemDetailsReducer
    }
})(ItemDetailsContainer);