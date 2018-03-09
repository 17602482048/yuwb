/**
 * Copyright 2017-present OMP
 * 项目：新能源智慧运营
 * 作者：zhaoyf on 2017年12月6日
 */
import * as types from '../../action/actionTypes'

const initialState = {
	isLogin: false,//是否在登陆状态
	isloading:false,//是否刷新
	userData:null,
};

let TaskDetailsReducer = (state = initialState , action) => {
  switch (action.type) {
    case types.DATA_LOADING:
      	return Object.assign({}, state, {
        	isLogin: false,//是否在登陆状态
			isloading:true,//是否刷新
			userData:null,
		});
	case types.HOME_SUCCESS:
      	return Object.assign({}, state, {
        	isLogin: true,//是否在登陆状态
			isloading:false,//是否刷新
			userData:null,
		  });
	case types.HOME_FAIL:
      	return Object.assign({}, state, {
        	isLogin: false,//是否在登陆状态
			isloading:false,//是否刷新
			userData:null,
      	});
    default:
      return state
  }
}

export default TaskDetailsReducer
