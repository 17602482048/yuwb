/**
 * Copyright 2017-present bcjb_app
 * 项目:白菜鉴宝
 * 作者:liw on 2017/10/11.
 */
import React from 'react';
import {connect} from 'react-redux'; 
import Equipment from '../../pages/equipment/Equipment';
 
class EquipmentContainer extends React.Component {
    
    render() {
        return (
            <Equipment {...this.props} />
        )
    }
}

export default connect((state) => {
    const { EquipmentReducer } = state;
    return {
        EquipmentReducer
    }
})(EquipmentContainer);