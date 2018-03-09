/**
 * Copyright 2017-present OMP
 * 项目：新能源智慧运营
 * 作者：zhaoyf on 2017年12月6日
 */
import React from 'react';
import {connect} from 'react-redux'; 
import TaskCenter from '../../pages/taskCenter/TaskCenter';
 
class TaskCenterContainer extends React.Component {
    
    render() {
        return (
            <TaskCenter {...this.props} />
        )
    }
}

export default connect((state) => {
    const { TaskCenterReducer } = state;
    return {
        TaskCenterReducer
    }
})(TaskCenterContainer);