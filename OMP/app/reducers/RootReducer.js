/**
 * Copyright 2017-present OMP
 * 项目：新能源智慧运营
 * 作者：zhaoyf on 2017年12月6日
 */
import {combineReducers} from 'redux';

import HomeReducer from './home/HomeReducer';//首页
import TaskCenterReducer from './taskCenter/TaskCenterReducer';//任务中心
import EquipmentReducer from './equipment/EquipmentReducer';//设备管理 
import RankingReducer from './ranking/RankingReducer';//排名 
import MineReducer from './mine/MineReducer';//我的 
import TaskDetailsReducer from './taskCenter/TaskDetailsReducer';//任务详情 
import WorkOrderReducer from './taskCenter/WorkOrderReducer';//工单详情 
import ItemDetailsReducer from './taskCenter/ItemDetailsReducer';//工作项目详情

export default RootReducer = combineReducers({
    HomeReducer,//首页
    TaskCenterReducer,//任务中心
    EquipmentReducer,//设备管理
    RankingReducer,//排名
    MineReducer,//我的
    TaskDetailsReducer,//任务详情
    WorkOrderReducer,//工单详情
    ItemDetailsReducer,//工作项目详情
})