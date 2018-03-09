/**
 * Copyright 2017-present OMP
 * 项目：新能源智慧运营
 * 作者：zhaoyf on 2017年12月6日
 */
import React from 'react';
import {connect} from 'react-redux'; 
import WorkOrder from '../../pages/taskCenter/WorkOrder';
 
class WorkOrderContainer extends React.Component {
    
    render() {
        return (
            <WorkOrder {...this.props} />
        )
    }
}

export default connect((state) => {
    const { WorkOrderReducer } = state;
    return {
        WorkOrderReducer
    }
})(WorkOrderContainer);