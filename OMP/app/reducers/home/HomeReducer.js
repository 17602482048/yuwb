/**
 * Copyright 2017-present bcjb_app
 * 项目:白菜鉴宝
 * 作者:liw on 2017/10/11.
 */
import * as types from '../../action/actionTypes'

const initialState = {
	isLogin: false,//是否在登陆状态
	isloading:false,//是否刷新
	userData:null,
};

let HomeReducer = (state = initialState , action) => {
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

export default HomeReducer
