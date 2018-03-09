/**
 * Copyright 2017-present OMP
 * 项目：新能源智慧运营
 * 作者：zhaoyf on 2017年12月6日
 */
import React from 'react';
import {connect} from 'react-redux'; 
import TaskDetails from '../../pages/taskCenter/TaskDetails';
 
class TaskDetailsContainer extends React.Component {
    
    render() {
        return (
            <TaskDetails {...this.props} />
        )
    }
}

export default connect((state) => {
    const { TaskDetailsReducer } = state;
    return {
        TaskDetailsReducer
    }
})(TaskDetailsContainer);